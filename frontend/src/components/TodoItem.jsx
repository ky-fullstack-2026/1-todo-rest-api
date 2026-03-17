import React from 'react'
import "./TodoItem.css"
import { useTodoStore } from '../contexts/TodoContext'
const TodoItem = ({
  id,
  isDone,
  content,
  date,
}) => {

  const {toggleTodo, deleteTodo}= useTodoStore()


  return (
    <div className={`TodoItem ${isDone ? 'done' : ''}`}>
      <input type="checkbox" 
      checked={isDone} 
      onChange={()=>toggleTodo(id)} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={()=>deleteTodo(id)}>삭제</button>
    </div>
  )
}

export default TodoItem