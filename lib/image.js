'use strict';

/**
 * Create a markdown-formatted image from the given values.
 *
 * ```js
 * utils.image(alt, src);
 * //=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg)
 *
 * utils.image(alt, src, title);
 * //=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg "This is title of image!")
 * ```
 *
 * @name image
 * @param  {String} `alt`
 * @param  {String} `src`
 * @param  {String} `title`
 * @api public
 */

module.exports = function image(alt, src, title) {
  title = title ? ' "' + title + '"' : '';
  return '![' + alt + '](' + src + title + ')';
};
