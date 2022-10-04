import React from "react";

import { useState, useEffect } from "react";

import axios from "axios";

import Home from "../Home";

const ViewformDatatable = () => {
  const [data, setData] = useState();
    const [header, setHeader] = useState([]);
    const [row, setRow] = useState([]);
  let formdata = [];

  useEffect(() => {
    getData();
  }, []);
  const deleteData = async (id) => {
    await axios.delete(`http://localhost:4000/formdelete/${id}`);
   
    
  };
  const getData = async () => {
    const response = await axios.get("http://localhost:4000/formview");
    // console.log(response.data);
    setData(response.data);

    response.data?.map((x, index) => {
      formdata.push({
        No: index + 1,
     
        LastName: x.email,
      
        action: <button  onClick={() => deleteData(x._id).then(getData())}  className="btn btn-danger" >Delete</button>,
      });

      // console.log(formdata);
    });

    const column = Object.keys(formdata[0]);

    console.log(column);


setHeader(
       column.map((data1) => {
        return <th key={data1}>{data1}</th>;
      }));
    // };

    // get table row data

setRow(
   formdata.map((data1) => {
    return (
      <tr>
        {column.map((v) => {
          return <td>{data1[v]}</td>;
        })}
      </tr>
    );
  })

);
    

  
  };


  return (
    <>
     <Home />
      <div className="container">
        <table class="table table-bordered mt-3" style={{ width: "100%" }}>
          <thead>{header}  </thead>
          <tbody>{row}</tbody>
        </table>
      </div>
    </>
  );
};

export default ViewformDatatable;
