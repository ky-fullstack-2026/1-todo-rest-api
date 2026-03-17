import { ACTIONS } from "./actions";

export function createTodoActions(dispatch, idRef) {

    return {

        createTodo: (content) => {

            const text = (content ?? "").trim()
            if (!text) return

            const todo = {
                id: idRef.current++,
                isDone: false,
                content: text,
                date: new Date().getTime()
            }

            dispatch({ type: ACTIONS.CREATE, todo })
        },
        toggleTodo: (id) => dispatch({ type: ACTIONS.TOGGLE, id }),
        deleteTodo: (id) => dispatch({ type: ACTIONS.DELETE, id })
    }

}