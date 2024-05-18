import React from 'react'

const TodoItem = ({ todo, todos, setTodos }) => {
  const removeGoal = (id) => {
    setTodos(todos.filter((goal) => goal.id !== id));
  };

  const changeGoal = (id) => {
    setTodos(todos.map((goal) =>
      goal.id === id ? { ...goal, complete: !goal.complete } : goal
    ));
  };

    // li css
    const goalStyle = {
      backgroundColor: 'white',
      border: '1px solid rgb(255,157,138)',
      borderRadius: '5px',
      padding: '1rem',
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column', // 세로 정렬
      gap: '10px'
    };

  return (
    <li style={goalStyle}>
      <h3>{todo.title}</h3>
      <span>{todo.content}</span>
      <div>
        <button onClick={() => removeGoal(todo.id)}>삭제하기</button>
        <button onClick={() => changeGoal(todo.id)} className={todo.complete ? 'incomplete-btn': 'complete-btn'}>
          {todo.complete ? "취소" : "완료"}
        </button>
      </div>
    </li>
  )
}

export default TodoItem