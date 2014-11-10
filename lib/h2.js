'use strict';

/**
 * Create a markdown-formatted h2 heading.
 *
 * ```js
 * utils.h2('This is a heading');
 * //=> '## This is a heading'
 * ```
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

module.exports = function h2(str) {
  return '## ' + str;
};