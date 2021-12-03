const get_notes = () => {

	fetch('http://localhost:3000/notes').then((response) =>{    
	return response.json();
	}).then((jsonData)=> {
			console.log(jsonData);
			jsonData.forEach(x => {
			newId = document.querySelectorAll('a').length + 1;
			noteDiv = document.createElement('a');
			noteDiv.href = '#';
			noteDiv.className = 'note';
			noteDiv.id = `note-${newId}`;
			noteDiv.setAttribute("onclick", "document.querySelector('#displayed_note').innerText = text;");
			title = document.createElement('span');
			title.innerText = x.title + ':';
			noteDiv.append(title);
			text = document.createElement('span');
			text.innerText = x.content;
			noteDiv.append(text);
			document.body.appendChild(noteDiv);	
			}
	)})
};

module.exports = get_notes;