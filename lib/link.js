'use strict';

/**
 * Create a markdown-formatted link from the given values.
 *
 * ```js
 * utils.link('fs-utils', 'https://github.com/assemble/fs-utils', 'hover title');
 * //=> [fs-utils](https://github.com/assemble/fs-utils "hover title")
 * ```
 *
 * @name link
 * @param  {String} `anchor`
 * @param  {String} `href`
 * @param  {String} `title`
 * @api public
 */

module.exports = function link(anchor, href, title) {
  title = title ? ' "' + title + '"' : '';
  return '[' + anchor + '](' + href + title + ')';
};
