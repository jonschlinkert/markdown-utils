/*!
 * markdown-utils <https://github.com/jonschlinkert/markdown-utils>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path')
var mdu = require('../index');
var forOwn = require('for-own');
var filter = require('filter-object');

function readFixture(src) {
  var args = require(path.join(__dirname, 'fixtures', src + '.js'));
  return args;
}

function readExpected(src) {
  var str = fs.readFileSync(path.join(__dirname, 'expected', src + '.md'), 'utf-8');
  return str;
}

describe('markdown-utils', function() {
  //ignore .list, because it's WIP
  mdu = filter(mdu, ['*', '!list']);
  forOwn(mdu, function(fn, name) {
    it('should `.' + name + '` works', function(done) {
      var fixture = readFixture(name);
      var actual = fn.apply(fn, fixture);
      var expected = readExpected(name);
      actual.should.equal(expected);
      done();
    });
  });
});

