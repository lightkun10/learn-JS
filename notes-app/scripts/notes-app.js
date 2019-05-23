'use strict'

let notes = getSavedNotes();

let filters = { // where temporary file stored
  searchText: '', // overtime the value will changed
  sortBy: 'byEdited' // default display
}

renderNotes(notes, filters); //to make the apps initially renders something


document.querySelector('#createNote').addEventListener('click', function (e) {
  // console.log('Did the button work?')
  console.log(e)
  const id = uuidv4()
  const timestamp = moment().valueOf()

  notes.push({
    id: id, // new id, from var above
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
  })
  
  //save the newly saved to local
  saveNotes(notes)
  location.assign(`./edit.html#${id}`)
});

document.querySelector('#searchText').addEventListener('input', (e) => {
  //update "filters.searchText from the event input"
  filters.searchText = e.target.value //
  renderNotes(notes, filters) //re-render with the call inside
})

document.querySelector('#filter-by').addEventListener('input', (e) => {
  filters.sortBy = e.target.value
  renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    // debugger
    // console.log('data has changed')
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})


