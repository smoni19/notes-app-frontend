const show_note = (id) => {
  displayed_note = document.querySelector('#displayed_note');
  displayed_note.innerHTML = id;
  displayed_note.innerText = id;
  displayed_note.value = id;
  console.log(id);
};

module.exports = show_note;