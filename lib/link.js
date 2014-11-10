'use strict';

/**
 * Create a markdown-formatted link from the given values.
 *
 * ```js
 * utils.link(title, href);
 * //=> [fs-utils](https://github.com/assemble/fs-utils)
 * ```
 *
 * @param  {String} `title`
 * @param  {String} `href`
 * @return {String}
 * @api public
 */

module.exports = function link(title, href) {
  return '[' + title + '](' + href + ')';
};
