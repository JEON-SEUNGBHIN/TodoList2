import React from 'react'

// 각각의 Todo 항목을 렌더링하는 컴포넌트
const TodoItem = ({ todo, todos, setTodos }) => {
  // 특정 Todo 항목을 삭제하는 함수
  const removeGoal = (id) => {
    // 주어진 id와 일치하지 않는 Todo 항목들만 필터링하여 새로운 배열 생성
    setTodos(todos.filter((goal) => goal.id !== id));
  };

// Todo 항목의 완료 상태를 변경하는 함수
  const changeGoal = (id) => {
  // 주어진 id와 일치하는 Todo 항목의 complete 상태를 토글(변경)
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

    // li btn css
    const buttonContainerStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '10px', // 버튼 사이 간격 설정
      marginTop: '10px'
    };

  return (
    <li style={goalStyle}>
      <h3>{todo.title}</h3>
      <span>{todo.content}</span>
      <div style={buttonContainerStyle}>
        <button onClick={() => removeGoal(todo.id)} className='deletebtn'>삭제하기</button>
        <button onClick={() => changeGoal(todo.id)} className={todo.complete ? 'incomplete-btn': 'complete-btn'}>
          {todo.complete ? "취소" : "완료"}
        </button>
      </div>
    </li>
  )
}

export default TodoItem