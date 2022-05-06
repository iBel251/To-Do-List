const myModules = require('./add-remove.js');

let { listContainer } = myModules;
const { addTask, deleteTask } = myModules;
describe('my tasks list', () => {
  // Test for adding tasks to the array as an object
  test('test: add 3 tasks', () => {
    addTask('Work');
    addTask('Code');
    addTask('Sleep');
    expect(listContainer[1].description).toBe('Code');
    expect(listContainer).toHaveLength(3);
  });

  // Test for removing tasks from the container
  test('test: delete tasks', () => {
    listContainer = deleteTask(2);
    expect(listContainer).toHaveLength(2);
  });
});
