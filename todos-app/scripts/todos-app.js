'use strict'

let todos = getSavedTodos()

// Task 2: Create hideCompleted filter (default false)
const filters = {
  searchText: '',
  hideCompleted: false
}

renderTodos(todos, filters);

document.querySelector('#searchText').addEventListener('input', (e) => {
  //getting the new value and change it
  filters.searchText =  e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
// 1. Get a trimmed version of the input
const text = e.target.elements.newTodo.value.trim()
e.preventDefault();
// 2. Only add new todo if it has content
if(text.length > 0) {
  // console.log(e)
  todos.push({
    id: uuidv4(),
    text: text,
    completed: false
  })
  saveTodos(todos)
  console.log(`Added "${e.target.elements.newTodo.value}" to the list`)
  e.target.elements.newTodo.value = '' //to clear the field
  renderTodos(todos, filters)
}

})

// Task 1: Create a checkbox and setup event listener
document.querySelector('#hideCompleted').addEventListener('change', (e) => {
  // boolean, checked or not
  console.log(e.target.checked) //return true if clicked
// Task 3: Update hideCompleted an rerender list on checkbox change
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})