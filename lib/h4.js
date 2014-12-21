'use strict';

/**
 * Create a markdown-formatted h4 heading.
 *
 * ```js
 * utils.h4('This is a heading');
 * //=> '#### This is a heading'
 * ```
 *
 * @name h4
 * @param  {String} `str`
 * @api public
 */

module.exports = function h4(str) {
  return '#### ' + str;
};