'use strict';

/**
 * Create a markdown-formatted heading.
 *
 * ```js
 * utils.item('Level 0 list item', 0);
 * //=> '* Level 0 list item'
 *
 * utils.item('Level 1 list item', 1);
 * //=> '  * Level 1 list item'
 *
 * utils.item('Level 2 list item', 2);
 * //=> '    * Level 2 list item'
 * ```
 *
 * @param  {String} `str`
 * @param  {Number} `level`
 * @return {String}
 * @api public
 */

var repeat = require('repeat-string');

module.exports = function item(str, bullet, level) {
  var depth = +level === 0 ? '' : repeat('  ', level);
  return depth + bullet + ' ' + str;
};