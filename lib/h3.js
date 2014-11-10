'use strict';

/**
 * Create a markdown-formatted h3 heading.
 *
 * ```js
 * utils.h3('This is a heading');
 * //=> '### This is a heading'
 * ```
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

module.exports = function h3(str) {
  return '### ' + str;
};