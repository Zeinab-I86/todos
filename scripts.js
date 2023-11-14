import Todo from "./todo"


const tasks = new Todo("Study", "Learn JavaScript")
console.log(tasks.getTodos())

tasks.addTodo("Shop", "Buy milk and sugar")
tasks.addTodo("Clean", "Do the laundry")

console.log(tasks.getTodoList())

let toDos = tasks.getTodoList()
console.log(tasks)