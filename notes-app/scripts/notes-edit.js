'use strict'

// DOM SELECTOR
const titleElement = document.querySelector('#note-title')
const dateEl = document.querySelector('#note-date')
const bodyElement = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')


const noteId = location.hash.substring(1);
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note) {
  location.assign('./index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
// dateEl.textContent = dateEdited(note.updatedAt)
dateEl.textContent = `Last edited ${moment(note.updatedAt).fromNow()} `

// EVENT HANDLER
titleElement.addEventListener('input', (e) => {
  note.title = e.target.value
  //store the date data
  note.updatedAt = moment().valueOf()
  dateEl.textContent = `Last edited ${moment(note.updatedAt).fromNow()} `
  saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value
  //store the date data
  note.updatedAt = moment().valueOf()
  dateEl.textContent = `Last edited ${moment(note.updatedAt).fromNow()} `
  saveNotes(notes)
})

removeButton.addEventListener('click', () => {
  removeNote(note.id)
  saveNotes(notes)
  location.assign('./index.html')
})


window.addEventListener('storage', (e) => {
  // debugger
  console.log("Some data changed. Please reload the page.")
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    note = notes.find((note) => note.id === noteId)
    
    if (!note) {
      location.assign('./index.html')
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body    
  }
})