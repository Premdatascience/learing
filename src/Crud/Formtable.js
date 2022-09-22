import React from 'react';

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { XLSX } from "xlsx";
import { CSVLink } from "react-csv";
import $ from "jquery";
import Home from "../Home";

const Formtable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        
      getData();
    }, []);
  
    const getData = async () => {
      const response = await axios.get("http://localhost:4000/view");
      console.log(response.data);
      setData(response.data);
      console.log(data);
    };
  
    const deleteData = async (id) => {
      await axios.delete(`http://localhost:4000/delete/${id}`);
      //  await axios.delete("http://localhost:4000/delete/:id");
      getData();
    };

    console.log(data);
    
const formdata = [];
data.map((x, k) => {
    return formdata =[{"No":x.firstname,"First Name":x.lastname,"Last Name":x.username}]
 
})

console.log(formdata);

    // get table column
    const column = Object.keys(formdata[0]);
    const ThData = () => {
  
      // get table heading data
  
      return column.map((data1) => {
        return <th key={data1}>{data1}</th>
  
      })
    }
  
    // get table row data
    const tdData = () => {
  
      return data.map((data1) => {
        return (
          <tr>
            {
              column.map((v) => {
                return <td>{data1[v]}</td>
              })
            }
            <td>
  
              <button onClick={() => deleteData(tdData._id)} className="btn btn-danger">
                Delete
              </button>
  
  
            </td>
  
          </tr>
        )
      })
    }
  


  return (
   <>
   <div className='container'>
   <table class="table table-bordered mt-3" style={{ width: "100%" }}>
              <thead>
                {ThData()}   <th scope="col"> Action </th>

              </thead>
              <tbody>
                {tdData()}

              </tbody>
            </table>
   </div>
   </>
  )
}

export default Formtable;