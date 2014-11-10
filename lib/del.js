'use strict';

/**
 * Create markdown-formatted `<del></del>`.
 *
 * ```js
 * utils.del('text');
 * //=> '~~text~~'
 * ```
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

module.exports = function del(str) {
  return '~~' + str + '~~';
};