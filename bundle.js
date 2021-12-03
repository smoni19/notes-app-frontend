(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // create_note.js
  var require_create_note = __commonJS({
    "create_note.js"(exports, module) {
      var create_note2 = (title3, content2) => {
        const data = { title: title3, content: content2 };
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((response) => response.json()).then((data2) => {
          console.log("Success:", data2);
          window.location.reload();
        }).catch((error) => {
          console.error("Error:", error);
        });
      };
      module.exports = create_note2;
    }
  });

  // get_notes.js
  var require_get_notes = __commonJS({
    "get_notes.js"(exports, module) {
      var get_notes2 = () => {
        fetch("http://localhost:3000/notes").then((response) => {
          return response.json();
        }).then((jsonData) => {
          console.log(jsonData);
          jsonData.forEach((x) => {
            newId = document.querySelectorAll("a").length + 1;
            noteDiv = document.createElement("a");
            noteDiv.href = "#";
            noteDiv.className = "note";
            noteDiv.id = `note-${newId}`;
            noteDiv.setAttribute("onclick", "document.querySelector('#displayed_note').innerText = text;");
            title = document.createElement("span");
            title.innerText = x.title + ":";
            noteDiv.append(title);
            text = document.createElement("span");
            text.innerText = x.content;
            noteDiv.append(text);
            document.body.appendChild(noteDiv);
          });
        });
      };
      module.exports = get_notes2;
    }
  });

  // show_note.js
  var require_show_note = __commonJS({
    "show_note.js"(exports, module) {
      var show_note2 = (id) => {
        displayed_note = document.querySelector("#displayed_note");
        displayed_note.innerHTML = id;
        displayed_note.innerText = id;
        displayed_note.value = id;
        console.log(id);
      };
      module.exports = show_note2;
    }
  });

  // index.js
  var create_note = require_create_note();
  var get_notes = require_get_notes();
  var show_note = require_show_note();
  var title2 = document.querySelector("#title");
  var content = document.querySelector("#content");
  var button = document.querySelector("#submit");
  var note = document.querySelector(".note");
  button.addEventListener("click", () => {
    create_note(title2.value, content.value);
  });
  get_notes();
})();
