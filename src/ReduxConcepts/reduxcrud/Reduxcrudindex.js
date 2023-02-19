import React from 'react';
import Addtask from './Addtask';
import Tablelist from './Tablelist';
import { useSelector } from 'react-redux';
const Reduxcrudindex = () => {
  const{taskslist}=useSelector((state)=>state.tasks)
  
  return (
    <>
<div className='container'>
<h1>project Managent</h1>
 <p>{`current task ${taskslist.length}`}</p>
 <Addtask />
 <Tablelist />
</div>
    
    </>
  )
}

export default Reduxcrudindex;