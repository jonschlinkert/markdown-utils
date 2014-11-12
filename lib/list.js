'use strict';

/**
 * Create a markdown-formatted heading. (WIP - not sure what I want yet, open to ideas)
 *
 * ```js
 * utils.heading('This is a heading', 1);
 * //=> '# This is a heading'
 * ```
 *
 * @name list
 * @param  {String} `str`
 * @param  {Number} `level`
 * @api private
 */

var listitem = require('./listitem');

module.exports = function list(arr, ordered) {
  var bullets = ['*', '-', '+'];

  return arr.map(function (ul, lvl) {
    return ul.map(function (text, i) {
      i = lvl === 1 ? String.fromCharCode(65 + i) : i += 1;
      var bullet = ordered ? i + '. ' : bullets[lvl];
      return listitem(text, bullet, lvl);
    }).join('\n');
  }).join('\n');
};


var bullet = {};

bullet.number = function(i) {
  return i;
};

bullet.alpha = function(i, lower) {
  return lower
    ? String.fromCharCode(65 + i).toLowerCase()
    : String.fromCharCode(65 + i);
};