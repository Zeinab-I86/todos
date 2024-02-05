import choices from './choices.js';

const todoMenu = () => {
  console.log(`
           My TODOS!
    What do you want to do?
Enter the number of your choice!

    1. Show Todo List 
    2. Show Done List 
    3. Add Todo 
    4. Add Todo To Top 
    5. Remove Todo By Name 
    6. Move Todo To Done List 
    7. Move Todo Down 
    8. Move Todo Up 
    0. Exit
`);
};
const runChoice = (choice) => {
  switch (choice) {
    case '1':
      choices.showTodoList();
      break;
    case '2':
      choices.showDoneList();
      break;
    case '3':
      choices.addTodo();
      break;
    case '4':
      choices.addToTop();
      break;
    case '5':
      choices.removeByName();
      break;
    case '6':
      choices.moveItemToDone();
      break;
    case '7':
      choices.moveDown();
      break;
    case '8':
      choices.moveUp();
      break;
    case '0':
      process.exit();
      break;
    default:
      console.log('Please enter a valid number!');

      const main = () => { }
      while (true) {
        todoMenu();
      }
  }
}

/*("\nStart meny\n"
"\n1. Lista av products"
"\n2. Logga in"     
match answer.lower():
case "1":
print("Lista av products")
case "2":
run = self.login_menu()
case "q":
self.close_program()
run = False
    print("Programet avslutas!")*/
