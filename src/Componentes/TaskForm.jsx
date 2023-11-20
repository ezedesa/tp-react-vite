import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../src/App.css';

function TaskForm() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" placeholder='Introduce una tarea'>Task</InputGroup.Text>
        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        <input type="submit" value="Add task" className='btn'/>
      </InputGroup>
    </>
  );
}
export default TaskForm;