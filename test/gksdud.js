const expect = require('chai').expect;

describe('gksdud', function(){
    const gksdud = require('../lib/gksdud');
    const reverseGksdud = require('../lib/gksdud').reverseGksdud;

    it('works with basic words', function(){
        expect(gksdud('DNS')).to.be.equal('운');
        expect(gksdud('ebsi')).to.be.equal('듀냐');
        expect(gksdud('skcdl cka whgsp')).to.be.equal('낯이 참 좋네');
        expect(gksdud('dPdmlfmf rkwcntpdy')).to.be.equal('예의를 갖추세요');
        expect(gksdud('gksdudzlrk smf answpdi')).to.be.equal('한영키가 늘 문제야');
        expect(gksdud('ehdgo anfrhk qorentksdl')).to.be.equal('동해 물과 백두산이');
        expect(gksdud('qpwoeirutyalskdjfhgzmxncbv')).to.be.equal('베재댜겨쇼미나어롷크투츞');
        expect(gksdud('dOrlfmf emfdjeh ahfmrpTsmsep')).to.be.equal('얘기를 들어도 모르겠는데');
    });

    it('works with jamo-only words', function(){
        expect(gksdud('hni')).to.be.equal('ㅗㅜㅑ');
        expect(gksdud('lpklp')).to.be.equal('ㅣㅔㅏㅣㅔ');
        expect(gksdud('rft dwf vaf gtre?')).to.be.equal('ㄱㄹㅅ ㅇㅈㄹ ㅍㅁㄹ ㅎㅅㄱㄷ?');
        expect(gksdud('dwrd wfrd drfd qqqr')).to.be.equal('ㅇㅈㄱㅇ ㅈㄹㄱㅇ ㅇㄱㄹㅇ ㅂㅂㅂㄱ');
    });

    it('works with complex inital jamos', function(){
        expect(gksdud('Qkdtkd RofkdRofkd')).to.be.equal('빵상 깨랑깨랑');
        expect(gksdud('Wkwkdausdlsk tlzu ajrwk')).to.be.equal('짜장면이나 시켜 먹자');
        expect(gksdud('TLVMXMZLRK DKS QKWUDY BB')).to.be.equal('씨프트키까 안 빠쪄요 ㅠㅠ');
    });

    it('works with complex medial jamos', function(){
        expect(gksdud('dkdldjfmf dnlgkdu!')).to.be.equal('아이어를 위하여!');;
        expect(gksdud('dho rmfjgrp todrkrgoTtmqslRk?')).to.be.equal('왜 그렇게 생각했습니까?');
        expect(gksdud('dl Eodml dnjsflgkqrPfmf rngktldh.')).to.be.equal('이 때의 원리합계를 구하시오.');
        expect(gksdud('dl dhlwls rhtdp dnpsdlffh ckwdkdhkTdj?')).to.be.equal('이 외진 곳에 웬일로 찾아왔어?');
    });

    it('works with complex final jamos', function(){
        expect(gksdud('wha RkRdk wntlwy?')).to.be.equal('좀 깎아 주시죠?');
        expect(gksdud('tlfgwlsms dksgdmsep...')).to.be.equal('싫지는 않은데...');
        expect(gksdud('durl vnatkrtdl cka gngksp')).to.be.equal('여기 품삯이 참 후하네');
        expect(gksdud('dkdltmzmfla gkfxdk ajrdjdiwl')).to.be.equal('아이스크림 핥아 먹어야지');
        expect(gksdud('tj dlTwl akfrh wha dkswdk qhkdy')).to.be.equal('서 있지 말고 좀 앉아 봐요');
        expect(gksdud('dkemfdl djaakfmf aksgdl ekfadkTsp')).to.be.equal('아들이 엄마를 많이 닮았네');
        expect(gksdud('40sus ehddks dhlrhftdmfh rjfdjdhkTek')).to.be.equal('40년 동안 외곬으로 걸어왔다');
        expect(gksdud('tjekd ro 3susdlaus vnddnjfdmf dmfvsmsek')).to.be.equal('서당 개 3년이면 풍월을 읊는다');
        expect(gksdud('ehdgo anfrhk qorentksdl akfmrh ekfgehfhr')).to.be.equal('동해 물과 백두산이 마르고 닳도록');
        expect(gksdud('dlTsms rj djqtsms rj ahdEkd rmfrdj ahdmwk')).to.be.equal('있는 거 없는 거 몽땅 긁어 모으자');
        expect(gksdud('wha Ejfqdms smRladl Wkfqwlaks rkdgkrp smRuwuTek')).to.be.equal('좀 떫은 느낌이 짧지만 강하게 느껴졌다');
    });

    /** Reverse gksdud */

    it('works with reversing basic words', function(){
        expect(reverseGksdud('운')).to.be.equal('dns');
        expect(reverseGksdud('듀냐')).to.be.equal('ebsi');
        expect(reverseGksdud('낯이 참 좋네')).to.be.equal('skcdl cka whgsp');
        expect(reverseGksdud('예의를 갖추세요')).to.be.equal('dPdmlfmf rkwcntpdy');
        expect(reverseGksdud('한영키가 늘 문제야')).to.be.equal('gksdudzlrk smf answpdi');
        expect(reverseGksdud('동해 물과 백두산이')).to.be.equal('ehdgo anfrhk qorentksdl');
        expect(reverseGksdud('베재댜겨쇼미나어롷크투츞')).to.be.equal('qpwoeirutyalskdjfhgzmxncbv');
        expect(reverseGksdud('얘기를 들어도 모르겠는데')).to.be.equal('dOrlfmf emfdjeh ahfmrpTsmsep');
    });

    it('works with reversing jamo-only words', function(){
        expect(reverseGksdud('ㅗㅜㅑ')).to.be.equal('hni');
        expect(reverseGksdud('ㅣㅔㅏㅣㅔ')).to.be.equal('lpklp');
        expect(reverseGksdud('ㄱㄹㅅ ㅇㅈㄹ ㅍㅁㄹ ㅎㅅㄱㄷ?')).to.be.equal('rft dwf vaf gtre?');
        expect(reverseGksdud('ㅇㅈㄱㅇ ㅈㄹㄱㅇ ㅇㄱㄹㅇ ㅂㅂㅂㄱ')).to.be.equal('dwrd wfrd drfd qqqr');
    });

    it('works with reversing complex inital jamos', function(){
        expect(reverseGksdud('빵상 깨랑깨랑')).to.be.equal('Qkdtkd RofkdRofkd');
        expect(reverseGksdud('짜장면이나 시켜 먹자')).to.be.equal('Wkwkdausdlsk tlzu ajrwk');
        expect(reverseGksdud('씨프트키까 안 빠쪄요 ㅠㅠ')).to.be.equal('TlvmxmzlRk dks QkWudy bb');
    });

    it('works with reversing isolated complex jamo', function() {
        expect(reverseGksdud("ㅘㄻㄺ")).to.be.equal('hkfafr');
        expect(reverseGksdud("ㅋㅋㅋㅋㅙㅙㅋㅋ")).to.be.equal('zzzzhohozz');
        expect(reverseGksdud("ㅙㅣㅁ 볃 ㅅ미?")).to.be.equal('hola que tal?');
    });

    it('works with reversing complex medial jamos', function(){
        expect(reverseGksdud('아이어를 위하여!')).to.be.equal('dkdldjfmf dnlgkdu!');;
        expect(reverseGksdud('왜 그렇게 생각했습니까?')).to.be.equal('dho rmfjgrp todrkrgoTtmqslRk?');
        expect(reverseGksdud('이 때의 원리합계를 구하시오.')).to.be.equal('dl Eodml dnjsflgkqrPfmf rngktldh.');
        expect(reverseGksdud('이 외진 곳에 웬일로 찾아왔어?')).to.be.equal('dl dhlwls rhtdp dnpsdlffh ckwdkdhkTdj?');
    });

    it('works with reversing complex final jamos', function(){
        expect(reverseGksdud('좀 깎아 주시죠?')).to.be.equal('wha RkRdk wntlwy?');
        expect(reverseGksdud('싫지는 않은데...')).to.be.equal('tlfgwlsms dksgdmsep...');
        expect(reverseGksdud('여기 품삯이 참 후하네')).to.be.equal('durl vnatkrtdl cka gngksp');
        expect(reverseGksdud('아이스크림 핥아 먹어야지')).to.be.equal('dkdltmzmfla gkfxdk ajrdjdiwl');
        expect(reverseGksdud('서 있지 말고 좀 앉아 봐요')).to.be.equal('tj dlTwl akfrh wha dkswdk qhkdy');
        expect(reverseGksdud('아들이 엄마를 많이 닮았네')).to.be.equal('dkemfdl djaakfmf aksgdl ekfadkTsp');
        expect(reverseGksdud('40년 동안 외곬으로 걸어왔다')).to.be.equal('40sus ehddks dhlrhftdmfh rjfdjdhkTek');
        expect(reverseGksdud('서당 개 3년이면 풍월을 읊는다')).to.be.equal('tjekd ro 3susdlaus vnddnjfdmf dmfvsmsek');
        expect(reverseGksdud('동해 물과 백두산이 마르고 닳도록')).to.be.equal('ehdgo anfrhk qorentksdl akfmrh ekfgehfhr');
        expect(reverseGksdud('있는 거 없는 거 몽땅 긁어 모으자')).to.be.equal('dlTsms rj djqtsms rj ahdEkd rmfrdj ahdmwk');
        expect(reverseGksdud('좀 떫은 느낌이 짧지만 강하게 느껴졌다')).to.be.equal('wha Ejfqdms smRladl Wkfqwlaks rkdgkrp smRuwuTek');
    });

    it('works with reversing typos when trying to write roman characters', function(){
        expect(reverseGksdud('ㅗ디ㅣㅐ ㄹ갸둥, ㅑ 므 ㅔㅣㄷㅁㄴㄷㅇ 새 ㅡㄷㄷㅅ ㅛㅐㅕ!')).to.be.equal('hello friend, i am pleased to meet you!');;
        expect(reverseGksdud('ㅎㅅㅎ, ㅅ쇼ㅣ')).to.be.equal('gtg, ttyl');
        expect(reverseGksdud('댤ㄹ디 샞ㄷㄱ ㅜㅑ홋 ㅣㅑ홋ㄴ')).to.be.equal('eiffel tower night lights');
    });
    
});
