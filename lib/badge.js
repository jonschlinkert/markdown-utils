'use strict';

var image = require('./image');
var link = require('./link');

/**
 * Create a markdown-formatted badge from the given values.
 *
 * ```js
 * utils.badge(img);
 * //=> [![Build Status](https://travis-ci.org/jonschlinkert/template.svg)](https://travis-ci.org/jonschlinkert/template)
 * ```
 *
 * @param  {String} `str`
 * @param  {String} `url`
 * @return {String}
 * @api public
 */

module.exports = function badge(alt, img_url, url) {
  return link(image(alt, img_url), url);
};