import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Fill } from "react-icons/ri";
import '../../src/App.css';


function TaskList() {
    return (
        <>

            <ListGroup variant="flush" className='mt-5'>
                <ListGroup.Item >
                    <Form className='d-flex justify-content-between align-items-center'>
                        <Form.Check type='switch' id='custom.switch' className='mr-3'/>
                    Cras justo odio 
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