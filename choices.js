
import TodoNav from './todoNav.js';

const todoNav = new TodoNav();

export default {
  showTodoList: () => {
    console.log('Todo List:');
    todoNav.todoList.forEach((item, index) => {
      console.log(`${index + 1}. Task: ${item.task}, Description: ${item.description}`);
    });
  },

  showDoneList: () => {
    console.log('Done List:');
    todoNav.getDoneList().forEach((item, index) => {
      console.log(`${index + 1}. Task: ${item.task}, Description: ${item.description}`);
    });
  },

  addTodo: () => {
    const task = getUserInput('Enter the task: ');
    const description = getUserInput('Enter the description: ');
    todoNav.addToList({ task, description });
    console.log('Todo added successfully.');
  },
}