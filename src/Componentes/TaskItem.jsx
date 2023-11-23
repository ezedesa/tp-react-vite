//Recibe las props 'tarea' y 'estado' desde el componente padre TaskList.
import React from 'react'


//Recibe las props 'tarea' y 'estado' desde el componente padre TaskList
export const TaskItem = ({tarea, estado}) => {

  
  return (
    <>

    {/* En caso que el 'estado' sea verdadero, muestra el texto tachado, de lo contrario muestra el texto normal */}
    {estado ? <p class="text-decoration-line-through"> {tarea} </p>
              :  <p> {tarea} </p>}
    </>
  )
}
