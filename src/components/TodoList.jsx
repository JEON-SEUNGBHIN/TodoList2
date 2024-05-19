import React from 'react'
import TodoItem from './TodoItem';

// ul css
const goalsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // 자동으로 그리드 컬럼 생성, 최소 너비는 200px, 공간이 허락하는 한 최대로 늘어남
  gap: '10px',
  padding: '1rem'
};


const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <h2>Working!!!🔥</h2>
      <ul style={goalsStyle}>
        {todos.filter(todo => !todo.complete).map((todo) => (
          <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
      </ul>
      <h2>Done😎</h2>
      <ul style={goalsStyle}>
        {todos.filter(todo => todo.complete).map((todo) => (
          <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList