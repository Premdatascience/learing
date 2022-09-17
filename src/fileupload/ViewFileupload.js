import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import { CSVLink } from "react-csv";
import Home from "../Home";


const ViewFileuploads = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:4000/viewfileupload");
    setData(response.data);
    // console.log(data)
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:4000/deletefileupload/${id}`);

    //  await axios.delete("http://localhost:4000/delete/:id");

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
                  <Link to="/addupload" type="button" className="btn btn-success">
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
                  <th scope="col">image</th>
                  <th scope="col">name</th>
                  <th scope="col">birthdate</th>
                 
                </tr>
              </thead>
              <tbody>
                {data.map((fileupload, index) => (
                  <tr key={fileupload.id}>
                    <td>{index + 1}</td>
                    <td>{fileupload.photo}</td>
                    <td>{fileupload.name}</td>
                    <td>{fileupload.birthdate}</td>
                    
                    <td>
                      {/* <Link to={`/editform/${fileupload._id}`} className="btn btn-info">
                        Edit
                      </Link> */}
                      <button onClick={() => deleteData(fileupload._id)} className="btn btn-danger">
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

export default ViewFileuploads;
