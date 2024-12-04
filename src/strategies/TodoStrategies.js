  // Sort by priority
  class PrioritySortStrategy {
    sort(todos) {
      return todos.sort((a, b) => a.priority - b.priority);
    }
  }
  
  // Sort by due date
  class DateSortStrategy {
    sort(todos) {
      return todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
  }
  
  // Context to hold the current sorting strategy
  class TodoSortContext {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    sortTodos(todos) {
      return this.strategy.sort(todos);
    }
  }
  
  export { AlphabeticalSortStrategy, PrioritySortStrategy, DateSortStrategy, TodoSortContext };
  