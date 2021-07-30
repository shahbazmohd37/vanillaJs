var inputTask = '';
var taskList = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [];
var count = 0;
const inputElem = document.getElementById('inputTask');
function handleInput(e) {
  console.log('input handled', e);
}

if (taskList.length !== 0) {
  taskList.forEach((item) => {
    addTask(item);
  })
}

function addTask(item = '') {
  const inputText = inputElem.value || '';
  let inputTask = {text: inputText, completed: false};
  if (item) {
    inputTask = item;
  } else {
    taskList.push(inputTask);
  }
  renderTaskList(inputTask);
}


function renderTaskList(inputTask) {
  const taskListElem = document.getElementById('taskList');
    const taskElem = document.createElement('div');

    // edit button 
    const editElem = document.createElement('button');
    editElem.textContent = 'Edit';
    editElem.addEventListener('click', () => {console.log('Editing element', inputTask.text);});

    // add complete button
    const completeElem = document.createElement('button');
    completeElem.textContent = 'Complete';
    if (inputTask.completed) {
      completeElem.classList = 'completed';
    }
    completeElem.addEventListener('click', () => {
      editElem.disabled = true;
      completeElem.classList = 'completed'
      inputTask.completed = true;
      console.log('tasklist ', taskList)
      updateTaskInLocal(taskList)
    });

    // add Delete btn
    const deleteElem = document.createElement('button');
    deleteElem.textContent = 'Delete';
    deleteElem.addEventListener('click', () => {taskElem.remove(); deleteTask(inputTask.text)});

    // add in parent
    taskElem.classList = 'row w-100';
    taskElem.innerHTML = inputTask.text;
    taskElem.appendChild(deleteElem);
    taskElem.appendChild(editElem);
    taskElem.appendChild(completeElem);
    taskListElem.appendChild(taskElem)
    updateTaskInLocal(taskList)
    console.log('tasklist is ', taskList)
}

function deleteTask(task) {
  const updatedTaskList = []
  if (task) {
    for (let item of taskList) {
      if(item.text !== task) {
        updatedTaskList.push(item);
      }
    }
  }
  taskList = updatedTaskList;
  updateTaskInLocal(taskList)
}

function updateTaskInLocal(list) {
  localStorage.setItem('taskList', JSON.stringify(list));
}