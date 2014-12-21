'use strict';

/**
 * Create markdown-formatted bold text.
 *
 * ```js
 * utils.strong('This is bold');
 * //=> '**This is bold**'
 * ```
 *
 * @name strong
 * @param  {String} `str`
 * @api public
 */

module.exports = function strong(str) {
  return '**' + str + '**';
};