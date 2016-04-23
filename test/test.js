/*!
 * markdown-utils <https://github.com/jonschlinkert/markdown-utils>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var forOwn = require('for-own');
var mdu = require('..');

function requireFile(name, dir) {
  return require(path.join(__dirname, (dir || 'fixtures'), name + '.js'));
}

function readFile(name) {
  return fs.readFileSync(path.join(__dirname, 'expected', name + '.md'), 'utf-8');
}

describe('markdown-utils', function() {
  forOwn(mdu, function(fn, name) {
    it('should render: `' + name + '`', function() {
      var fixture = requireFile(name);
      var expected;
      if (Array.isArray(fixture[0])) {
        expected = requireFile(name, 'expected');
        fixture.forEach(function(str, i) {
          runTest(fn, name, str, expected[i].trim());
        });
      } else {
        expected = readFile(name).trim();
        runTest(fn, name, fixture, expected);
      }
    });
  });
});

function runTest(fn, name, fixture, expected) {
  var actual = fn.apply(fn, fixture).trim();
  assert.equal(actual, expected);
}
