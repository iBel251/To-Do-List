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

module.exports = {};
module.exports.addTask = addTask;
module.exports.deleteTask = deleteTask;
module.exports.listContainer = listContainer;
module.exports.Task = Task;
