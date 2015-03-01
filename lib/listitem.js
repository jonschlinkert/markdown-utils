'use strict';

var listitem = require('list-item');

/**
 * {%= apidocs(node_modules('list-item')) %}
 * @noname
 * @api public
 */

module.exports = function li(str, lvl, opts, fn) {
  return listitem(opts, fn)(lvl, str);
};
