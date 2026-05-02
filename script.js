let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {
  let output = "";
  notes.forEach((note, index) => {
    output += `
      <div class="note">
        ${note}
        <span class="delete" onclick="deleteNote(${index})">❌</span>
      </div>
    `;
  });
  document.getElementById("notes").innerHTML = output;
}

function addNote() {
  let input = document.getElementById("noteInput").value;
  if (input === "") return;

  notes.push(input);
  localStorage.setItem("notes", JSON.stringify(notes));
  document.getElementById("noteInput").value = "";
  showNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function searchNotes() {
  let search = document.getElementById("search").value.toLowerCase();
  let filtered = notes.filter(note => note.toLowerCase().includes(search));

  let output = "";
  filtered.forEach((note, index) => {
    output += `<div class="note">${note}</div>`;
  });

  document.getElementById("notes").innerHTML = output;
}

showNotes();