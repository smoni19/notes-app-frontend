const create_note = require('./create_note');
const get_notes = require('./get_notes');
const show_note = require('./show_note');

const title = document.querySelector('#title');
const content = document.querySelector('#content');
const button = document.querySelector('#submit');
const note = document.querySelector('.note');

button.addEventListener('click', () => {
  create_note(title.value, content.value);
});

get_notes();

// note.addEventListener('click', () => {
//   show_note(this.id);
// });