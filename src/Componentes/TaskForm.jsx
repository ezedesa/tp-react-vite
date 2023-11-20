import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function TaskForm() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Task
        </InputGroup.Text>
        <Form.Control
          aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
      </InputGroup>
    </>
  );
}
export default TaskForm;