import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {


  return (
    <div>
      <h2>Working!!!🔥</h2>
      <ul>
        {todos.filter(todo => !todo.complete).map((todo) => (
          <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
      </ul>
      <h2>Done😎</h2>
      <ul>
        {todos.filter(todo => !todo.complete).map((todo) => (
          <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList