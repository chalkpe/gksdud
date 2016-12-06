const expect = require('chai').expect;

describe('gksdud', function(){
    const gksdud = require('../lib/gksdud');

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
});
