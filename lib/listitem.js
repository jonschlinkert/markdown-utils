'use strict';

var repeat = require('repeat-string');

/**
 * Create a markdown-formatted listitem.
 *
 * ```js
 * utils.listitem('Level 0 list item', 0);
 * //=> '* Level 0 list item'
 *
 * utils.listitem('Level 1 list item', 1);
 * //=> '  * Level 1 list item'
 *
 * utils.listitem('Level 2 list item', 2);
 * //=> '    * Level 2 list item'
 * ```
 *
 * @name listitem
 * @param  {String} `str`
 * @param  {Number} `level`
 * @param  {String} `options`
 *   @option {String} [options] `bullets` Array of bullets to use. Default `['-', '*', '+', '~']`
 *   @option {Number} [options] `highest` The highest level heading in the list.
 *   @option {String} [options] `first` The string to use for indenting when the level is zero.
 * @api public
 */

module.exports = function listitem(str, level, options) {
  var opts = options || {};
  var ch = opts.bullets || ['-', '*', '+', '~'];
  var lvl = level - (+opts.highest || 0);

  // first indent.
  var first = opts.first || '';

  // indent depth
  var depth = (lvl > 0)
    ? repeat(' ', lvl)
    : first;

  var bullet = ch[(lvl) % ch.length];
  return depth
    + (bullet ? bullet : '*')
    + (' ' + str);
};
