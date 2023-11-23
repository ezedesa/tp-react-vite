import { useState } from 'react'
/*import reactLogo from './assets/react.svg'*/
import './App.css'
import TaskForm from './Componentes/TaskForm'
import TaskList from './Componentes/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskForm />
      {/* como hacer push */}
      <TaskList />
    </>
  )
}
export default App