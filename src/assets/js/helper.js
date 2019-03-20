// Helper
import { noteStorage } from "./Storage"

export const $ = selector => document.querySelector(selector)

export const domElements = {
  addNoteInput: $("#add-note"),
  noteContainer: $("#notes"),
  noteDiv: $(".note")
}

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, index) => {
      return `
        <div class="note col-12  border rounded d-flex justify-content-between">
        ${note.name}<i class="far fa-trash-alt pointer" id="${index}"></i>
        </div>
      `
    })
    .join("")
  // only if i have the notes i can target them and add the eventListners
  targetNote();
}
const targetNote = () => {
  //check if we have a note and eventually attach an eventlistner
  const noteDive = document.querySelectorAll(".far");
  if (noteDive !== null)
    noteDive.forEach(oneDiv => {
      oneDiv.addEventListener("click", () => {
        console.log(`clicked a div ${oneDiv.id}`)
        const id = oneDiv.id;
        noteStorage.emit("removeItem", id)
      })
    })
}
