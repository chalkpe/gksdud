const ALPHABETS = 'qQwWeErRtTyYuUiIoOpPaAsSdDfFgGhHjJkKlLzZxXcCvVbBnNmM'
const HANGEUL_JAMOS = 'ㅂㅃㅈㅉㄷㄸㄱㄲㅅㅆㅛㅛㅕㅕㅑㅑㅐㅒㅔㅖㅁㅁㄴㄴㅇㅇㄹㄹㅎㅎㅗㅗㅓㅓㅏㅏㅣㅣㅋㅋㅌㅌㅊㅊㅍㅍㅠㅠㅜㅜㅡㅡ'

const HANGEUL_COMPLETE = /[가-힣]/g
const HANGEUL_SYLLABLE = /([ㄱㄲㄴㄷ-ㄹㅁ-ㅃㅅ-ㅎ])([ㅏ-ㅖㅛㅠㅣ]|ㅗ[ㅏㅐㅣ]?|ㅜ[ㅓㅔㅣ]?|ㅡㅣ?)(?:([ㄲㄷㅁㅅ-ㅈㅊ-ㅎ]|ㄱㅅ?|ㄴ[ㅈㅎ]?|ㄹ[ㄱㅁㅂㅅㅌ-ㅎ]?|ㅂㅅ?)(?![ㅏ-ㅣ]))?/g

const INITIAL = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'
const MEDIAL = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'
const FINAL = ' ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'
const COMPLEX = { 'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ', 'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ', 'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ', 'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ', 'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ', 'ㅂㅅ': 'ㅄ' }
const DECOMPLEX = { 'ㅘ': 'ㅗㅏ', 'ㅙ': 'ㅗㅐ', 'ㅚ': 'ㅗㅣ', 'ㅝ': 'ㅜㅓ', 'ㅞ': 'ㅜㅔ', 'ㅟ': 'ㅜㅣ', 'ㅢ': 'ㅡㅣ', 'ㄳ': 'ㄱㅅ', 'ㄵ': 'ㄴㅈ', 'ㄶ': 'ㄴㅎ', 'ㄺ': 'ㄹㄱ', 'ㄻ': 'ㄹㅁ', 'ㄼ': 'ㄹㅂ', 'ㄽ': 'ㄹㅅ', 'ㄾ': 'ㄹㅌ', 'ㄿ': 'ㄹㅍ', 'ㅀ': 'ㄹㅎ', 'ㅄ': 'ㅂㅅ' }

const initial = i => INITIAL.indexOf(i)
const medial = m => MEDIAL.indexOf(m)
const final = f => FINAL.indexOf(f)
const complex = c => COMPLEX[c] || c
const decomplex = c => DECOMPLEX[c] ? [...DECOMPLEX[c]] : [c]

const toHangeul = c => ALPHABETS.includes(c) ? HANGEUL_JAMOS[ALPHABETS.indexOf(c)] : c
const toAlphabet = c => HANGEUL_JAMOS.includes(c) ? ALPHABETS[HANGEUL_JAMOS.indexOf(c)] : c

const stack = (i, m, f = ' ') => String.fromCharCode(44032 + final(f) + medial(m) * 28 + initial(i) * 588)
const disjoin = c => [INITIAL[Math.floor(c / 588)], complex(MEDIAL[Math.floor((c % 588) / 28)]), complex(FINAL[c % 28].trim())].join('')

const replaceAlphabets = s => typeof s === 'string' ? [...s].map(toHangeul).join('') : ''
const replaceHangeuls = s => typeof s === 'string' ? [...s].flatMap(decomplex).map(toAlphabet).join('') : ''

const assemble = s => typeof s === 'string' ? s.replace(HANGEUL_SYLLABLE, (_, i, m, f) => stack(i, complex(m), complex(f))) : ''
const disassemble = s => typeof s === 'string' ? s.replace(HANGEUL_COMPLETE, c => disjoin(c.charCodeAt(0) - 44032)) : ''

const gksdud = s => assemble(replaceAlphabets(s))
const dudgks = s => replaceHangeuls(disassemble(s))

if (typeof module === 'object' && typeof exports === 'object') {
  module.exports = gksdud
  module.exports.gksdud = gksdud
  module.exports.dudgks = dudgks
}
