import React from 'react';
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { XLSX } from "xlsx";
import { CSVLink } from "react-csv";
import $ from "jquery";
import Home from "../Home";

const ViewFormval = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      const response = await axios.get("http://localhost:4000/formview");
      setData(response.data);
      console.log(getData);
      console.log(response.data);
    };
  
    const deleteData = async (id) => {
      await axios.delete(`http://localhost:4000/formdelete/${id}`);
  
    
  
      getData();
    };
  
   
  
  
  
    return (
      <>
      <Home />
        <div className="container-fluid mt-5">
          <div className="row">
            <div class="col-md-3 offset-md-3">
          
            </div>
            <div class="col-md-3 offset-md-3 mt-3">
              <CSVLink data={data} type="button" className="btn btn-warning">
                export
              </CSVLink>
            </div>
          </div>
          <div className="mt-5"></div>
          <div className=" md mt-5">
            <div className="">
              <div className="container-fluide mb-3">
                <div className="row">
                  <div className="col ">
                    <Link to="/formval" type="button" className="btn btn-success">
                      Add New
                    </Link>
                  </div>
                </div>
              </div>
              <table
                class="table table-bordered mt-3"
                 style={{ width: "100%" }}
                id="table_id"
                // ref={tableRef}
              >
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">email</th>
                    <th scope="col">password</th>
                    <th scope="col">address</th>
                    <th scope="col">address2</th>
                    <th scope="col">City</th>
                    <th scope="col">Zip</th>
          
                  </tr>
                </thead>
                <tbody>
                  {data.map((formval, index) => (
                    <tr key={formval.id}>
                      <td>{index + 1}</td>
                      <td>{formval.email}</td>
                      <td>{formval.password}</td>
                      <td>{formval.address}</td>
                      <td>{formval.address2}</td>
                      <td>{formval.City}</td>
                      <td>{formval.Zip}</td>
                  
              
                      <td>
                    
                        <button onClick={() => deleteData(formval._id)} className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };
export default ViewFormval;