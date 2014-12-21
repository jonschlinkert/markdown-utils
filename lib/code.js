'use strict';

/**
 * Create a markdown-formatted `<code></code>` snippet.
 *
 * ```js
 * utils.code('var foo = bar;');
 * //=> '`var foo = bar;`'
 * ```
 *
 * @name code
 * @param  {String} `str`
 * @api public
 */

module.exports = function code(str) {
  return '`' + str + '`';
};