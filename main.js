const input = document.querySelector('input');
const listBoard = document.querySelector('ul.todo-list');
const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let task = document.createElement('li');
  task.setAttribute('class', 'list-item');
  task.textContent = input.value;

  const delBtn = document.createElement('button');
  delBtn.setAttribute('class', 'delete');
  delBtn.textContent = '√';
  task.append(delBtn);

  const editBtn = document.createElement('button');
  editBtn.setAttribute('class', 'edit');
  editBtn.textContent = 'Edit';
  task.append(editBtn);

  listBoard.prepend(task);
  input.value = '';

  editBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addBtn.textContent = 'Edit task';
    delBtn.remove();
    editBtn.remove();
    input.value = task.textContent;

    addBtn.addEventListener('click', (e) => {
      e.preventDefault();

      task.textContent = input.value;
      task.remove();
      input.value = '';
      addBtn.textContent = 'Add task';
    });
  });

  delBtn.addEventListener('click', (e) => {
    e.preventDefault();
    task.remove();
  });
});
