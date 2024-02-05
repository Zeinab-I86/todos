import { appendFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { readFileSync } from 'node:fs';



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
  /*appendFileSync(
  'message.txt', vilken fil vi vill lägga till text i
  'here is some text\n',text vi vill lägga till, avslutas med \n för att lägga till radbrytning*/
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

  //3. Lägg till en sak att göra överst i listan med unshift
  addToTopOfList(todoItem) {
    todoList.unshift(todoItem);
    return todoList;
  }


  //7. Ta bort en sak baserad på dess namn
  removeFromListByName(name) {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].task === name) {
        let removed = removeFromListByIndex(i)
        return removed;
      }
    }
  }


  //8. Ta bort en sak och lägg till den i ”har gjort”-lista
  removeFromListAndAddToDone(doneItemIndex) {
    if (!isNaN(doneItemIndex) && doneItemIndex >= 0 && doneItemIndex <= todoList.length - 1) {
      let name = todoList[doneItemIndex]
      doneList.push(removeFromListByName(name))
    } else {
      console.log('Something went wrong')
    }
    return doneList;
  }


  //9. Flytta en sak till toppen av listan
  moveToTop(todoItem) {
    let item = removeFromListByIndex(todoItem)
    addToTopOfList(item);
    return todoList;
  }

  //11. Flytta en sak ett steg ner i listan
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


  //12. Flytta en sak ett steg upp i listan
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
