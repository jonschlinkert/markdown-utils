/*!
 * markdown-utils <https://github.com/jonschlinkert/markdown-utils>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

const isNumber = require('is-number');
const listitem = require('list-item');

/**
 * Create a markdown-formatted blockquote.
 *
 * ```js
 * utils.blockquote('This is a blockquote');
 * //=> '> This is a blockquote'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.blockquote = str => str ? `> ${str}` : '';

/**
 * Create a markdown-formatted `<code></code>` snippet.
 *
 * ```js
 * utils.code('const foo = bar;');
 * //=> '`const foo = bar;`'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.code = str => str ? `\`${str}\`` : '';

/**
 * Create markdown-formatted deleted text: `~~text~~`.
 *
 * ```js
 * utils.del('text');
 * //=> '~~text~~'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.del = str => str ? `~~${str}~~` : '';

/**
 * Create a markdown-formatted em.
 *
 * ```js
 * utils.em('This is emphasized');
 * //=> '_This is emphasized_'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.em = str => str ? `_${str}_` : '';

/**
 * Create a markdown-formatted heading.
 *
 * ```js
 * utils.h(1, 'This is a heading');
 * //=> '# This is a heading'
 * ```
 * @param {String} `str`
 * @param {Number} `level`
 * @api public
 */

exports.h = (level, str) => str ? exports.heading(str, level) : '';

/**
 * Create a markdown-formatted h1 heading.
 *
 * ```js
 * utils.h1('This is a heading');
 * //=> '# This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h1 = str => str ? `# ${str}` : '';

/**
 * Create a markdown-formatted h2 heading.
 *
 * ```js
 * utils.h2('This is a heading');
 * //=> '## This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h2 = str => str ? `## ${str}` : '';

/**
 * Create a markdown-formatted h3 heading.
 *
 * ```js
 * utils.h3('This is a heading');
 * //=> '### This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h3 = str => str ? `### ${str}` : '';

/**
 * Create a markdown-formatted h4 heading.
 *
 * ```js
 * utils.h4('This is a heading');
 * //=> '#### This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h4 = str => str ? `#### ${str}` : '';

/**
 * Create a markdown-formatted h5 heading.
 *
 * ```js
 * utils.h5('This is a heading');
 * //=> '##### This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h5 = str => str ? `##### ${str}` : '';

/**
 * Create a markdown-formatted h6 heading.
 *
 * ```js
 * utils.h6('This is a heading');
 * //=> '###### This is a heading'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.h6 = str => str ? `###### ${str}` : '';

/**
 * Create a markdown-formatted heading.
 *
 * ```js
 * utils.heading('This is a heading', 1);
 * //=> '# This is a heading'
 * ```
 * @param {String} `str`
 * @param {Number} `level`
 * @api public
 */

exports.heading = (str, level) => str ? exports[`h${(level || 1)}`](str) : '';

/**
 * Create a markdown-formatted horizontal rule.
 *
 * ```js
 * utils.hr();
 * //=> '***'
 * ```
 * @param {String} `str` Alternate string to use. Default is `***` to avoid collision with `---` which is commonly used for front-matter.
 * @api public
 */

exports.hr = (str = '***') => str;

/**
 * Create a markdown-formatted link from the given values.
 *
 * ```js
 * utils.link('fs-utils', 'https://github.com/assemble/fs-utils', 'hover title');
 * //=> [fs-utils](https://github.com/assemble/fs-utils "hover title")
 * ```
 * @param {String} `anchor`
 * @param {String} `href`
 * @param {String} `title`
 * @api public
 */

exports.link = (anchor, href, title) => {
  return `[${anchor}](${href}${title ? ` "${title}"` : ''})`;
};

/**
 * Create a markdown-formatted anchor link from the given values.
 *
 * ```js
 * utils.anchor('embed', 'assemble/handlebars-helpers/lib/code.js', 25, 'v0.6.0');
 * //=> [embed](https://github.com/assemble/handlebars-helpers/blob/v0.6.0/lib/helpers/code.js#L25)
 * ```
 * @param {String} `anchor`
 * @param {String} `href`
 * @param {String} `title`
 * @api public
 */

exports.anchor = (text, repo, line, branch) => {
  return `[${text}](${format(repo, branch, line)})`;
};

function format(str, branch, line) {
  let segs = str.split(/[\\\/]/);
  let repo = segs.slice(0, 2).join('/');
  let rest = segs.slice(2).join('/');
  if (isNumber(branch)) {
    line = branch;
    branch = 'master';
  }
  let res = 'https://github.com/';
  res += `${repo}/blob/${branch}/${rest}`;
  res += line ? `#L${line}` : '';
  return res;
}

/**
 * Create a markdown-formatted reference link from the given values.
 *
 * ```js
 * utils.reference('template', 'https://github/jonschlinkert/template', 'Make stuff!');
 * //=> [template]: https://github/jonschlinkert/template "Make stuff!"
 * ```
 * @param {String} `id`
 * @param {String} `url`
 * @param {String} `title`
 * @api public
 */

exports.reference = (id, url, title) => {
  return `[${id}]: ${url}${title ? ` "${title}"` : ''}`;
};

/**
 * Create a markdown-formatted image from the given values.
 *
 * ```js
 * utils.image(alt, src);
 * //=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg)
 *
 * utils.image(alt, src, title);
 * //=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg "This is title of image!")
 * ```
 * @param {String} `alt`
 * @param {String} `src`
 * @param {String} `title`
 * @api public
 */

exports.image = (alt, src, title) => '!' + exports.link(alt, src, title);

/**
 * Create a markdown-formatted badge.
 *
 * ```js
 * utils.badge(alt, img_url, url);
 * //=> [![Build Status](https://travis-ci.org/jonschlinkert/template.svg)](https://travis-ci.org/jonschlinkert/template)
 * ```
 * @param {String} `alt`
 * @param {String} `img_url`
 * @param {String} `url`
 * @api public
 */

exports.badge = (alt, img_url, url, title) => {
  return exports.link(exports.image(alt, img_url, title), url);
};

/**
 * Returns a function to generate a plain-text/markdown list-item,
 * allowing options to be cached for subsequent calls.
 *
 * ```js
 * const li = listitem(options);
 *
 * li(0, 'Level 0 list item');
 * //=> '- Level 0 list item'
 *
 * li(1, 'Level 1 list item');
 * //=> '  * Level 1 list item'
 *
 * li(2, 'Level 2 list item');
 * //=> '    + Level 2 list item'
 * ```
 * @param {String} `options`
 *   @option {Boolean} [options] `nobullet` Pass true if you only want the list iten and identation, but no bullets.
 *   @option {String} [options] `indent` The amount of leading indentation to use. default is `  `.
 *   @option {String|Array} [options] `chars` If a string is passed, [fill-range] will be used to generate an array of bullets (visit [fill-range] to see all options.) Or directly pass an array of bullets, numbers, letters or other characters to use for each list item. Default `['-', '*', '+', '~']`
 * @param {Function} `fn` pass a function [fill-range] to modify the bullet for an item as it's generated.
 * @api public
 */

exports.li = (char, level, options, fn) => listitem(options, fn)(level, char);

/**
 * Create a markdown-formatted `<pre><code></code></pre>` snippet with or without lang.
 *
 * ```js
 * utils.pre('const foo = bar;');
 * ```
 * Results in:
 *
 * ```html
 * <pre>
 * const foo = bar;
 * </pre>
 * ```
 * @param {String} `str`
 * @param {String} `language`
 * @api public
 */

exports.pre = str => str ? `<pre>\n${str}\n</pre>` : '';

/**
 * Create a markdown-formatted code snippet with or without `lang`.
 *
 * ```js
 * utils.gfm('const foo = bar;', 'js');
 * ```
 * Results in:
 *
 * <pre>
 * ```js
 * const foo = bar;
 * ```
 * </pre>
 *
 * @param {String} `str`
 * @param {String} `language`
 * @api public
 */

exports.gfm = (str, lang = '') => {
  let fence = '```';
  return str ? `${fence}${lang}\n${str}\n${fence}` : '';
};

/**
 * Create markdown-formatted bold text.
 *
 * ```js
 * utils.strong('This is bold');
 * //=> '**This is bold**'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.strong = str => str ? `**${str}**` : '';

/**
 * Create a markdown-formatted todo item.
 *
 * ```js
 * utils.todo('this is a todo.');
 * //=> '- [ ] this is a todo'
 *
 * utils.todo('this is a completed todo.', true);
 * //=> '- [x] this is a todo'
 * ```
 * @param {String} `str`
 * @api public
 */

exports.todo = (str, checked) => {
  return str ? ((checked ? '- [x] ' : '- [ ] ') + str) : '';
};
