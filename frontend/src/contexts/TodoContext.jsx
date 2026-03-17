import { useRef, createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS } from "./actions";
import { mockData } from "./mockData";
import { todoReducer } from "./reducer";
import { loadTodos, saveTodos } from "./storage";
import { createTodoActions } from "./useTodoActions";


const TodoContext = createContext(null)

export function TodoProvider({ children }) {

    const [todos, dispatch] = useReducer(todoReducer, [])

    const idRef = useRef(3)

    useEffect(()=>{
        const saved = loadTodos()
        const initial = saved?? mockData

        dispatch({type:ACTIONS.INIT, todos:initial})


        const maxId = initial.reduce((max,t)=>Math.max(max,t.id),-1)

        idRef.current=maxId+1

    },[])

    useEffect(()=>{
        saveTodos(todos)
    },[todos])

    const actions = createTodoActions(dispatch,idRef)

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

