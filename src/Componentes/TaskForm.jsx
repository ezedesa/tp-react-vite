import { useState } from 'react'
import '../../src/App.css'

/* 
Componente de Formulario (TaskForm):
Este componente contendrá un formulario para agregar nuevas tareas.
Utilizará el estado local para gestionar la entrada del usuario y enviará la nueva tarea a
la lista principal.

- Eventos en Componente de Formulario (TaskForm):
Implementar eventos para gestionar la entrada del usuario y agregar nuevas tareas a
la lista.
*/

function TaskForm({ agregarTarea }) {

  const [tarea, setTarea] = useState('')

  const onInputChange = (e) => {
    setTarea(e.target.value)
  }

  const onSubmit = (e) => {

    if (tarea === "") {
      alert("Debe ingresar una tarea antes de agregar")
      return
    }

    //envio de la nueva tarea al componente principal
    agregarTarea(tarea)

    /*se borra el input al agregar tarea*/
    e.preventDefault()
    setTarea('')
  }


  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="ingresa una tarea" onChange={onInputChange} value={tarea} />
        <input type="submit" value="Agregar" className='btn' />
      </form>
    </>
  );
}
export default TaskForm;
