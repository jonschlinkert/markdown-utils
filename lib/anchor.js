'use strict';

var isNumber = require('is-number');
var slice = require('array-slice');

/**
 * Create a markdown-formatted anchor link from the given values.
 *
 * ```js
 * utils.anchor('embed', 'assemble/handlebars-helpers/lib/code.js', 25, 'v0.6.0');
 * //=> [embed](https://github.com/assemble/handlebars-helpers/blob/v0.6.0/lib/helpers/code.js#L25)
 * ```
 *
 * @name anchor
 * @param  {String} `anchor`
 * @param  {String} `href`
 * @param  {String} `title`
 * @api public
 */

module.exports = function anchor(text, repo, line, branch) {
  return '[' + text + '](' + format(repo, branch, line) + ')';
};

function format(str, branch, line) {
  var segs = str.split(/[\\\/]/);
  var repo = slice(segs, 0, 2).join('/');
  var rest = slice(segs, 2).join('/');
  if (isNumber(branch)) {
    line = branch;
    branch = 'master';
  }
  var res = 'https://github.com/';
  res += (repo + '/blob/' + branch + '/' + rest);
  res += (line ? '#L' + line : '');
  return res;
}
