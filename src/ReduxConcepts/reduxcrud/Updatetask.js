import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { updateTask  } from "../Slice/TaskSlice";
import { useDispatch } from "react-redux";

const MyVerticallyCenteredModal = (props) => {
  const dispatch=useDispatch()
  
  const { selectedTask } = useSelector((state) => state.tasks);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [id, setId] = useState(0);

  const UpdateTask = (e) => {
    dispatch(updateTask({id,title,description}))
    // console.log({ title, description }, "test");
  };
  useEffect(() => {

    if(Object.keys(selectedTask).length!==0){
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setId(selectedTask.id);
    }
    
  }, [selectedTask]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>task title</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>task discription</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="enter task discriptions"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => UpdateTask(e)}
            >
              Submit
            </Button>
          </Form>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
