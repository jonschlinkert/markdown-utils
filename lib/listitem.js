'use strict';

var listitem = require('list-item');

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

module.exports = function li(str, lvl, opts, fn) {
  return listitem(opts, fn)(lvl, str);
};
