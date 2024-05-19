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
         {/* 완료되지 않은 todo 항목들을 필터링하여 TodoItem 컴포넌트로 렌더링 */}
        {todos.filter(todo => !todo.complete).map((todo) => (
          <TodoItem
            key={todo.id} // 각 항목의 고유 id를 key로 설정하여 효율적인 렌더링
            todo={todo} // 현재 todo 항목을 TodoItem 컴포넌트에 전달
            todos={todos} // 전체 todo 리스트를 TodoItem 컴포넌트에 전달
            setTodos={setTodos} // todo 리스트를 업데이트할 수 있는 함수 전달
          />
        ))}
      </ul>
      <h2>Done😎</h2>
      <ul style={goalsStyle}>
        {/* 완료된 todo 항목들을 필터링하여 TodoItem 컴포넌트로 렌더링 */}
        {todos.filter(todo => todo.complete).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList