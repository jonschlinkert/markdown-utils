'use strict';

/**
 * Create a markdown-formatted `<pre></pre>` snippet.
 *
 * ```js
 * utils.pre('var foo = bar;');
 * ```
 * Results in:
 *
 * <pre>
 * ```js
 * var foo = bar;
 * ```
 * </pre>
 *
 * @param  {String} `str`
 * @param  {String} `language`
 * @return {String}
 * @api public
 */

module.exports = function pre(str, language) {
  var code = '```' + language;
  code += '\n';
  code += str;
  code += '\n';
  code += '```';
  return code;
};