import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({ sigint: true });
import TodoNav from './todoNav.js';

const todoNav = new TodoNav();
const input = {
  getUserInput: (message) => {
    return prompt(message);
  }
}
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
    console.log('Todo successfully added!');
  },

  addTodoToTop: () => {
    const task = getUserInput('Enter the task: ');
    todoNav.addToTopOfList({ task });
    console.log('Todo added to the top successfully!');
  },

  removeByName: () => {
    const name = getUserInput('Enter the todo you want to delete: ');
    const deletedTodo = todoNav.removeFromListByName(name);
    console.log(`The todo ${deletedTodo} successfully deleted!`);
  },

  moveItemToDone: () => {
    const index = parseInt(getUserInput('Enter the number of the todo that is Done: ')) - 1;
    todoNav.removeFromListAndAddToDone(index);
    console.log('Todo moved to Done list successfully!');
  },

  moveDown: () => {
    const index = parseInt(getUserInput('Enter the number of the todo to move down: ')) - 1;
    todoNav.moveDown(index);
    console.log('Todo moved down successfully!');
  },

  moveUp: () => {
    const index = parseInt(getUserInput('Enter the number of the todo to move up: ')) - 1;
    todoNav.moveUp(index);
    console.log('Todo moved up successfully!');
  },
};
