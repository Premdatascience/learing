import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "./Updatetask"
import { useSelector } from 'react-redux';
import { setSelectedTask,removeFromList  } from "../Slice/TaskSlice";
import { useDispatch } from "react-redux";



const Tablelist = () => {
  const dispatch=useDispatch()

  const{taskslist}=useSelector((state)=>state.tasks)
  
  const [modalShow, setModalShow] = React.useState(false);

// console.log(taskslist,"taskslist");
    const updatetask=(taskdata)=>{
      setModalShow(true)
      dispatch(setSelectedTask(taskdata))
        console.log("update");
    }
    const deltask =(taskdata)=>{
      dispatch(removeFromList(taskdata))
        console.log("del");
    }
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>description</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {taskslist&&taskslist.map((taskdata,index)=>{
              return(
                <tr key={taskdata.id}>
                <td>{index+1}</td>
                <td>{taskdata.title}</td>
                <td>{taskdata.description}</td>
                <td> <Button variant="primary" onClick={()=>updatetask(taskdata)}>update</Button> 
                <Button variant="primary"onClick={()=>deltask(taskdata)}>del</Button></td>
              </tr>

              )
            })}
       
     
          </tbody>
        </Table>
        
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
      );
}

export default Tablelist