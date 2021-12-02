const get_notes = () => {
 
   fetch('http://localhost:3000/notes').then((response) =>{    
   return response.json();
   }).then((jsonData)=> {
       console.log(jsonData);
       jsonData.forEach(x => {
       newDiv = document.createElement("div")
       newDiv.innerText = x.title;
       document.body.appendChild(newDiv);
       }
   )})

}

module.exports = get_notes;