'use strict';

var repeat = require('repeat-string');

/**
 * Create a markdown-formatted listitem.
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
 * @param  {Number} `level`
 * @param  {String} `options`
 *   @option  {String} `bullets` Array of bullets to use. Default `['-', '*', '+', '~']`
 *   @option  {Number} `highest` The highest level heading in the list.
 * @api public
 */

module.exports = function listitem(str, level, options) {
  var opts = options || {};
  var ch = opts.bullets || ['-', '*', '+', '~'];
  var lvl = level - opts.highest;

  var depth = lvl > 0
    ? repeat('  ', lvl)
    : '';

  var bullet = ch[(lvl) % ch.length];
  return depth
    + (bullet ? bullet : '*')
    + ' ' + str;
};
