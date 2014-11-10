'use strict';

/**
 * Create a markdown-formatted heading.
 *
 * ```js
 * utils.heading('This is a heading', 1);
 * //=> '# This is a heading'
 * ```
 *
 * @param  {String} `str`
 * @param  {Number} `level`
 * @return {String}
 * @api public
 */

var utils = require('./');

module.exports = function heading(str, level) {
  return utils['h' + level || 1](str);
};