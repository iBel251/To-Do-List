import * as myModules from './add-remove.js';

jest.mock('./add-remove');

let { listContainer } = myModules;
const {
  addTask, deleteTask, editTask, updateStatus, clearAllCompleted,
} = myModules;
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

  // Test for task description editing
  test('test: edit task description', () => {
    listContainer = editTask(1, 'new task');
    expect(listContainer[1].description).toBe('new task');
  });

  // Test for task completion status
  test('test: Is task completed?', () => {
    listContainer = updateStatus(1);
    expect(listContainer[1].completed).toBe(true);
  });

  // Test for clear all completed tasks
  test('test: clear all completed', () => {
    listContainer = clearAllCompleted();
    expect(listContainer).toHaveLength(1);
  });
});
