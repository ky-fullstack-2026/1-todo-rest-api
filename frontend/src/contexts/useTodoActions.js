import { ACTIONS } from "./actions";
import {
    createTodo,
    updateTodo,
    deleteTodo
} from '../api/todoApi'

export function createTodoActions(dispatch) {

    return {
        onCreate:async(data)=>{
            try {
                const response = await createTodo(data)

                dispatch({
                     type:ACTIONS.CREATE,
                     todo:response.data
                })
                
            } catch (error) {
                console.error("할일 추가 실패",error)      
                console.error("응답 데이터 ",error.response?.data)      
            }
        },
        onUpdate:async(id, data)=>{
            try {
                const response = await updateTodo(id,data)

                dispatch({
                     type:ACTIONS.UPDATE,
                     todo:response.data
                })
                
            } catch (error) {
                console.error("할일 수정 실패",error)      
                console.error("응답 데이터 ",error.response?.data)      
            }
        },
        onDelete:async(id)=>{
            try {

                await deleteTodo(id)

                dispatch({
                     type:ACTIONS.DELETE,
                     id
                })
                
            } catch (error) {
                console.error("할일 삭제 실패",error)      
                console.error("응답 데이터 ",error.response?.data)      
            }
        },

    }

}