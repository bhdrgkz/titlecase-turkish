/*jslint nomen: true, todo: true, indent: 2 */
/*global require, module, __dirname */


var lowerCase = require('lower-case');
var titleCase = require('title-case');

module.exports = function (inputStr) {
  'use strict';

  var result = titleCase(lowerCase(rss(inputStr), 'tr'), 'tr');

  result = result
    .replace("xxxcommaxxx", ",")
    .replace("xxxapossxxx", "'")
    .replace('xxxaposbxxx', '"')
    .replace(' Xxxplusxxx ','+')
    .replace('xxxplusxxx','+')
    .replace(' Xxxminusxxx ','-')
  ;

  return result;

  // De-capitalizing first
};


function rss (input) {
  return input
    .replace(",", "xxxcommaxxx")
    .replace("'", "xxxapossxxx")
    .replace('"', 'xxxaposbxxx')
    .replace('+', 'Xxxplusxxx')
    .replace('-', ' xxxminusxxx ')
  ;
}