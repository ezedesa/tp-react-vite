import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useState } from 'react'

/* 
Componente de Tarea (TaskItem):
Este componente deberá representar individualmente una tarea.
Mostrará el nombre de la tarea y un botón para completarla.
Utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado
cuando esté completada).
 */


//Recibe las props 'tarea' y 'estado' desde el componente padre TaskList
export const TaskItem = ({ id, nombre, completado, actualizarTarea, eliminarTarea }) => {
  const [estado, setEstado] = useState(completado)


  //handleSwitch setea el valor del estado a uno diferente al estado previo y envia esta informacion a la funcion actualizar tarea en TaskList
  const handleSwitch = () => {
    const nuevoEstado = !estado
    setEstado(nuevoEstado)
    actualizarTarea(id, nuevoEstado)
  }

  //handleEliminar envia el id de la tarea a eliminar al TaskList
  const handleEliminar = () => {
    eliminarTarea(id);
  };

  return (
    <>
      <div class="row">
        <div class="col-9">
          <Form className='d-flex justify-content-start'>
            <Form.Check
              type='switch'
              id='custom.switch'
              className='mr-3'
              //Uso de la funcion handleSwitch con el switch, marca la tarea como completada 
              onChange={handleSwitch}
              checked={estado} />
            {/* Si el estado es verdadero, la tarea aparecera tachada */}
            {estado ? <p class="text-decoration-line-through ms-2"> {nombre}</p>
              : <p class="ms-2"> {nombre}</p>}

          </Form>
        </div>
        <div class="col-3 text-end">
          <Button onClick={handleEliminar}><RiDeleteBin5Fill /></Button>
        </div>
      </div>
    </>
  )
}
