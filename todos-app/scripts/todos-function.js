'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
  let todosJSON = localStorage.getItem('todos') //'todos' is the key name

  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
}

// Save todos to local Storage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === id
  })

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

//Toggle todo by Andrew
const toggleTodo = (id) => {
  // find the id of the checked item
  const todo = todos.find((todo) => todo.id === id)

  if (todo) {
    todo.completed = !todo.completed
  }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
        // the function gets called with individual items
  const filteredTodo = todos.filter((todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    /*********FOR THE CHECKED EVENT******/
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const todoLeft = filteredTodo.filter((todos) => !todos.completed)

  document.querySelector('#todos').innerHTML = ''

  document.querySelector('#todos').appendChild(generateSummaryDom(todoLeft))

  filteredTodo.forEach((todos) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todos))
  })
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const todoText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Set the checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed  
  checkbox.addEventListener('change', (e) => {
    todo.completed = e.target.checked
    // toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })
  containerEl.appendChild(checkbox)

  // Set the todo text
  todoText.textContent = todo.text
  containerEl.appendChild(todoText)

  // Setup container
  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)

  // Set the remove button
  removeButton.textContent = 'remove'
  removeButton.classList.add('button', 'button--text')
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  todoEl.appendChild(removeButton)

  return todoEl
}

// Get the DOM element for list summary
const generateSummaryDom = (todoLeft) => {
  const summaryTodo = document.createElement('h3')
  const plural = todoLeft.length === 1 ? '' : 's'
  summaryTodo.classList.add('list-title')
  summaryTodo.textContent = `You have ${todoLeft.length} todo${plural} left`
  return summaryTodo
}