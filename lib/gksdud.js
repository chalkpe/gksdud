const ALPHABETS = 'qQwWeErRtTyYuUiIoOpPaAsSdDfFgGhHjJkKlLzZxXcCvVbBnNmM'
const HANGEUL_JAMOS = 'ㅂㅃㅈㅉㄷㄸㄱㄲㅅㅆㅛㅛㅕㅕㅑㅑㅐㅒㅔㅖㅁㅁㄴㄴㅇㅇㄹㄹㅎㅎㅗㅗㅓㅓㅏㅏㅣㅣㅋㅋㅌㅌㅊㅊㅍㅍㅠㅠㅜㅜㅡㅡ'
const HANGEUL_SYLLABLE = /([ㄱㄲㄴㄷ-ㄹㅁ-ㅃㅅ-ㅎ])([ㅏ-ㅖㅛㅠㅣ]|ㅗ[ㅏㅐㅣ]?|ㅜ[ㅓㅔㅣ]?|ㅡㅣ?)(?:([ㄲㄷㅁㅅ-ㅈㅊ-ㅎ]|ㄱㅅ?|ㄴ[ㅈㅎ]?|ㄹ[ㄱㅁㅂㅅㅌ-ㅎ]?|ㅂㅅ?)(?![ㅏ-ㅣ]))?/g

const initial = i => 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.indexOf(i)
const medial = m => 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.indexOf(m)
const final = f => ' ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'.indexOf(f)
const complex = c => ({ 'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ', 'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ', 'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ', 'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ', 'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ', 'ㅂㅅ': 'ㅄ' })[c] || c

const toHangeul = c => ALPHABETS.includes(c) ? HANGEUL_JAMOS[ALPHABETS.indexOf(c)] : c
const replaceAlphabets = s => typeof s === 'string' ? [...s].map(toHangeul).join('') : ''
const stack = (i, m, f = ' ') =>{ let ret = String.fromCharCode(44032 + final(f) + medial(m) * 28 + initial(i) * 588);
    console.log(`i:${i} m:${m} f:${f} resulted in: ${ret}`);
    return ret;
}
export const gksdud = s => replaceAlphabets(s).replace(HANGEUL_SYLLABLE, (_, i, m, f) => stack(i, complex(m), complex(f)))

const SBase = 0xAC00
const LBase = 0x1100
const VBase = 0x1161
const TBase = 0x11A7
const LCount = 19
const VCount = 21
const TCount = 28
const NCount = VCount * TCount // 588 
const SCount = LCount * NCount // 11172

const CHOfiller = 0x115f
const JUNGfiller = 0x1160

const stackFromCode = (LIndex, VIndex, TIndex = 0) => String.fromCharCode(SBase + TIndex + VIndex * TCount + LIndex * NCount);

const decomposeHangeul = c => {
    let charcode = c.charCodeAt(0);
    const SIndex = charcode - SBase;
    if (SIndex < 0 || SIndex >= SCount) { //not hangeul
        return c;
    }

    // console.log(`char is ${c}, its code is 0x${charcode.toString(16)}`);
    let ret = []

    const LIndex = Math.floor(SIndex / NCount);
    const VIndex = Math.floor((SIndex % NCount) / TCount);
    const TIndex = SIndex % TCount;
    const LPart = LBase + LIndex;
    const VPart = VBase + VIndex;

    ret.push(stackFromCode(LIndex, -1));
    ret.push(stackFromCode(-1, VIndex));
    // [LPart, JUNGfiller].map(code => ret.push(String.fromCharCode(code)));
    // [CHOfiller, VPart].map(code => ret.push(String.fromCharCode(code)));

    if (TIndex > 0) {
        const TPart = TBase + TIndex;
        ret.push(stackFromCode(TIndex, -1));
        // [CHOfiller, JUNGfiller, TPart].map(code => ret.push(String.fromCharCode(code)));
    }

    console.log(`lead is ${ret[0]}, its code is 0x${ret[0].charCodeAt(0).toString(16)}`);
    console.log(`ㅎ is 0x${"ㅎ".charCodeAt(0).toString(16)}`);
    console.log(`ㅍ is 0x${"ㅍ".charCodeAt(0).toString(16)}`);
    return ret.join('');
}
const replaceHangeulSyl = s => typeof s === 'string' ? [...s].map(decomposeHangeul).join('') : ''
export const reverseGksdud = s => replaceHangeulSyl(s);

if (typeof module === 'object' && typeof exports === 'object') module.exports = gksdud
