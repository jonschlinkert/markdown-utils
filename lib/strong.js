'use strict';

/**
 * Create markdown-formatted bold text.
 *
 * ```js
 * utils.strong('This is bold');
 * //=> '**This is bold**'
 * ```
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

module.exports = function strong(str) {
  return '**' + str + '**';
};