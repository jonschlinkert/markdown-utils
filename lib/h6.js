'use strict';

/**
 * Create a markdown-formatted h6 heading.
 *
 * ```js
 * utils.h6('This is a heading');
 * //=> '###### This is a heading'
 * ```
 *
 * @name h6
 * @param  {String} `str`
 * @api public
 */

module.exports = function h6(str) {
  return '###### ' + str;
};