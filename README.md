# markdown-utils [![NPM version](https://badge.fury.io/js/markdown-utils.svg)](http://badge.fury.io/js/markdown-utils)

> Create markdown snippets.

## Install with [npm](npmjs.org)

```bash
npm i markdown-utils --save
```

## Run tests

```bash
npm test
```

## Usage

```js
var mdu = require('markdown-utils');
```

## API
### [.anchor](lib/anchor.js#L21)

Create a markdown-formatted anchor link from the given values.

* `anchor` **{String}**    
* `href` **{String}**    
* `title` **{String}**    

```js
utils.anchor('embed', 'assemble/handlebars-helpers/lib/code.js', 25, 'v0.6.0');
//=> [embed](https://github.com/assemble/handlebars-helpers/blob/v0.6.0/lib/helpers/code.js#L25)
```

### [.badge](lib/badge.js#L21)

Create a markdown-formatted badge.

* `alt` **{String}**    
* `img_url` **{String}**    
* `url` **{String}**    

```js
utils.badge(alt, img_url, url);
//=> [![Build Status](https://travis-ci.org/jonschlinkert/template.svg)](https://travis-ci.org/jonschlinkert/template)
```

### [.blockquote](lib/blockquote.js#L16)

Create a markdown-formatted blockquote.

* `str` **{String}**    

```js
utils.blockquote('This is a blockquote');
//=> '> This is a blockquote'
```

### [.code](lib/code.js#L16)

Create a markdown-formatted `<code></code>` snippet.

* `str` **{String}**    

```js
utils.code('var foo = bar;');
//=> '`var foo = bar;`'
```

### [.del](lib/del.js#L16)

Create markdown-formatted `<del></del>`.

* `str` **{String}**    

```js
utils.del('text');
//=> '~~text~~'
```

### [.em](lib/em.js#L16)

Create a markdown-formatted em.

* `str` **{String}**    

```js
utils.em('This is emphasized');
//=> '_This is emphasized_'
```

### [.h1](lib/h1.js#L16)

Create a markdown-formatted h1 heading.

* `str` **{String}**    

```js
utils.h1('This is a heading');
//=> '# This is a heading'
```

### [.h2](lib/h2.js#L16)

Create a markdown-formatted h2 heading.

* `str` **{String}**    

```js
utils.h2('This is a heading');
//=> '## This is a heading'
```

### [.h3](lib/h3.js#L16)

Create a markdown-formatted h3 heading.

* `str` **{String}**    

```js
utils.h3('This is a heading');
//=> '### This is a heading'
```

### [.h4](lib/h4.js#L16)

Create a markdown-formatted h4 heading.

* `str` **{String}**    

```js
utils.h4('This is a heading');
//=> '#### This is a heading'
```

### [.h5](lib/h5.js#L16)

Create a markdown-formatted h5 heading.

* `str` **{String}**    

```js
utils.h5('This is a heading');
//=> '##### This is a heading'
```

### [.h6](lib/h6.js#L16)

Create a markdown-formatted h6 heading.

* `str` **{String}**    

```js
utils.h6('This is a heading');
//=> '###### This is a heading'
```

### [.heading](lib/heading.js#L17)

Create a markdown-formatted heading.

* `str` **{String}**    
* `level` **{Number}**    

```js
utils.heading('This is a heading', 1);
//=> '# This is a heading'
```

### [.hr](lib/hr.js#L16)

Create a markdown-formatted horizontal rule.

* `str` **{String}**: Alternate string to use. Default is `***` to avoid collision with `---` which is used for front matter.    

```js
utils.hr();
//=> '***'
```

### [.image](lib/image.js#L21)

Create a markdown-formatted image from the given values.

* `alt` **{String}**    
* `src` **{String}**    
* `title` **{String}**    

```js
utils.image(alt, src);
//=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg)

utils.image(alt, src, title);
//=> ![Build Status](https://travis-ci.org/jonschlinkert/template.svg "This is title of image!")
```


### [.link](lib/link.js#L18)

Create a markdown-formatted link from the given values.

* `anchor` **{String}**    
* `href` **{String}**    
* `title` **{String}**    

```js
utils.link('fs-utils', 'https://github.com/assemble/fs-utils', 'hover title');
//=> [fs-utils](https://github.com/assemble/fs-utils "hover title")
```


### [.listitem](lib/listitem.js#L28)

Create a markdown-formatted listitem.

* `str` **{String}**    
* `level` **{Number}**    
* `options` **{String}**    

```js
utils.item('Level 0 list item', 0);
//=> '* Level 0 list item'

utils.item('Level 1 list item', 1);
//=> '  * Level 1 list item'

utils.item('Level 2 list item', 2);
//=> '    * Level 2 list item'
```

### [.pre](lib/pre.js#L23)

Create a markdown-formatted `<pre><code></code></pre>` snippet with or without lang.

* `str` **{String}**    
* `language` **{String}**    

```js
utils.pre('var foo = bar;');
```

Results in:

<pre>
```js
var foo = bar;
```

</pre>
### [.reference](lib/reference.js#L18)

Create a markdown-formatted reference link from the given values.

* `id` **{String}**    
* `url` **{String}**    
* `title` **{String}**    

```js
utils.reference('template', 'https://github/jonschlinkert/template', 'Make stuff!');
//=> [template]: https://github/jonschlinkert/template "Make stuff!"
```

### [.strong](lib/strong.js#L16)

Create markdown-formatted bold text.

* `str` **{String}**    

```js
utils.strong('This is bold');
//=> '**This is bold**'
```

### [.todo](lib/todo.js#L19)

Create a markdown-formatted todo item.

* `str` **{String}**    

```js
utils.todo('this is a todo.');
//=> '- [ ] this is a todo'

utils.todo('this is a completed todo.', true);
//=> '- [x] this is a todo'
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/markdown-utils/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on December 21, 2014._
