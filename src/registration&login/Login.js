import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = ({setLoginUser}) => {

    const navigate = useNavigate()
    const [user,setUser] = useState({
        name:"",
        password: ""
    })

    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }

    const login =()=>{
        axios.post("http://localhost:6969/Login",user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.user)
    navigate.push("/")})
    }

  return (
   <>
   <div className='container mt-5'>
    <div className='row'>
<div className='col-md-6 offset-md-3 mt-5'>
<div className='card'>
    <div className='container'>

   
<form   autoComplete="off">
<div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email}  onChange={handleChange} placeholder="Your email"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
 
  <div class="mb-3">
    <label for="Password1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  name="password"
     value={user.password} onChange={handleChange} 
        placeholder="password"/>
  </div>

  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
</div>
</div>
</div>
    </div>

   </div>
   </>
  )
}

export default Login;