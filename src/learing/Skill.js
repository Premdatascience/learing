import React from 'react';
import Fulldetails from './Fulldetails';

const Skill = (props) => {
  return (
    <>
    <h1 style={{color:'red'}}>my skill :{props.empskill}</h1>
    |<Fulldetails location="kovi"></Fulldetails>
    </>
 
  );
}

export default Skill;