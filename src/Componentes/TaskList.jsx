import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Fill } from "react-icons/ri";
import '../../src/App.css';
import { TaskItem } from './TaskItem';
import { useState } from 'react';


function TaskList() {

  //useSate para controlar el cambio del valor del switch preseteado en falso
  const [estado, setEstado] = useState(false)
  //handleSwitch setea el valor del estado a uno diferente al estado previo
  const handleSwitch = () => {
    setEstado (previousState => !previousState); 
  }

    return (
        <>

            <ListGroup variant="flush" className='mt-5'>
                <ListGroup.Item >
                    <Form className='d-flex justify-content-between align-items-center'>
                        <Form.Check 
                        type='switch' 
                        id='custom.switch' 
                        className='mr-3' 
                        //Uso de la funcion handleSwitch el mover el switch
                        onChange={handleSwitch}
                        value={estado} />
                    
                    {/* Pasa las props 'tarea' y el valor del estado al componente TaskItem y lo muestra en la lista */}
                    <TaskItem tarea= "ejemplo de tarea" estado= {estado}/>
                    <Button>
                    <RiDeleteBin5Fill />

                    </Button>
                    </Form>   
                </ListGroup.Item>

            </ListGroup>
        </>
    );
}
export default TaskList;