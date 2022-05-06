const myModules = require('./add-remove.js');
const addTask = myModules.addTask;
const deleteTask = myModules.deleteTask;
let listContainer = myModules.listContainer;
const Task = myModules.Task;

describe('my tasks list', () => {

  // Test for adding tasks to the array as an object
  test('test: add 3 tasks', () => {
    addTask('task1');
    addTask('task2');
    addTask('task3');
    expect(listContainer[1].description).toBe('task2');
  });

  // Test for removing tasks from the container
  test('test: delete tasks', () => {
    listContainer = deleteTask(2);
    expect(listContainer).toHaveLength(2);
  });
});