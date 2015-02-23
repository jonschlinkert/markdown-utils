/*!
 * markdown-utils <https://github.com/jonschlinkert/markdown-utils>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path')
var forOwn = require('for-own');
var mdu = require('../index');
require('should');

function readFixture(src) {
  return require(path.join(__dirname, 'fixtures', src + '.js'));
}

function readExpected(src) {
  return fs.readFileSync(path.join(__dirname, 'expected', src + '.md'), 'utf-8');
}

describe('markdown-utils', function() {
  forOwn(mdu, function(fn, name) {
    it('should render: `' + name + '`', function(done) {
      var actual = fn.apply(fn, readFixture(name)).trim();
      actual.should.equal(readExpected(name).trim());
      done();
    });
  });
});

