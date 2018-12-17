const ALPHABETS = 'qQwWeErRtTyYuUiIoOpPaAsSdDfFgGhHjJkKlLzZxXcCvVbBnNmM'
const HANGEUL_JAMOS = 'ㅂㅃㅈㅉㄷㄸㄱㄲㅅㅆㅛㅛㅕㅕㅑㅑㅐㅒㅔㅖㅁㅁㄴㄴㅇㅇㄹㄹㅎㅎㅗㅗㅓㅓㅏㅏㅣㅣㅋㅋㅌㅌㅊㅊㅍㅍㅠㅠㅜㅜㅡㅡ'
const HANGEUL_SYLLABLE = /([ㄱㄲㄴㄷ-ㄹㅁ-ㅃㅅ-ㅎ])([ㅏ-ㅖㅛㅠㅣ]|ㅗ[ㅏㅐㅣ]?|ㅜ[ㅓㅔㅣ]?|ㅡㅣ?)(?:([ㄲㄷㅁㅅ-ㅈㅊ-ㅎ]|ㄱㅅ?|ㄴ[ㅈㅎ]?|ㄹ[ㄱㅁㅂㅅㅌ-ㅎ]?|ㅂㅅ?)(?![ㅏ-ㅣ]))?/g

const initial = i => 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.indexOf(i)
const medial = m => 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.indexOf(m)
const final = f => ' ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'.indexOf(f)
const complex = c => ({ 'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ', 'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ', 'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ', 'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ', 'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ', 'ㅂㅅ': 'ㅄ' })[c] || c

const toHangeul = c => ALPHABETS.includes(c) ? HANGEUL_JAMOS[ALPHABETS.indexOf(c)] : c
const replaceAlphabets = s => typeof s === 'string' ? [...s].map(toHangeul).join('') : ''
const stack = (i, m, f = ' ') => String.fromCharCode(44032 + final(f) + medial(m) * 28 + initial(i) * 588)
const gksdud = s => replaceAlphabets(s).replace(HANGEUL_SYLLABLE, (_, i, m, f) => stack(i, complex(m), complex(f)))

module.exports = gksdud
