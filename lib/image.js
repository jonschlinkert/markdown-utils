'use strict';

/**
 * Create a markdown-formatted image from the given values.
 *
 * ```js
 * utils.image(title, src);
 * //=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg)
 *
 * utils.image(title, src, alt);
 * //=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg) "This is alt text!"
 * ```
 *
 * @param  {String} `title`
 * @param  {String} `src`
 * @param  {String} `alt`
 * @return {String}
 * @api public
 */

module.exports = function image(title, src, alt) {
  return '![' + title + '](' + src + ')' + (alt ? ' "' + alt + '"' : '');
};