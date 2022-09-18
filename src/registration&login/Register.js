import React from 'react';
import { useState } from 'react';
import axios from "axios";

const Register = () => {

    const [user,setUser] = useState({
        name:"",
        email:"",
        password: ""
    })   
    
    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
        ...user,//spread operator 
        [name]:value
        })
        }

//register function 
const registerdata = ()=>{
    const {name,email,password} = user
    if (name && email && password){
     axios.post("http://localhost:6969/Register",user )
     .then(res=>console.log(res))
    }
    else{
        alert("invalid input")
    };
  }

  return (
   <>
   <div className='container mt-5'>
    <div className='row'>
<div className='col-md-6 offset-md-3 mt-5'>
<div className='card'>
    <div className='container'>

   
<form >
<div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" 
    value={user.name} onChange={handleChange}
     placeholder="FullName"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="Email1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
     value={user.email} onChange={handleChange}
      placeholder="Email"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="Password1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  name="password"
     value={user.password} onChange={handleChange} 
        placeholder="password"/>
  </div>

  <button type="submit" class="btn btn-primary"  >Submit</button>
</form>
</div>
</div>
</div>
    </div>

   </div>
   </>
  )
}

export default Register;