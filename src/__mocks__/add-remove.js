let listContainer = [];

export default class Task {
  constructor(disc) {
    this.index = 0;
    this.completed = false;
    this.description = disc;
  }
}

function addTask(taskInput) {
  const newTask = new Task(taskInput);
  if (listContainer.length > 0) {
    newTask.index = listContainer.length;
  }
  listContainer.push(newTask);
}

function deleteTask(id) {
  listContainer = listContainer.filter((item) => item.index !== id);
  return listContainer;
}

function editTask(id, name) {
  const newName = name;
  const taskName = listContainer[id].description;
  if (taskName !== newName) {
    listContainer[id].description = newName;
    localStorage.setItem('container', JSON.stringify(listContainer));
  }
  return listContainer;
}

function updateStatus(id) {
  listContainer[id].completed = !listContainer[id].completed;
  localStorage.setItem('container', JSON.stringify(listContainer));
  return listContainer;
}

function clearAllCompleted() {
  listContainer = listContainer.filter((item) => item.completed === false);
  localStorage.setItem('container', JSON.stringify(listContainer));
  return listContainer;
}

module.exports = {};
module.exports.addTask = addTask;
module.exports.deleteTask = deleteTask;
module.exports.editTask = editTask;
module.exports.updateStatus = updateStatus;
module.exports.clearAllCompleted = clearAllCompleted;
module.exports.listContainer = listContainer;
module.exports.Task = Task;
