import {useState} from 'react';

export function TaskItem (props) {
    const {tarea, onActualizarTarea, onBorrarTarea}=props
    const [editando,setEditando]=useState(false)
    const [estCompletada, setEstaCompletada]=useState(false)

    function ModoEdicionActivado(){
        const [valor, setValor]= useState(tarea.tarea)

        function handleChange(e) {
            const text = e.target.value
            setValor(text)
        }
        function handleClick(e){
            e.preventDefault()

            onActualizarTarea(
                {
                    id: tarea.id, tarea:valor, completado:false
                }
            )
            setEditando(false)
        }
        return(
            <> <div>

                <input type="text"  onChange={handleChange} value={valor}/>
                <button className='btn' onClick={handleClick}>Guardar</button>   
                <button className='btn' onClick={()=> onBorrarTarea(tarea.id)}>Borrar</button>
                
                </div>
            </>
        )
    }
    function ModoEdicionDesactivado(){
        return(
        <>
        <div>
            <span className={ estCompletada? "todoTarea spanSubrayada" : "todoTarea"} onClick={()=> setEstaCompletada(!estCompletada)}>{tarea.tarea}</span>
            <button className="btn" onClick={() => setEditando(true)}>Editar</button>
            <button className="btn" onClick={()=> onBorrarTarea(tarea.id)}>Borrar</button>
        </div>
        </>
        )
    }
    return(
        <>
        <div className="contenedorTarea" id={tarea.id}>
           { editando ? <ModoEdicionActivado />:<ModoEdicionDesactivado />}
        </div>
        </>
    );
}