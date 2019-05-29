import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'


renderNotes(); //to make the apps initially renders something


document.querySelector('#createNote').addEventListener('click', function (e) {
  const id = createNote()
  location.assign(`./edit.html#${id}`)
});

document.querySelector('#searchText').addEventListener('input', (e) => {
  //update "filters.searchText from the event input"
  setFilters({
    searchText: e.target.value
  })
  renderNotes() //re-render with the call inside
})

document.querySelector('#filter-by').addEventListener('input', (e) => {
  setFilters({
    sortBy: e.target.value
  })
  renderNotes()
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    // debugger
    // console.log('data has changed')
      renderNotes()
  }
})




// default export can be named anything