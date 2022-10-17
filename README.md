# gksdud


[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ChalkPE/gksdud/test?style=flat-square)](https://github.com/ChalkPE/gksdud/actions) [![MIT License](https://img.shields.io/github/license/ChalkPE/gksdud.svg?style=flat-square)](LICENSE) [![code size](https://img.shields.io/bundlephobia/min/gksdud.svg?style=flat-square)](https://bundlephobia.com/result?p=gksdud) [![npm downloads](https://img.shields.io/npm/dt/gksdud.svg?style=flat-square)](https://www.npmjs.com/package/gksdud)

A tiny JavaScript utility that corrects miswritten Hangeul sentences like [*gksdud*](https://en.wikipedia.org/wiki/Language_input_keys#Han/Yeong_(%ED%95%9C/%EC%98%81))  
한영키를 안 누르고 잘못 입력한 문장들을 고쳐주는 작은 자바스크립트 유틸리티

*<1kb minified, one file, and no dependencies!*

## Install

```bash
npm i gksdud
yarn add gksdud
```

## Usage

```js
import gksdud from 'gksdud'

gksdud('ebsi') //듀나
gksdud('Qkdtkd RofkdRofkd') //빵상 깨랑깨랑
gksdud('gksdudzlrk dks ehody') //한영키가 안 돼요
```
### Reverse gksdud

Use `reverseGksdud` to do the reverse operation

```js
import {reverseGksdud} from 'gksdud'

reverseGksdud('듀나') // ebsi
reverseGksdud('빵상 깨랑깨랑') // Qkdtkd RofkdRofkd
reverseGksdud('ㅗ됴 ㅙㅈ ㅁㄱㄷ ㅛㅐㅕ?') // hey how are you?
reverseGksdud('햣 ㅁㅇㅇ 내ㅕㄱㅊㄷ.ㅓㄴ') // git add source.js
reverseGksdud(gksdud("HELLO THERE FRIEND")) // hEllO ThERE fRiEnd
```

Note: capitalization information is lost for most letters (typing `D` or `d` both give `ㅇ` for example). Also, it is not a rigourous reverse bijection of `gksdud`. Some mismatches can occur, i.e. For some `x`: ``reverseGksdud(gksdud(x)) !== x`` 