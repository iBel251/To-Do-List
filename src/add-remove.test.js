class Task {
  constructor(disc) {
    this.index = 0;
    this.completed = false;
    this.description = disc;
  }
}

describe('my tasks list', () => {
  // Test for adding tasks to the array as an object

  test('test: add tasks', () => {
    const listContainer = [];
    const newTask = new Task('task1');
    listContainer.push(newTask);
    expect(listContainer).toHaveLength(1);
  });

  // Test for removing tasks from the container
  test('test: delete tasks', () => {
    let listContainer2 = [];
    const newTask = new Task('task1');
    const newTask1 = new Task('task2');
    const newTask2 = new Task('task3');
    listContainer2.push(newTask, newTask1, newTask2);
    listContainer2 = listContainer2.filter((item) => item.description !== 'task1');
    expect(listContainer2).toHaveLength(2);
  });
});