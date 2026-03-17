import "./TodoList.css"
import TodoItem from './TodoItem'
import { useState, useMemo } from "react"
import { useTodoStore } from "../contexts/TodoContext"
const TodoList = () => {

    const { todos } = useTodoStore()
    const [search, setSearch] = useState('')



    const filteredTodos = useMemo(() => {
        if (!search.trim()) return todos
        const q = search.toLowerCase()

        return todos.filter((t)=>t.content.toLowerCase().includes(q))


    }, [todos,search])


    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='TodoList'>
            <h4>Todo List 🌱</h4>
            <input
                type="text"
                value={search}
                onChange={onChangeSearch}
                placeholder='검색어를 입력하세요' />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => (


                    <TodoItem key={todo.id} {...todo} />
                ))}
            </div>
        </div>
    )
}

export default TodoList