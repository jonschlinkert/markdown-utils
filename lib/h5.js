'use strict';

/**
 * Create a markdown-formatted h5 heading.
 *
 * ```js
 * utils.h5('This is a heading');
 * //=> '##### This is a heading'
 * ```
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

module.exports = function h5(str) {
  return '##### ' + str;
};