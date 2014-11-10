'use strict';

/**
 * Create a markdown-formatted blockquote.
 *
 * ```js
 * utils.blockquote('This is a blockquote');
 * //=> '> This is a blockquote'
 * ```
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

module.exports = function blockquote(str) {
  return '> ' + str;
};