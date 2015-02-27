var path = require('path');
var glob = require('globby');
var async = require('async');
var extend = require('extend-shallow');
var tutil = require('template-utils');
var verb = require('verb');
var _ = require('lodash');

// verb.engine('md', function (str, context, cb) {
//   str = _.template(str, {
//     interpolate: /\{%= ([\s\S]+?) %}/
//   })(this.context)
//   cb(null, str);
// });

// console.log(verb)

verb.helper('foo', function (name) {
  var base = path.resolve(process.cwd(), 'node_modules', name);
  var pkg = path.resolve(base, 'package.json');
  var obj = require(pkg);
  var cwd = path.join(base, obj.main);

  var res = {};
  res.cwd = cwd;
  res.dest = obj.homepage;
  return res;
});

// verb.asyncHelper('apidocs', require('helper-apidocs'));

// verb.asyncHelper('render', function (str) {
//   console.log(str)
//   return this.app.renderSync(str);
// });

// verb.asyncHelper('render', function (str, cb) {
//   return verb.renderString(str, function (err, content) {
//     console.log(content)
//     if (content.indexOf('{%=') !== -1) {
//     }
//     if (err) console.log(err);
//     return cb(null, content);
//   });
// });

verb.task('default', function() {
  verb.src('.verb.md')
    .pipe(verb.dest('.'));
});

// verb.task('docs', function() {
//   verb.src('lib/*.md')
//     .pipe(verb.dest('.'));
// });

// verb.task('default', ['readme', 'docs']);
