'use strict';

/**
 * Create a markdown-formatted h3 heading.
 *
 * ```js
 * utils.h3('This is a heading');
 * //=> '### This is a heading'
 * ```
 *
 * @name h3
 * @param  {String} `str`
 * @api public
 */

module.exports = function h3(str) {
  return '### ' + str;
};