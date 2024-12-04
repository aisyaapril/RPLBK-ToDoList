class TodoModel {
    constructor() {
      this.todos = [];
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    notifyObservers() {
      this.observers.forEach(observer => observer());
    }
  
    addTodo(item) {
      this.todos.push(item);
      this.notifyObservers();
    }
  
    removeTodo(index) {
      this.todos.splice(index, 1);
      this.notifyObservers();
    }
  
    getTodos() {
      return this.todos;
    }
  }
  
  export default TodoModel;
  