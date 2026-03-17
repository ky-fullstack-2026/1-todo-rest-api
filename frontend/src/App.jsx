
import './App.css'
import TodoEditor from './components/TodoEditor'
import Header from './components/Header'
import TodoList from './components/TodoList'


function App() {
 
  return (
    <div className='App'>
      <Header />
      <TodoEditor  />
      <TodoList />
    </div>
  )
}

export default App
