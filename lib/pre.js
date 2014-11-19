'use strict';

/**
 * Create a markdown-formatted `<pre><code></code></pre>` snippet with or without lang.
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
 * @name pre
 * @param  {String} `str`
 * @param  {String} `language`
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
