'use strict';

/**
 * Create a markdown-formatted `<code></code>` snippet.
 *
 * ```js
 * utils.code('var foo = bar;');
 * //=> '`var foo = bar;`'
 * ```
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

module.exports = function code(str) {
  return '`' + str + '`';
};