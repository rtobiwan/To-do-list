const task = document.querySelector('#task');
const saveIdx = document.querySelector('#save-index');
const addBtn = document.querySelector('.add');
const saveEditBtn = document.querySelector('.save-edit');
const editBtn = document.querySelector('.edit');
const listBoard = document.querySelector('.todo-list');

let todoArray = [];

function displayTodo() {
  let todo = localStorage.getItem('todo');
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = '';
  todoArray.forEach((el, idx) => {
    htmlCode += `<li>
    <p class='list-item'>${el}</p>
    <div class='btn-container'>
      <button onclick='deleteTodo(${idx})' class='delete'>√</button>
      <button onclick='edit(${idx})' class='edit'>Edit</button>
    </div>
 </li>`;
  });
  listBoard.innerHTML = htmlCode;
}

function deleteTodo(idx) {
  let todo = localStorage.getItem('todo');
  todoArray = JSON.parse(todo);
  todoArray.splice(idx, 1);
  localStorage.setItem('todo', JSON.stringify(todoArray));
  displayTodo();
}

function edit(idx) {
  saveIdx.value = idx;
  let todo = localStorage.getItem('todo');
  todoArray = JSON.parse(todo);
  task.value = todoArray[idx];
  addBtn.style.display = 'none';
  saveEditBtn.style.display = 'inline';
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (task.value != '') {
    let todo = localStorage.getItem('todo');
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    todoArray.push(task.value);
    task.value = '';
    localStorage.setItem('todo', JSON.stringify(todoArray));
    displayTodo();
  }
});

saveEditBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let todo = localStorage.getItem('todo');
  todoArray = JSON.parse(todo);
  let id = saveIdx.value;
  todoArray[id] = task.value;
  addBtn.style.display = 'inline';
  saveEditBtn.style.display = 'none';
  task.value = '';
  localStorage.setItem('todo', JSON.stringify(todoArray));
  displayTodo();
});
