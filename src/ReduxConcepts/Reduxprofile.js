import React from 'react';
import { useSelector } from 'react-redux';
const Reduxprofile = () => {
    const user =useSelector(state=>state.user.value)

    console.log(user,"data");
  return (

<>
<div>Reduxprofile</div>
<h1>profile info</h1>
<h2>name:{user.name}</h2>
<h2>age:{user.age}</h2>
<h2>email:{user.email}</h2>


</>
    )
}

export default Reduxprofile;