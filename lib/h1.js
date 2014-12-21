'use strict';

/**
 * Create a markdown-formatted h1 heading.
 *
 * ```js
 * utils.h1('This is a heading');
 * //=> '# This is a heading'
 * ```
 *
 * @name h1
 * @param  {String} `str`
 * @api public
 */

module.exports = function h1(str) {
  return '# ' + str;
};