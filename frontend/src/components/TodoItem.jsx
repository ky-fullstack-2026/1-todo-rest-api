import React, { useState } from 'react'
import "./TodoItem.css"
import { useTodoStore } from '../contexts/TodoContext'
const TodoItem = ({
  id,
  done,
  content,
  date,
}) => {

  const { onUpdate, onDelete } = useTodoStore()

  const [edit, setEdit] = useState({
    isEdit: false,
    content: content
  })

  const onChangeEdit = (key, value) => {
    setEdit((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleToggle =()=>{
    onUpdate(id, {
      content :edit.isEdit? edit.content:content,
      done :!done
    })
  }

  const handleEdit = () => {
    onChangeEdit("isEdit", true)
  }

  const handleCancel =()=>{
    setEdit({
      isEdit:false,
      content:content
    })
  }

  const handleSave = ()=>{
    onUpdate(id,{
      content:edit.content,
      done:done
    })
    onChangeEdit("isEdit",false)
  }


  return (
    <div className={`TodoItem ${done ? 'done' : ''}`}>
      {edit.isEdit ? (
        <div>
          <input type="checkbox"
            checked={done}
            onChange={handleToggle} />
            <input type="text"  
            className='input-content'
            onChange={(e)=>onChangeEdit("content",e.target.value)}
            value={edit.content}/>
          <div className="date">{new Date(date).toLocaleDateString()}</div>
          <button onClick={handleSave}>저장</button>
          <button onClick={handleCancel}>취소</button>

        </div>
      ) : (
        <div>
          <input type="checkbox"
            checked={done}
            onChange={handleToggle} />
          <div className="content">{content}</div>
          <div className="date">{new Date(date).toLocaleDateString()}</div>
          <button onClick={handleEdit}>수정</button>
          <button onClick={() => onDelete(id)}>삭제</button>
        </div>
      )
      }




    </div >
  )
}

export default TodoItem