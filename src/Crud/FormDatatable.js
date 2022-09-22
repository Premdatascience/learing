import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { XLSX } from "xlsx";
import { CSVLink } from "react-csv";
import $ from "jquery";
import Home from "../Home";
// import FormDatata from "./FormData";

const FormDatatable = (props) => {

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

  // get table column
  const column = Object.keys(data[0]);
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
                  <Link to="/add" type="button" className="btn btn-success">
                    Add New
                  </Link>
                </div>
              </div>
            </div>
            <table class="table table-bordered mt-3" style={{ width: "100%" }}>
              <thead>
                {ThData()}   <th scope="col"> Action </th>

              </thead>
              <tbody>
                {tdData()}

              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>
  );
};

export default FormDatatable;
