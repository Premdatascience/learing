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

// formvalidation
import FormVal from "./FormVal/FormVal";

// login&Register

import { useState } from "react";

import HomePage from "./HomePage";
import DynamicTable from "./learing/TableData";
import Tablemap from "./learing/Tablemap";
import FormDatatable from "./Crud/FormDatatable";
import Formtable from "./Crud/Formtable";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

import ViewFormval from "./FormVal/ViewFormval";
import ViewformDatatable from "./FormVal/ViewformDatatable";
import { ProtectedRoute, PublicdRoute } from "./Auth/ProtectedRoute.js";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PublicdRoute />}>
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
          </Route>
          {/* AUTH registration&login */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />

            {/* formvalidation  */}

            <Route path="/formval" element={<FormVal />} />
            <Route path="/viewformval" element={<ViewFormval />} />
            <Route path="/datatable" element={<ViewformDatatable />} />

            {/* learing */}
            <Route path="tabledata" element={<Tablemap />} />
            {/* <Route path="/DynamicTable" element ={<DynamicTable />}/> */}

            {/* Home */}

            <Route path="/navebar" element={<Home />} />
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
            <Route path="/formdata" element={<FormDatatable />} />
            <Route path="/testformdata" element={<Formtable />} />

            {/*  //Fileupload */}

            <Route path="/fileupload" element={<Fileupload />} />
            <Route path="/addupload" element={<Fileupload />} />
            <Route path="/viewfileupload" element={<ViewFileuploads />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
