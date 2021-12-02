
const create_note = (title, content) => {
  //const newDiv = document.createElement('div');
  const data = { title: title, content: content };
  fetch('http://localhost:3000/notes', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  // newDiv.innerText = `${title}: ${content}`;
  // newDiv.className = 'note';
  // document.body.appendChild(newDiv);
};

module.exports = create_note;