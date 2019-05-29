import moment from 'moment'
import { getFilters } from './filters';
import { sortNotes, getNotes } from './notes'

// Generate the DOM structure
const generateNoteDom = (note) => {
  const noteEl = document.createElement('a')
  const textEl = document.createElement('p')
  const statusEl = document.createElement('p')

  // Setup the DOM structure for a note.
  if(note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }
  textEl.classList.add()
  noteEl.appendChild(textEl)

  // Setup the link
  noteEl.setAttribute('href', `./edit.html#${note.id}`)
  noteEl.classList.add('list-item')

  // Setup the status message
  statusEl.textContent = generateLastEdited(note.updatedAt)
  statusEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)

  return noteEl
}

// Render Application notes
const renderNotes = () => {
  const notesEl = document.querySelector('#notes')
  const filters = getFilters()
  const notes = sortNotes(filters.sortBy)
  //limit the note that passed the "filters"
    //use filter() method to filter the "notes"
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase())
)

  //clear where the data is rendered before add new notes
  notesEl.innerHTML = ''

  if(filteredNotes.length > 0) {
    //iterated over "filteredNotes" array, render element from each one
    filteredNotes.forEach((note) => {
      //make an element, set the text value and render
      const noteEl = generateNoteDom(note)
      
      notesEl.appendChild(noteEl); 
  }) 
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'No notes to show'
    emptyMessage.classList.add('empty-message')
    notesEl.appendChild(emptyMessage)
  }
}

const initializeEditPage = (noteId) => {
  const titleElement = document.querySelector('#note-title')
  const dateEl = document.querySelector('#note-date')
  const bodyElement = document.querySelector('#note-body')

  let notes = getNotes()
  let note = notes.find((note) => note.id === noteId)
  
  if (!note) {
    location.assign('./index.html')
  }
  
  titleElement.value = note.title
  bodyElement.value = note.body
  // dateEl.textContent = dateEdited(note.updatedAt)
  dateEl.textContent = `Last edited ${moment(note.updatedAt).fromNow()} `
}

// Generate the last edited message
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`
}

export { generateNoteDom, renderNotes, generateLastEdited, initializeEditPage };