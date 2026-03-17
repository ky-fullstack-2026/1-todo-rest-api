import { useRef, createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS } from "./actions";

import { todoReducer } from "./reducer";

import { createTodoActions } from "./useTodoActions";

import { getTodos } from "../api/todoApi";
const TodoContext = createContext(null)

export function TodoProvider({ children }) {

    const [todos, dispatch] = useReducer(todoReducer, [])

    // const idRef = useRef(3)

    useEffect(()=>{

        const fetchTodos= async()=>{
            try {
                const response = await getTodos()

                dispatch({
                    type:ACTIONS.INIT,
                    todos:response.data
                })
            } catch (error) {
                console.error("할일 목록 조회 실패",error)
            }
        }
  
        fetchTodos()

    },[])



    const actions = createTodoActions(dispatch)

    return (
        <TodoContext.Provider value={{todos,...actions}}>
            {children}
        </TodoContext.Provider>
    )

}

export function useTodoStore(){
    const v = useContext(TodoContext)

    if(!v) throw new Error('useTodoStore must be used within TodoProvider')

    return v

}

