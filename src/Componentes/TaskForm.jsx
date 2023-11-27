import {useState} from 'react'
import { TaskItem } from './TaskItem';
import '../../src/App.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function TaskForm() {

  const [tarea, setTarea]=useState('')
  const [listadoTareas, setListadoTareas] = useState([]) /*almacenar tarea*/ 

  function handleSubmit(e){
    e.preventDefault()
    if (tarea===""){
      alert("Debe ingresar una tarea antes de agregar")
      return
    }
    const nuevaTarea={
      id: Date.now(),
      tarea:tarea,
      completado: false
    }
    const temp=[nuevaTarea, ...listadoTareas]
    setListadoTareas(temp)
    setTarea('') /*se borra el input al agregar tarea*/
    console.log(listadoTareas)
  }
  function handleChange(e){
    setTarea(e.target.value)
    console.log(tarea)
  }
  function onActualizarTarea(objEditarTarea){
    const {id,tarea}=objEditarTarea
    const temp=[...listadoTareas]
    const elemento=temp.find(item =>item.id === id)
    elemento.tarea=tarea

    setListadoTareas(tarea)
  }
    function onBorrarTarea(id){
      const temp=listadoTareas.filter(item=> item.id != id)
      setListadoTareas(temp)
    }
  return (
    <>
      <h3>Lista de tareas</h3>
        

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="ingresa una tarea" onChange={handleChange} value={tarea} />
            <input type="submit" value="Agregar" onClick={handleSubmit} className='btn'/>
        </form>
          {
            listadoTareas.map(tarea => (
              <TaskItem key={tarea.id} id={tarea.id} tarea={tarea}
              onActualizarTarea={onActualizarTarea}
              onBorrarTarea={onBorrarTarea}/>
            ))
          }
    </>
  );
}
export default TaskForm;