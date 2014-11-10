'use strict';

/**
 * Create a markdown-formatted reference link from the given values.
 *
 * ```js
 * utils.reference(alt, url);
 * //=> [template]: https://github/jonschlinkert/template "Make stuff!"
 * ```
 *
 * @param  {String} `id`
 * @param  {String} `url`
 * @param  {String} `alt`
 * @return {String}
 * @api public
 */

module.exports = function reference(id, url, alt) {
  return '[' + id + ']: ' + url + ' "' + alt + '"';
};
