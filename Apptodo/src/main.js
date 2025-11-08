import './style.css'

// HTML structure for the ToDo app
document.querySelector('#app').innerHTML = `
  <div class="todo-app">
    <h1>My ToDo List</h1>
    <div class="input-section">
      <input type="text" id="todo-input" placeholder="Add a new task" />
      <button id="add-btn">Add</button>
    </div>
    <ul id="todo-list"></ul>
  </div>
`

// Grab elements
const input = document.querySelector('#todo-input')
const addBtn = document.querySelector('#add-btn')
const todoList = document.querySelector('#todo-list')

// Function to add a new task
function addTask() {
  const taskText = input.value.trim()
  if (!taskText) return

  const li = document.createElement('li')
  li.textContent = taskText

  // Add a delete button for each task
  const delBtn = document.createElement('button')
  delBtn.textContent = 'Delete'
  delBtn.className = 'delete-btn'
  delBtn.addEventListener('click', () => li.remove())

  li.appendChild(delBtn)
  todoList.appendChild(li)

  input.value = '' // Clear input
}

// Event listener for Add button
addBtn.addEventListener('click', addTask)

// Optional: Press Enter to add task
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask()
})

