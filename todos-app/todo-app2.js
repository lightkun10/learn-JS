const todos = 
[{
  text: 'Wash the dishes',
  completed: false
}, {
  text: 'Eat',
  completed: true
}, {
  text: 'Learn web dev',
  completed: true
}, {
  text: 'Exercise',
  completed: false
}, {
  text: 'Sleep',
  completed: false
}]

const filters = {
  searchText: ''
}

const renderedTodos = function (todos, filters) {
  const filteredTodos = todos.filter( function(todo){
    //check if the data inputted the same to the filtered data
      //if "true", the data passed on.
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  //reset the input each time data is cleared
  document.querySelector('#todos').innerHTML = ''

  //loop through the filtered data
    // console.log(filteredTodos); // <<<<< to check
  filteredTodos.forEach (function (todo) {
    //create new element each time inputing new data
    const newEl = document.createElement('h4')
    newEl.textContent = todo.text
    document.querySelector('#todos').appendChild(newEl);
  })
}

let count = 0
const todoLeft = todos.filter(function(todos, index){
  if (!todos.completed) {
    return count++
  }
})

const summaryTodo = document.createElement('h2')
summaryTodo.textContent = `You have ${count} todos left `
document.querySelector('#todos').appendChild(summaryTodo)


// todos.forEach(function(todos, i){
//   let index = i + 1
//   const newParagraph = document.createElement('p')
//   newParagraph.textContent = index + '. ' + todos.text
//   document.querySelector('#todos').appendChild(newParagraph)
// })

renderedTodos(todos, filters)

//ENDS

document.querySelector('button#newTodo').addEventListener('click', function(){
  console.log('Add new todo!')
})

document.querySelector('#createTodo').addEventListener('input', function(e){
  console.log(e.target.value)
})

document.querySelector('#searchText').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderedTodos(todos, filters)
})