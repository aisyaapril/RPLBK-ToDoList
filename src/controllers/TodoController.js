class TodoController {
    constructor(model, sortContext) {
      this.model = model;
      this.sortContext = sortContext;
    }
  
    addTodoItem(item) {
      this.model.addTodo(item);
    }
  
    removeTodoItem(index) {
      this.model.removeTodo(index);
    }
  
    setSortStrategy(strategy) {
      this.sortContext.setStrategy(strategy);
    }
  
    getSortedTodos() {
      return this.sortContext.sortTodos(this.model.getTodos());
    }
  }
  
  export default TodoController;
  