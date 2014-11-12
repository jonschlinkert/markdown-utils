'use strict';

/**
 * Create markdown-formatted `<del></del>`.
 *
 * ```js
 * utils.del('text');
 * //=> '~~text~~'
 * ```
 *
 * @name del
 * @param  {String} `str`
 * @api public
 */

module.exports = function del(str) {
  return '~~' + str + '~~';
};