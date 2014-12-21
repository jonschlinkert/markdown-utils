'use strict';

var image = require('./image');
var link = require('./link');

/**
 * Create a markdown-formatted badge.
 *
 * ```js
 * utils.badge(alt, img_url, url);
 * //=> [![Build Status](https://travis-ci.org/jonschlinkert/template.svg)](https://travis-ci.org/jonschlinkert/template)
 * ```
 *
 * @name badge
 * @param  {String} `alt`
 * @param  {String} `img_url`
 * @param  {String} `url`
 * @api public
 */

module.exports = function badge(alt, img_url, url) {
  return link(image(alt, img_url), url);
};