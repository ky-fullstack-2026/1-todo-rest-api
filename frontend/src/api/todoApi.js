import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export const getTodos = () => api.get("/todos")
export const createTodo = (data) => api.post("/todos", data)
export const updateTodo = (id, data) => api.patch(`/todos/${id}`, data)
export const deleteTodo = (id) => api.delete(`/todos/${id}`)
