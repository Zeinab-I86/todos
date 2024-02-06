import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({ sigint: true });
import TodoNav from './todoNav.js';

const todoNav = new TodoNav();
const toDoInput = (message) => {
  return prompt(message);
};

export default {
  getUserInput: getUserInput,

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
    const task = toDoInput('Enter a todo: ');
    const description = toDoInput('Enter a description: ');
    todoNav.addToList({ task, description });
    console.log('Todo successfully added!');
  },

  addToTop: () => {
    const task = toDoInput('Enter the todo you want to move to the top : ');
    todoNav.addToTopOfList({ task });
    console.log('Todo moved to the top successfully!');
  },


  removeByName: () => {
    const name = toDoInput('Enter the todo you want to delete: ');
    const deletedTodo = todoNav.removeFromListByName(name);
    console.log(`The todo ${deletedTodo} successfully deleted!`);
  },

  moveItemToDone: () => {
    const index = parseInt(toDoInput('Enter the number of the todo that is Done: ')) - 1;
    const doneTodo = todoNav.todoList[index];
    todoNav.removeFromListAndAddToDone(index);
    console.log(`"${doneTodo.task}" Todo moved to Done list successfully!`);
  },


  moveDown: () => {
    const index = parseInt(toDoInput('Enter the number of the todo to move down: ')) - 1;
    const newTodoList = todoNav.moveDown(index);
    console.log('Todo moved down successfully!');
  },

  moveUp: () => {
    const index = parseInt(toDoInput('Enter the number of the todo to move up: ')) - 1;
    const newTodoList = todoNav.moveUp(index);
    console.log('Todo moved up successfully!');
  },
};
