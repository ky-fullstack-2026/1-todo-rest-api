import { ACTIONS } from "./actions";

export function todoReducer(state, action) {

    switch (action.type) {
        case ACTIONS.INIT:
            return action.todos ?? []

        case ACTIONS.CREATE:
            return [action.todo, ...state]

        case ACTIONS.TOGGLE:
            return state.map((t) =>
                t.id === action.id ? { ...t, isDone: !t.isDone } : t
            )

        case ACTIONS.DELETE:
            return state.filter((t)=>t.id !==action.id)

        default:
            return state
    }


}