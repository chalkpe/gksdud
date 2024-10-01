/**
 * Reference on section 3.12 on http://www.unicode.org/versions/Unicode9.0.0/ch03.pdf
 */

const ALPHABETS = 'qQwWeErRtTyYuUiIoOpPaAsSdDfFgGhHjJkKlLzZxXcCvVbBnNmM'
const HANGEUL_JAMOS = 'ㅂㅃㅈㅉㄷㄸㄱㄲㅅㅆㅛㅛㅕㅕㅑㅑㅐㅒㅔㅖㅁㅁㄴㄴㅇㅇㄹㄹㅎㅎㅗㅗㅓㅓㅏㅏㅣㅣㅋㅋㅌㅌㅊㅊㅍㅍㅠㅠㅜㅜㅡㅡ'
const HANGEUL_SYLLABLE = /([ㄱㄲㄴㄷ-ㄹㅁ-ㅃㅅ-ㅎ])([ㅏ-ㅖㅛㅠㅣ]|ㅗ[ㅏㅐㅣ]?|ㅜ[ㅓㅔㅣ]?|ㅡㅣ?)(?:([ㄲㄷㅁㅅ-ㅈㅊ-ㅎ]|ㄱㅅ?|ㄴ[ㅈㅎ]?|ㄹ[ㄱㅁㅂㅅㅌ-ㅎ]?|ㅂㅅ?)(?![ㅏ-ㅣ]))?/g
 
const S_BASE = 0xAC00
const L_BASE = 0x1100
const V_BASE = 0x1161
const T_BASE = 0x11A7
const L_COUNT = 19
const V_COUNT = 21
const T_COUNT = 28
const N_COUNT = V_COUNT * T_COUNT // 588 
const S_COUNT = L_COUNT * N_COUNT // 11172

const CHUSEONG = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const JUNGSEONG = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
const JONGSEONG = ' ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ';

const initial = i => CHUSEONG.indexOf(i)
const medial = m => JUNGSEONG.indexOf(m)
const final = f => JONGSEONG.indexOf(f)

const complex = c => ({ 'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ', 'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ', 'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ', 'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ', 'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ', 'ㅂㅅ': 'ㅄ' })[c] || c
const decomplex = c => ({ 'ㅘ': 'ㅗㅏ' , 'ㅙ': 'ㅗㅐ' , 'ㅚ': 'ㅗㅣ' , 'ㅝ': 'ㅜㅓ' , 'ㅞ': 'ㅜㅔ' , 'ㅟ': 'ㅜㅣ' , 'ㅢ': 'ㅡㅣ' , 'ㄳ': 'ㄱㅅ' , 'ㄵ': 'ㄴㅈ' , 'ㄶ': 'ㄴㅎ' , 'ㄺ': 'ㄹㄱ' , 'ㄻ': 'ㄹㅁ' , 'ㄼ': 'ㄹㅂ' , 'ㄽ': 'ㄹㅅ' , 'ㄾ': 'ㄹㅌ' , 'ㄿ': 'ㄹㅍ' , 'ㅀ': 'ㄹㅎ' , 'ㅄ': 'ㅂㅅ'  })[c] || c


const toHangeul = c => ALPHABETS.includes(c) ? HANGEUL_JAMOS[ALPHABETS.indexOf(c)] : c
const replaceAlphabets = s => typeof s === 'string' ? [...s].map(toHangeul).join('') : ''
const stack = (i, m, f = ' ') => String.fromCharCode(S_BASE + final(f) + medial(m) * T_COUNT + initial(i) * N_COUNT)
const gksdud = s => replaceAlphabets(s).replace(HANGEUL_SYLLABLE, (_, i, m, f) => stack(i, complex(m), complex(f)))


const toAlphabet = c => HANGEUL_JAMOS.includes(c) ? ALPHABETS[HANGEUL_JAMOS.indexOf(c)] : c;
const decomposeHangeul = c => {
    const SIndex = c.charCodeAt(0) - S_BASE;
    if (SIndex < 0 || SIndex >= S_COUNT) { // not a hangeul syllable
        return decomplex(c);
    }

    const LIndex = Math.floor(SIndex / N_COUNT);
    const VIndex = Math.floor((SIndex % N_COUNT) / T_COUNT);
    const TIndex = SIndex % T_COUNT;

    let ret = [CHUSEONG[LIndex], decomplex(JUNGSEONG[VIndex])];
    if (TIndex > 0) ret.push(decomplex(JONGSEONG[TIndex]));

    return ret.join('');
}
const replaceHangeulSyl = s => typeof s === 'string' ? [...s].map(decomposeHangeul).join('') : '';
const reverseGksdud = s => [...replaceHangeulSyl(s)].map(toAlphabet).join('');

if (typeof module === 'object' && typeof exports === 'object') {
    module.exports = gksdud 
    module.exports.reverseGksdud = reverseGksdud;
    module.exports.gksdud = gksdud;
}
