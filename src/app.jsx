import TodoList from './components/TodoList'
import { createAppState } from './components/createAppState'
import './app.css'
import { createContext } from 'preact'

const state = createAppState()

export function App() {

  return (
    <>    
      <TodoList state={state} />
    </>
  )
}
