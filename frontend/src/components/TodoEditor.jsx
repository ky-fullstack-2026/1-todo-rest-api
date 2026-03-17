import React, { useState, useRef, useEffect } from 'react'
import "./TodoEditor.css"
import { useTodoStore } from '../contexts/TodoContext'
const TodoEditor = () => {

  const { createTodo } = useTodoStore()
  const [content, setContent] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  },[])

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmit = () => {
    
    createTodo(content)
    setContent("")
    inputRef.current?.focus()
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit()
    }
  }
  return (
    <div className='Editor'>
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        type="text"
        placeholder='새로운 Todo...' />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default TodoEditor