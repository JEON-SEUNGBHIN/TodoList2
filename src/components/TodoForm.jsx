import React from 'react'
import uuid from 'react-uuid';

const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState(""); // Todo 제목 입력 상태
  const [content, setContent] = useState(""); // Todo 내용 입력 상태

  const addGoals = (e) => {
    //기본값 제출 방지
    e.preventDefault();
    if (!title || !content) {
      alert("제목과 내용 모두 입력하세요!!!");
      return;
    }

    const todoId = {
      id: uuid(), // uuid를 사용하여 고유한 id 생성
      title,
      content,
      complete: false
    };
    
    setTodos([...todos, todoId]);

    //Todo 작성 후 공백으로 변경
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={addGoals}>
      <h3>제목</h3>
      <input
        type='text'
        placeholder='제목을 입력하세요'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h3>내용</h3>
      <input
        type='text'
        placeholder='내용을 입력하세요'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type='submit'>추가하기</button>
    </form>
  )
}

export default TodoForm