const create_note = require('./create_note');

const title = document.querySelector('#title');
const content = document.querySelector('#content');
const button = document.querySelector('#submit');

button.addEventListener('click', () => {
  create_note(title.value, content.value);
});
