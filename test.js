/* global describe, it */
var assert = require('assert')
var tcTur = require('./')

describe('title case turkish', function () {
  it('should upper case a string', function () {
    //assert.equal(tcTur(null), '')
    assert.equal(tcTur('deneme'), 'Deneme')
    assert.equal(tcTur('DENEME'), 'Deneme')
    assert.equal(tcTur('deNEme'), 'Deneme')
  })

  it('should support spaces', function () {
    assert.equal(tcTur('Test deneme bir ki uc'), 'Test Deneme Bir Ki Uc');
  })

  it('should support turkish', function () {
    assert.equal(tcTur('çomar'), 'Çomar');
    assert.equal(tcTur('çomak'), 'Çomak');
    assert.equal(tcTur('ığdır'), 'Iğdır');
    assert.equal(tcTur('Isparta'), 'Isparta');
    assert.equal(tcTur('işgal'), 'İşgal');
    assert.equal(tcTur('İzmir'), 'İzmir');
    assert.equal(tcTur('ğale'), 'Ğale');
    assert.equal(tcTur('Ğül'), 'Ğül');
    assert.equal(tcTur('üzüm'), 'Üzüm');
    assert.equal(tcTur('Üzüntü'), 'Üzüntü');
    assert.equal(tcTur('ömer'), 'Ömer');
    assert.equal(tcTur('Öncü'), 'Öncü');
    assert.equal(tcTur('şakir'), 'Şakir');
    assert.equal(tcTur('Şahmergerdan'), 'Şahmergerdan');
  });

  it('should support non-chars', function () {
    assert.equal(tcTur("REMAX'tan"), "Remax'tan");
    assert.equal(tcTur('kuleLi"den'), 'Kuleli"den');
    assert.equal(tcTur('sahibinden 1+1'), 'Sahibinden 1+1');
    assert.equal(tcTur('bağ-bahçe içinDe'), 'Bağ-Bahçe İçinde');
    assert.equal(tcTur('istanbul-bahçelievler\'de'), 'İstanbul-Bahçelievler\'de');
    assert.equal(tcTur('some string with-hypens, plus+signs and turkish characters çğöıüş ÇĞÖİÜŞ'),
      'Some String With-Hypens, Plus+signs And Turkish Characters Çğöıüş Çğöiüş'
    );
  })
})
