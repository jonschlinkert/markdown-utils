'use strict';

/**
 * Create a markdown-formatted h1 heading.
 *
 * ```js
 * utils.h1('This is a heading');
 * //=> '# This is a heading'
 * ```
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

module.exports = function h1(str) {
  return '# ' + str;
};