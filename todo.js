const todoList = [];
const doneList = [];

function addToList(todoItem) {
  todoList.push(todoItem)
  return todoList;
}


//3. Lägg till en sak att göra överst i listan med unshift
function addToTopOfList(todoItem) {
  todoList.unshift(todoItem);
  return todoList;
}



//7. Ta bort en sak baserad på dess namn
function removeFromListByName(name) {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].task === name) {
      let removed = removeFromListByIndex(i)
      return removed;
    }
  }
}


//8. Ta bort en sak och lägg till den i ”har gjort”-lista
function removeFromListAndAddToDone(doneItemIndex) {
  if (!isNaN(doneItemIndex) && doneItemIndex >= 0 && doneItemIndex <= todoList.length - 1) {
    let name = todoList[doneItemIndex]
    doneList.push(removeFromListByName(name))
  } else {
    console.log('Something went wrong')
  }
  return doneList;
}


//9. Flytta en sak till toppen av listan
function moveToTop(todoItem) {
  let item = removeFromListByIndex(todoItem)
  addToTopOfList(item);
  return todoList;
}




//11. Flytta en sak ett steg ner i listan
function moveDown(indexOfItem) {
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
function moveUp(indexOfItem) {
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
;