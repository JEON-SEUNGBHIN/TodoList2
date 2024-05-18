import { useState } from 'react'
import './App.css'

function App() {
  // Todo 기본값 세팅
  const [todos, setTodos] = useState([
    { id: 0, title: "리액트 공부하기", content: "리액트 기초 문법 공부하기", complete: false },
    { id: 1, title: "자바스크립트 공부하기", content: "자바스크립트 문법 공부하기", complete: true }
  ])

  return (
    <>
        
    </>
  )
}

export default App
