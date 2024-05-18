import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; 
import TodoContainer from './components/TodoContainer';
import './App.css'

function App() {
  // Todo 기본값 세팅
  const [todos, setTodos] = useState([
    { id: uuidv4, title: "리액트 공부하기", content: "리액트 기초 문법 공부하기", complete: false },
    { id: uuidv4, title: "자바스크립트 공부하기", content: "자바스크립트 문법 공부하기", complete: true }
  ])

  return (
    <>
      <header>
        <h1>Todo List</h1>
        <img src='src/img/flower.png' alt='flower'/>
      </header>
      <TodoContainer todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
