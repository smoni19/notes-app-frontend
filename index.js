const create_note = require('./create_note');
const get_notes = require('./get_notes');

const title = document.querySelector('#title');
const content = document.querySelector('#content');
const button = document.querySelector('#submit');
const body = document.querySelector('body')


button.addEventListener('click', () => {
  create_note(title.value, content.value);
  get_notes()
});

window.addEventListener('load', () => {
  console.log("test") 
  get_notes()

})