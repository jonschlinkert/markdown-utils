'use strict';

var path = require('path');
var lookup = require('filter-files');

var utils = module.exports;

lookup.sync(__dirname, false).forEach(function (name) {
  var fp = path.resolve(__dirname, name);
  if (!/index/.test(fp) && /\.js/.test(fp)) {
    name = path.basename(name, path.extname(name));
    utils[name] = require(fp);
  }
});
