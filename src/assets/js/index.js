import "@scss/styles.scss"
import { noteStorage } from "./Storage"

import { domElements } from "./helper"

const {addNoteInput ,noteDiv} = domElements


addNoteInput.addEventListener("keyup", () => {
  if (event.keyCode === 13) {
  const note = addNoteInput.value
  if (note) {
    noteStorage.emit("addItem", note)
    addNoteInput.value = ""
  }}
})
