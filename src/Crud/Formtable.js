import React from "react";

import { useState, useEffect } from "react";

import axios from "axios";

import Home from "../Home";

const Formtable = () => {
  const [data, setData] = useState();
    const [header, setHeader] = useState([]);
    const [row, setRow] = useState([]);
  let formdata = [];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:4000/view");
    console.log(response.data);
    setData(response.data);

    response.data?.map((x, index) => {
      formdata.push({
        No: index + 1,
        FirstName: <button>{x.firstname}</button> ,
        LastName: x.phone,
        phone:x.phone,
        action: <button className="btn btn-danger">Delete</button>,
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

export default Formtable;
