const LS_KEY = 'todo-context-v1'

export function loadTodos() {
    try {
        const saved = JSON.parse(localStorage.getItem(LS_KEY) || 'null')

        return Array.isArray(saved) ? saved : null

    } catch {
        return null
    }
}
export function saveTodos(todos) {
    localStorage.setItem(LS_KEY,JSON.stringify(todos))
 }