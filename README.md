[![Build Status](https://travis-ci.org/yasinaydin/titlecase-turkish.png)](https://travis-ci.org/yasinaydin/titlecase-turkish)

# titlecase-turkish

Titlecase converter for Turkish, excluding special characters.

## Installing

```sh
npm i titlecase-turkish
```

## Usage

```js
var tcaseTur = require('titlecase-turkish');

var something = tcaseTur('some string with-hypens, plus+signs and turkish characters çğöıüş ÇĞÖİÜŞ')
console.log(something);
// Some String With-Hypens, Plus+Signs And Turkish Characters Çğöıüş Çğöiüş
```
