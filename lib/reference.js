'use strict';

/**
 * Create a markdown-formatted reference link from the given values.
 *
 * ```js
 * utils.reference('template', 'https://github/jonschlinkert/template', 'Make stuff!');
 * //=> [template]: https://github/jonschlinkert/template "Make stuff!"
 * ```
 *
 * @name reference
 * @param  {String} `id`
 * @param  {String} `url`
 * @param  {String} `title`
 * @api public
 */

module.exports = function reference(id, url, title) {
  title = title ? ' "' + title + '"' : '';
  return '[' + id + ']: ' + url + title;
};
