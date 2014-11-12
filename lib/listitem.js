'use strict';

var repeat = require('repeat-string');

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
 * @name listitem
 * @param  {String} `str`
 * @param  {String} `bullet`
 * @param  {Number} `level`
 * @api public
 */

module.exports = function listitem(str, bullet, level) {
  var depth = +level === 0 ? '' : repeat('  ', level);
  return depth + bullet + ' ' + str;
};