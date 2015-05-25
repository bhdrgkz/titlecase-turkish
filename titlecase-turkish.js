/*jslint nomen: true, todo: true, indent: 2 */
/*global require, module, __dirname */

var lowerCase = require('lower-case');
var titleCase = require('title-case');
new RegExp;
function encode(input) {
  "use strict";

  return input
    .replace(RegExp('’ ', "g"), 'xxxapossrxxx')
    .replace(RegExp('’', "g"), 'xxxapossrxxx')
    .replace(RegExp(",", "g"), "xxxcommaxxx")
    .replace(RegExp("' ", "g"), "xxxapossxxx")
    .replace(RegExp("'", "g"), "xxxapossxxx")
    .replace(RegExp('"', "g"), 'xxxaposbxxx')
    .replace(RegExp("\\+", "g"), 'Xxxplusxxx')
    .replace(RegExp('-', "g"), ' xxxminusxxx ');
}
function decode(input) {
  "use strict";

  return input
    .replace(RegExp('xxxapossrxxx', "g"), '’')
    .replace(RegExp('Xxxapossrxxx', "g"), '’')
    .replace(RegExp("xxxcommaxxx", "g"), ",")
    .replace(RegExp('Xxxcommaxxx', "g"), ',')
    .replace(RegExp("xxxapossxxx", "g"), "'")
    .replace(RegExp("Xxxapossxxx", "g"), "'")
    .replace(RegExp('xxxaposbxxx', "g"), '"')
    .replace(RegExp('Xxxaposbxxx', "g"), '"')
    .replace(RegExp(' Xxxplusxxx ', "g"), '+')
    .replace(RegExp('xxxplusxxx', "g"), '+')
    .replace(RegExp('Xxxplusxxx', "g"), '+')
    .replace(RegExp(' Xxxminusxxx ', "g"), '-');
}

module.exports = function (inputStr) {
  'use strict';

  return decode(titleCase(lowerCase(encode(inputStr), 'tr'), 'tr'));
};
