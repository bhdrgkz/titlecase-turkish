/*jslint nomen: true, todo: true, indent: 2 */
/*global require, module, __dirname */

var lowerCase = require('lower-case');
var titleCase = require('title-case');

function encode(input) {
  "use strict";

  return input
    .replace('’', 'xxxapossrxxx')
    .replace(",", "xxxcommaxxx")
    .replace("'", "xxxapossxxx")
    .replace('"', 'xxxaposbxxx')
    .replace('+', 'Xxxplusxxx')
    .replace('-', ' xxxminusxxx ');
}

function decode(input) {
  "use strict";

  return input
    .replace('xxxapossrxxx', '’')
    .replace("xxxcommaxxx", ",")
    .replace("xxxapossxxx", "'")
    .replace('xxxaposbxxx', '"')
    .replace(' Xxxplusxxx ', '+')
    .replace('xxxplusxxx', '+')
    .replace(' Xxxminusxxx ', '-');
}

module.exports = function (inputStr) {
  'use strict';

  return decode(titleCase(lowerCase(encode(inputStr), 'tr'), 'tr'));
};


