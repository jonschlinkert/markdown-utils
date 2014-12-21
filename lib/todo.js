'use strict';

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
 *
 * @name todo
 * @param  {String} `str`
 * @api public
 */

module.exports = function todo(str, checked) {
  return (checked ? '- [x] ' : '- [ ] ') + str;
};
