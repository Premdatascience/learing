import React from "react";
import "./App.css";
// import $ from "jquery";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
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

        <Route path="/fileupload" element ={<Fileupload />}/>
        <Route path="/addupload" element ={<Fileupload />}/> 
        <Route path="/viewfileupload" element ={<ViewFileuploads />}/>
        
      </Routes>
    </Router>
  );
}

export default App;
