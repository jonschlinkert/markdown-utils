'use strict';

/**
 * Create a markdown-formatted heading.
 *
 * ```js
 * utils.heading('This is a heading', 1);
 * //=> '# This is a heading'
 * ```
 *
 * @name heading
 * @param  {String} `str`
 * @param  {Number} `level`
 * @api public
 */

module.exports = function heading(str, level) {
  return require('./h' + (level || 1))(str);
};
