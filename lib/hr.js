'use strict';

/**
 * Create a markdown-formatted horizontal rule.
 *
 * ```js
 * utils.hr();
 * //=> '***'
 * ```
 *
 * @name hr
 * @param  {String} `str` Alternate string to use. Default is `***` to avoid collision with `---` which is used for front matter.
 * @api public
 */

module.exports = function hr(str) {
  return str || '***';
};