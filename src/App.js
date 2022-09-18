import React from "react";
import "./App.css";
// import $ from "jquery";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
// import {Switch} from "react-router-dom";
import Form from "./Crud/Form";
import Formtest from "./Formtest";
import Employee from "./learing/Employee";
import HandleclickCC from "./learing/HandleclickCC";
import BasicUsestate from "./learing/BasicUsestate";
import BasicuseEffect from "./learing/BasicuseEffect";
import Formview from "./Crud/Formview";
import Formedit from "./Crud/Formedit";
import Fileupload from "./fileupload/Fileupload";
import ViewFileuploads from "./fileupload/ViewFileupload";
import Home from "./Home";


// login&Register
import Register from "./registration&login/Register";
import Login from "./registration&login/Login";
import { useState } from "react";

import loginregRoute from "./registration&login/loginregRoute";
import HomePage from "./HomePage";

function App() {
  // login&Register
  const [user, setLoginUser] = useState({});

  return (
    <Router>
      <Routes>
        
        {/* registration&login */}
{/* 
        <Switch>
          <Route exact path="/">
            {user && user._id ? <Home /> : <Login />}
            <Home />
          </Route>
          <Route path="/register">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch> */}

        {/* Home */}
        <Route path="/homepage" element={<HomePage />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/viewform" element={<Formview />} />
        <Route path="/viewfileupload" element={<ViewFileuploads />} />

        {/* basic */}
        <Route path="/testform" element={<Formtest />} />
        <Route path="/basic" element={<Employee />} />
        <Route path="/handelclick" element={<HandleclickCC />} />
        <Route path="/usestate" element={<BasicUsestate />} />
        <Route path="/useeffect" element={<BasicuseEffect />} />

        {/* crud */}

        <Route path="/form" element={<Form />} />
        <Route path="/viewform" element={<Formview />} />
        <Route path="/add" element={<Form />} />
        <Route path="/editform/:id" element={<Formedit />} />

        {/*  //Fileupload */}

        <Route path="/fileupload" element={<Fileupload />} />
        <Route path="/addupload" element={<Fileupload />} />
        <Route path="/viewfileupload" element={<ViewFileuploads />} />

        {/* 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
