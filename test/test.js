'use strict';

require('mocha');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const mdu = require('..');
const tests = path.join.bind(path, __dirname);

function requireFile(name, dir) {
  return require(tests((dir || 'fixtures'), `${name}.js`));
}

function readFile(name) {
  return fs.readFileSync(tests('expected', `${name}.md`), 'utf-8');
}

describe('markdown-utils', () => {
  for (const name of Object.keys(mdu)) {
    it(`.${name}`, () => {
      let fixture = requireFile(name);
      let expected;
      if (Array.isArray(fixture[0])) {
        expected = requireFile(name, 'expected');
        fixture.forEach((val, i) => {
          runTest(mdu[name], name, val, expected[i].trim());
        });
      } else {
        expected = readFile(name).trim();
        runTest(mdu[name], name, fixture, expected);
      }
    });
  }
});

function runTest(fn, name, fixture, expected) {
  let actual = fn.apply(fn, fixture).trim();
  assert.equal(actual, expected);
}
