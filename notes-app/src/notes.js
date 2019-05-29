import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = [];

// Read existing notes from localStorage
const loadNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  try {
      notes = notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
      return []
  }
}

// Save the notes to local storage
const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Expose notes from module
const getNotes = () => notes


const createNote = () => {
  const id = uuidv4()
  const timestamp = moment().valueOf()

  notes.push({
    id: id, // new id, from var above
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
  })
  saveNotes()

  //return id to be passed/used in index.js
  return id
}

// Remove a note from the list
const removeNote = function (id) {
  const noteIndex = notes.findIndex((note) => note.id === id)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
    saveNotes();
  }
}

// Sort your notes by one of three ways
const sortNotes = (sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort(function (a, b) {
      //a > b -1, a < b 1, a = b 0
      if(a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } 
  
  else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      //a > b -1, a < b 1, a = b 0
      if(a.createdAt > b.createdAt) {
        return -1
      } else if (b.createdAt > a.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      //a > b -1, a < b 1, a = b 0
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }
}

// updates is an object take various properties to update
const updateNote = (id, updates) => {
  const note = notes.find((note) => note.id === id)

  if (!note) {
    return undefined
  }

  if (typeof updates.title === 'string'){
    note.title = updates.title
    note.updatedAt = moment().valueOf()
  }

  if (typeof updates.body === 'string'){
    note.body = updates.body
    note.updatedAt = moment().valueOf()
  }

  //save after changing
  saveNotes()

  return note
} 

// populating the array above
notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNote }