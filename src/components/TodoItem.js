// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ item, onRemove }) => (
  <div className="task-item">
    <span>{item.task} (Priority: {item.priority}, Due: {item.dueDate})</span>
    <button className="remove-task" onClick={onRemove}>Remove</button>
  </div>
);

export default TodoItem;
