# gksdud [![CircleCI](https://circleci.com/gh/ChalkPE/gksdud.svg?style=svg)](https://circleci.com/gh/ChalkPE/gksdud)
Corrects miswritten Hangeul characters.  
한영키를 안 누르고 잘못 친 한글을 고쳐 줍니다.

`$ npm install gksdud --save`

## Usage
```js
const gksdud = require('gksdud')

gksdud('ebsi') //듀나
gksdud('Qkdtkd RofkdRofkd') //빵상 깨랑깨랑
gksdud('gksdudzlrk dks ehody') //한영키가 안 돼요
```

## License
```
MIT License

Copyright (c) 2016 Chalk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
