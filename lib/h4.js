'use strict';

/**
 * Create a markdown-formatted h4 heading.
 *
 * ```js
 * utils.h4('This is a heading');
 * //=> '#### This is a heading'
 * ```
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

module.exports = function h4(str) {
  return '#### ' + str;
};