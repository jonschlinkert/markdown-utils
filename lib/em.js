'use strict';

/**
 * Create a markdown-formatted em.
 *
 * ```js
 * utils.em('This is emphasized');
 * //=> '_This is emphasized_'
 * ```
 *
 * @name em
 * @param  {String} `str`
 * @api public
 */

module.exports = function em(str) {
  return '_' + str + '_';
};