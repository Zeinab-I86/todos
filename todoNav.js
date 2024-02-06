import { appendFileSync, readFileSync } from 'fs';

export default class todoNav {

  constructor() {
    this.todoList = [];
    this.doneList = [];
    this.getTodoList();
  }

  getTodoList() {
    try {
      const data = readFileSync('todoList.json', 'utf-8');
      const parsedData = JSON.parse(data);
      this.todoList = parsedData.todoList || [];
      this.doneList = parsedData.doneList || [];
    } catch (error) {
      console.log('Error loading todo list from file:', error.message);
    }
  }
  
  addTodoList(todoItem) {
    const data = JSON.stringify({ todoList: this.todoList, doneList: this.doneList }, null, 2);
    const list = 'todo.txt';
    try {
      appendFileSync(list, `\n${data}`);
      console.log('TODO-list saved in todo.text', list);
    } catch (error) {
      console.error('Something went wrong')
    }
  }

  addToList(todoItem) {
    this.todoList.push(todoItem);
    this.addTodoList();
    return this.todoList;
  }

  addToTopOfList(todoItem) {
    this.todoList.unshift(todoItem);
    this.addTodoList();
    return this.todoList;
  }

  removeFromListByName(name) {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].task === name) {
        let removed = removeFromListByIndex(i)
        return removed;
      }
    }
  }

  removeFromListAndAddToDone(doneItemIndex) {
    if (!isNaN(doneItemIndex) && doneItemIndex >= 0 && doneItemIndex <= todoList.length - 1) {
      let name = todoList[doneItemIndex]
      doneList.push(removeFromListByName(name))
    } else {
      console.log('Something went wrong')
    }
    return doneList;
  }

  moveToTop(todoItem) {
    let item = removeFromListByIndex(todoItem)
    addToTopOfList(item);
    return todoList;
  }

  moveDown(indexOfItem) {
    if (!isNaN(indexOfItem) && indexOfItem >= 0 && indexOfItem <= todoList.length - 1) {
      let descItem = todoList[indexOfItem];
      let ascItem = todoList[indexOfItem + 1];
      todoList[indexOfItem + 1] = descItem
      todoList[indexOfItem] = ascItem
      return todoList;
    }
    else {
      console.log('Something went wrong')
      return todoList;
    }
  };

  moveUp(indexOfItem) {
    if (!isNaN(indexOfItem) && indexOfItem >= 0 && indexOfItem <= todoList.length - 1) {
      let descItem = todoList[indexOfItem];
      let ascItem = todoList[indexOfItem - 1];
      todoList[indexOfItem - 1] = descItem
      todoList[indexOfItem] = ascItem
      return todoList;
    }
    else {
      console.log('Something went wrong')
      return todoList;
    }
  }
}

/*appendFileSync(
  'message.txt', vilken fil vi vill lägga till text i
  'here is some text\n',text vi vill lägga till, avslutas med \n för att lägga till radbrytning
  
  class Student {

  constructor(name, schoolClass){
    this.name = name
    this.schoolClass = schoolClass
    this.schoolClass.addStudent(this)
  }

  sayHi(){
    return `Hi! I am ${this.name} and I'm in ${this.schoolClass.name} in ${this.schoolClass.city} along with ${this.schoolClass.students.length - 1} others!`
  }
*/