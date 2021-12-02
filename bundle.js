(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // create_note.js
  var require_create_note = __commonJS({
    "create_note.js"(exports, module) {
      var create_note2 = (title2, content2) => {
        const data = { title: title2, content: content2 };
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((response) => response.json()).then((data2) => {
          console.log("Success:", data2);
        }).catch((error) => {
          console.error("Error:", error);
        });
      };
      module.exports = create_note2;
    }
  });

  // index.js
  var create_note = require_create_note();
  var title = document.querySelector("#title");
  var content = document.querySelector("#content");
  var button = document.querySelector("#submit");
  button.addEventListener("click", () => {
    create_note(title.value, content.value);
  });
})();
