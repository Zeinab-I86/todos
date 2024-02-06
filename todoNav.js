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
  
  addTodoList() {
    const data = JSON.stringify({ todoList: this.todoList, doneList: this.doneList }, null, 2);
    const list = 'todo.txt';
    try {
      appendFileSync(list, `\n${data}`);
      console.log('TODO-list saved in ', list);
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
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].task === name) {
        let removed = this.todoList.splice(i, 1)[0];
        return removed;
      }
    }
  }

  removeFromListAndAddToDone(doneItemIndex) {
    if (!isNaN(doneItemIndex) && doneItemIndex >= 0 && doneItemIndex <= this.todoList.length - 1) {
      let name = this.todoList[doneItemIndex];
      this.doneList.push(this.removeFromListByName(name).task);
    } else {
      console.log('Something went wrong')
    }
    return this.doneList;
  }

  moveToTop(todoItem) {
    let item = this.removeFromListByName(todoItem)
    this.addToTopOfList(item);
    return this.todoList;
  }

  moveDown(indexOfItem) {
    if (!isNaN(indexOfItem) && indexOfItem >= 0 && indexOfItem <= this.todoList.length - 1) {
      let descItem = this.todoList[indexOfItem];
      let ascItem = this.todoList[indexOfItem + 1];
      this.todoList[indexOfItem + 1] = descItem;
      this.todoList[indexOfItem] = ascItem;
      return this.todoList;
    }
    else {
      console.log('Something went wrong');
      return this.todoList;
    }
  };

  moveUp(indexOfItem) {
    if (!isNaN(indexOfItem) && indexOfItem >= 0 && indexOfItem <= this.todoList.length - 1) {
      let descItem = this.todoList[indexOfItem];
      let ascItem = this.todoList[indexOfItem - 1];
      this.todoList[indexOfItem - 1] = descItem;
      this.todoList[indexOfItem] = ascItem;
      return this.todoList;
    }
    else {
      console.log('Something went wrong');
      return this.todoList;
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