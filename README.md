# markdown-utils [![NPM version](https://img.shields.io/npm/v/markdown-utils.svg?style=flat)](https://www.npmjs.com/package/markdown-utils) [![NPM monthly downloads](https://img.shields.io/npm/dm/markdown-utils.svg?style=flat)](https://npmjs.org/package/markdown-utils) [![NPM total downloads](https://img.shields.io/npm/dt/markdown-utils.svg?style=flat)](https://npmjs.org/package/markdown-utils) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/markdown-utils.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/markdown-utils)

> Tiny helpers for creating consistenly-formatted markdown snippets.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save markdown-utils
```

## Usage

```js
const mdu = require('markdown-utils');
```

## API

### [.blockquote](index.js#L24)

Create a markdown-formatted blockquote.

**Params**

* `str` **{String}**

**Example**

```js
utils.blockquote('This is a blockquote');
//=> '> This is a blockquote'
```

### [.code](index.js#L37)

Create a markdown-formatted `<code></code>` snippet.

**Params**

* `str` **{String}**

**Example**

```js
utils.code('const foo = bar;');
//=> '`const foo = bar;`'
```

### [.del](index.js#L50)

Create markdown-formatted deleted text: `~~text~~`.

**Params**

* `str` **{String}**

**Example**

```js
utils.del('text');
//=> '~~text~~'
```

### [.em](index.js#L63)

Create a markdown-formatted em.

**Params**

* `str` **{String}**

**Example**

```js
utils.em('This is emphasized');
//=> '_This is emphasized_'
```

### [.h](index.js#L77)

Create a markdown-formatted heading.

**Params**

* `str` **{String}**
* `level` **{Number}**

**Example**

```js
utils.h(1, 'This is a heading');
//=> '# This is a heading'
```

### [.h1](index.js#L90)

Create a markdown-formatted h1 heading.

**Params**

* `str` **{String}**

**Example**

```js
utils.h1('This is a heading');
//=> '# This is a heading'
```

### [.h2](index.js#L103)

Create a markdown-formatted h2 heading.

**Params**

* `str` **{String}**

**Example**

```js
utils.h2('This is a heading');
//=> '## This is a heading'
```

### [.h3](index.js#L116)

Create a markdown-formatted h3 heading.

**Params**

* `str` **{String}**

**Example**

```js
utils.h3('This is a heading');
//=> '### This is a heading'
```

### [.h4](index.js#L129)

Create a markdown-formatted h4 heading.

**Params**

* `str` **{String}**

**Example**

```js
utils.h4('This is a heading');
//=> '#### This is a heading'
```

### [.h5](index.js#L142)

Create a markdown-formatted h5 heading.

**Params**

* `str` **{String}**

**Example**

```js
utils.h5('This is a heading');
//=> '##### This is a heading'
```

### [.h6](index.js#L155)

Create a markdown-formatted h6 heading.

**Params**

* `str` **{String}**

**Example**

```js
utils.h6('This is a heading');
//=> '###### This is a heading'
```

### [.heading](index.js#L169)

Create a markdown-formatted heading.

**Params**

* `str` **{String}**
* `level` **{Number}**

**Example**

```js
utils.heading('This is a heading', 1);
//=> '# This is a heading'
```

### [.hr](index.js#L182)

Create a markdown-formatted horizontal rule.

**Params**

* `str` **{String}**: Alternate string to use. Default is `***` to avoid collision with `---` which is commonly used for front-matter.

**Example**

```js
utils.hr();
//=> '***'
```

### [.link](index.js#L197)

Create a markdown-formatted link from the given values.

**Params**

* `anchor` **{String}**
* `href` **{String}**
* `title` **{String}**

**Example**

```js
utils.link('fs-utils', 'https://github.com/assemble/fs-utils', 'hover title');
//=> [fs-utils](https://github.com/assemble/fs-utils "hover title")
```

### [.anchor](index.js#L214)

Create a markdown-formatted anchor link from the given values.

**Params**

* `anchor` **{String}**
* `href` **{String}**
* `title` **{String}**

**Example**

```js
utils.anchor('embed', 'assemble/handlebars-helpers/lib/code.js', 25, 'v0.6.0');
//=> [embed](https://github.com/assemble/handlebars-helpers/blob/v0.6.0/lib/helpers/code.js#L25)
```

### [.reference](index.js#L245)

Create a markdown-formatted reference link from the given values.

**Params**

* `id` **{String}**
* `url` **{String}**
* `title` **{String}**

**Example**

```js
utils.reference('template', 'https://github/jonschlinkert/template', 'Make stuff!');
//=> [template]: https://github/jonschlinkert/template "Make stuff!"
```

### [.image](index.js#L265)

Create a markdown-formatted image from the given values.

**Params**

* `alt` **{String}**
* `src` **{String}**
* `title` **{String}**

**Example**

```js
utils.image(alt, src);
//=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg)

utils.image(alt, src, title);
//=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg "This is title of image!")
```

### [.badge](index.js#L280)

Create a markdown-formatted badge.

**Params**

* `alt` **{String}**
* `img_url` **{String}**
* `url` **{String}**

**Example**

```js
utils.badge(alt, img_url, url);
//=> [![Build Status](https://travis-ci.org/jonschlinkert/template.svg)](https://travis-ci.org/jonschlinkert/template)
```

### [.li](index.js#L308)

Returns a function to generate a plain-text/markdown list-item, allowing options to be cached for subsequent calls.

**Params**

* `options` **{String}**  

- `nobullet` **{Boolean}**: Pass true if you only want the list iten and identation, but no bullets.
- `indent` **{String}**: The amount of leading indentation to use. default is ``.
- `chars` **{String|Array}**: If a string is passed, [fill-range](https://github.com/jonschlinkert/fill-range) will be used to generate an array of bullets (visit [fill-range](https://github.com/jonschlinkert/fill-range) to see all options.) Or directly pass an array of bullets, numbers, letters or other characters to use for each list item. Default `['-', '*', '+', '~']`
* `fn` **{Function}**: pass a function [fill-range](https://github.com/jonschlinkert/fill-range) to modify the bullet for an item as it's generated.

**Example**

```js
const li = listitem(options);

li(0, 'Level 0 list item');
//=> '- Level 0 list item'

li(1, 'Level 1 list item');
//=> '  * Level 1 list item'

li(2, 'Level 2 list item');
//=> '    + Level 2 list item'
```

### [.pre](index.js#L328)

Create a markdown-formatted `<pre><code></code></pre>` snippet with or without lang.

Results in:

**Params**

* `str` **{String}**
* `language` **{String}**

**Examples**

```js
utils.pre('const foo = bar;');
```

```html
<pre>
const foo = bar;
</pre>
```

### [.gfm](index.js#L349)

Create a markdown-formatted code snippet with or without `lang`.

Results in:
<pre>
</pre>

**Params**

* `str` **{String}**
* `language` **{String}**

**Examples**

```js
utils.gfm('const foo = bar;', 'js');
```

```js
const foo = bar;
```

### [.strong](index.js#L365)

Create markdown-formatted bold text.

**Params**

* `str` **{String}**

**Example**

```js
utils.strong('This is bold');
//=> '**This is bold**'
```

### [.todo](index.js#L381)

Create a markdown-formatted todo item.

**Params**

* `str` **{String}**

**Example**

```js
utils.todo('this is a todo.');
//=> '- [ ] this is a todo'

utils.todo('this is a completed todo.', true);
//=> '- [x] this is a todo'
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [gfm-code-blocks](https://www.npmjs.com/package/gfm-code-blocks): Extract gfm (GitHub Flavored Markdown) fenced code blocks from a string. | [homepage](https://github.com/jonschlinkert/gfm-code-blocks "Extract gfm (GitHub Flavored Markdown) fenced code blocks from a string.")
* [markdown-link](https://www.npmjs.com/package/markdown-link): Micro util for generating a single markdown link. | [homepage](https://github.com/jonschlinkert/markdown-link "Micro util for generating a single markdown link.")
* [markdown-toc](https://www.npmjs.com/package/markdown-toc): Generate a markdown TOC (table of contents) with Remarkable. | [homepage](https://github.com/jonschlinkert/markdown-toc "Generate a markdown TOC (table of contents) with Remarkable.")
* [remarkable](https://www.npmjs.com/package/remarkable): Markdown parser, done right. 100% Commonmark support, extensions, syntax plugins, high speed - all in… [more](https://github.com/jonschlinkert/remarkable) | [homepage](https://github.com/jonschlinkert/remarkable "Markdown parser, done right. 100% Commonmark support, extensions, syntax plugins, high speed - all in one.")

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 49 | [jonschlinkert](https://github.com/jonschlinkert) |
| 12 | [adjohnson916](https://github.com/adjohnson916) |

### Author

**Jon Schlinkert**

* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)
* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on July 05, 2018._