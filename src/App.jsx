import { useState } from 'react'
/*import reactLogo from './assets/react.svg'*/
import './App.css'
import TaskForm from './Componentes/TaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskForm />
    </>
  )
}
export default App