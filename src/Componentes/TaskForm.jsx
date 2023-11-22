import {useState} from 'react'

function TaskForm (){
    const [tarea,setTarea]=useState('');

    function handleClick() {
        console.log('Se capturó el evento onClick y se guardó el valor ingresado en el input, la tarea es:', tarea);
    }
    function handleDelete() {
        setTarea('');
        console.log('Se setearon todos los campos mediante el evento onClick y la función handleDelete')
    }
    function handleEdit(){
        pass
    }
    return(
        <>
            <div>
                Tarea<input type="text" value={tarea} onChange={ (e) => setTarea(e.target.value) } placeholder='Escriba una tarea'/>
                <button onClick={handleClick} className='btn'>Guardar</button>
                <button onClick={handleEdit} className='btn'>Editar</button>
                <button type='reset' onClick={handleDelete} className='btn'>Eliminar</button>
            </div>
        </>
    );
}
export default TaskForm;