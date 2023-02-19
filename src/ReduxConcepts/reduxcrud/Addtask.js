import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTasktoList  } from "../Slice/TaskSlice";
import { useDispatch } from "react-redux";
const Addtask = () => {

  const dispatch=useDispatch()

    const [title,setTitle]=useState();
    const [description,setDescription]=useState();

    const addtask=(e)=>{
      e.preventDefault()
      dispatch(addTasktoList({title,description}))
      setTitle("")
      setTitle('')

    // console.log({title,description},"test");

    }
    // console.log(title,description,"test");

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>task title</Form.Label>
          <Form.Control type="text" placeholder="enter task" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>task discription</Form.Label>
          <Form.Control type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="enter task discriptions" />
        </Form.Group>
    
        <Button variant="primary" type="submit" onClick={(e)=>addtask(e)}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Addtask;
