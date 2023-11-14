class Todo {
  constructor(task, description) {
    this.task = task
    this.description = description
  }

  todoList = []
  
  getTodos() {
    return {task: this.task, description: this.description }
  }

  addTodo(newTask) {
    this.todoList.push(newTask)
  }


  getTodoList() {
    return this.todoList
  }
}

const tasks = new Todo("Study", "Learn JavaScript")
console.log(tasks.getTodos())

tasks.addTodo("Shop", "Buy milk and sugar")
tasks.addTodo("Clean", "Do the laundry")

console.log(tasks.getTodoList())
