'use strict';

var path = require('path');
var lookup = require('filter-files');

lookup.sync(__dirname, false).forEach(function (name) {
  var fp = path.resolve(__dirname, name);

  if (!/index/.test(fp) && /\.js/.test(fp)) {
    exports[name] = require(fp);
  }
});
