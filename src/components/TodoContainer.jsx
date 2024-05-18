import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoContainer = ({todos, setTodos}) => {
  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default TodoContainer