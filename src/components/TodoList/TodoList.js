import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos }) => (
  <div>
    {todos.map((t, i) => (
      <TodoItem key={i} todo={t} />
      //<div key={i} data-testid={`${t.id}`}>{t.title}</div>
    ))}
  </div>
);

export default TodoList;