'use strict';

/**
 * Create a markdown-formatted blockquote.
 *
 * ```js
 * utils.blockquote('This is a blockquote');
 * //=> '> This is a blockquote'
 * ```
 *
 * @name blockquote
 * @param  {String} `str`
 * @api public
 */

module.exports = function blockquote(str) {
  return '> ' + str;
};