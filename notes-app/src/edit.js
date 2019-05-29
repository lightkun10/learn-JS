import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

// DOM SELECTOR
const titleElement = document.querySelector('#note-title')
const dateEl = document.querySelector('#note-date')
const bodyElement = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const noteId = location.hash.substring(1);

initializeEditPage(noteId)

// EVENT HANDLER
titleElement.addEventListener('input', (e) => {
  const note = updateNote(noteId, {
    title: e.target.value
  })
  dateEl.textContent = generateLastEdited(note.updatedAt)
})

bodyElement.addEventListener('input', (e) => {
  const note = updateNote(noteId, {
    body: e.target.value
  })
  //store the date data
  dateEl.textContent = generateLastEdited(note.updatedAt)
})

removeButton.addEventListener('click', () => {
  removeNote(noteId)
  location.assign('./index.html')
})


window.addEventListener('storage', (e) => {
  // debugger
  console.log("Some data changed. Please reload the page.")
  if (e.key === 'notes') {
    initializeEditPage(noteId)
  }
})