const INITIAL_JAMOS = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const MEDIAL_JAMOS = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
const FINAL_JAMOS = ' ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ';
const ALPHABETS = 'QqWwEeRrTtYyUuIiOoPpAaSsDdFfGgHhJjKkLlZzXxCcVvBbNnMm'
const HANGEUL_JAMOS = 'ㅃㅂㅉㅈㄸㄷㄲㄱㅆㅅㅛㅛㅕㅕㅑㅑㅒㅐㅖㅔㅁㅁㄴㄴㅇㅇㄹㄹㅎㅎㅗㅗㅓㅓㅏㅏㅣㅣㅋㅋㅌㅌㅊㅊㅍㅍㅠㅠㅜㅜㅡㅡ';
const HANGEUL_SYLLABLE = /([ㄷㅁㅅㅆㅇㅈㅊㅋㅌㅍㅎ]|[ㄱㅅ]?ㄱ|[ㅈㅎ]?ㄴ|[ㄱㅁㅂㅅㅌㅍㅎ]?ㄹ|ㅅ?ㅂ)?([ㅏㅐㅑㅒㅓㅔㅕㅖㅛㅠㅣ]|[ㅏㅐㅣ]?ㅗ|[ㅓㅔㅣ]?ㅜ|ㅣ?ㅡ)([ㄱ-ㅎ])/g;
const COMPLEX_MEDIAL_JAMOS = { 'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ' };
const COMPLEX_FINAL_JAMOS = { 'ㄱㄱ': 'ㄱ', 'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ', 'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ', 'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ', 'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ', 'ㅂㅅ': 'ㅄ' };

const reverse = str => str && [...str].reverse().join('');
const isAlphabet = str => str && ALPHABETS.includes(str.charAt(0));
const isHangeulJamo = str => str && HANGEUL_JAMOS.includes(str.charAt(0));
const toHangeulJamo = str => str && HANGEUL_JAMOS[ALPHABETS.indexOf(str.charAt(0))];
const replaceAlphabets = str => str && [...str].map(c => isAlphabet(c) ? toHangeulJamo(c) : c).join('');
const stackHangeulJamos = (initial, medial, final = ' ') => String.fromCharCode(44032 + FINAL_JAMOS.indexOf(final) + MEDIAL_JAMOS.indexOf(medial) * 28 + INITIAL_JAMOS.indexOf(initial) * 588);
const gksdud = str => reverse(reverse(replaceAlphabets(str)).replace(HANGEUL_SYLLABLE, (m, final, medial, initial) => stackHangeulJamos(initial, COMPLEX_MEDIAL_JAMOS[reverse(medial)] || reverse(medial), COMPLEX_FINAL_JAMOS[reverse(final)] || reverse(final))));

module.exports = gksdud;
