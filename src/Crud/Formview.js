import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { XLSX } from "xlsx";
import { CSVLink } from "react-csv";
import $ from "jquery";

const Formview = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:4000/view");
    setData(response.data);
    // console.log(data)
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:4000/delete/${id}`);

    //  await axios.delete("http://localhost:4000/delete/:id");

    getData();
  };

  //datatable

// $(document).ready(function () {
//   $("#table_id").DataTable();
// });

// $.DataTable = require("datatables.net");
// const tableRef = useRef();
//   // console.log(tableRef);

// useEffect(() => {
//   console.log(tableRef.current);
//   const table = $(tableRef.current).DataTable({
//     data: props.data,
//     columns: [
//       { title: "s.no" },
//       { title: "firstname" },
//       { title: "lastname" },
//       { title: "username" },
//       { title: "phone" },
//       { title: "email" },
//       { title: "gender" },
//       { title: "country" },
//       { title: "dob" },
//       { title: "companyname" },
//       { title: "homeaddress" },
//       { title: "officeaddress" },
//       { title: "password" },
//       { title: "confirmpassword" },
//     ],
//     destroy: true, // I think some clean up is happening here
//   });
//   // Extra step to do extra clean-up.
//   return function () {
  
//     table.destroy();
//   };
// }, []);



  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div class="col-md-3 offset-md-3">
            <form enctype="multipart/form-data" action="/uploadfile" method="post">
              <div class="mb-3">
                <label for="formFile" class="form-label"></label>
                <input class="form-control" type="file" name="uploadfile" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" id="formFile" />
              </div>
              <div class="mt-3">
                <button type="submit" class="btn btn-primary" value="Upload Excel">
                  import
                </button>
              </div>
            </form>
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
            <table
              class="table table-bordered mt-3"
               style={{ width: "100%" }}
              id="table_id"
              // ref={tableRef}
            >
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Country</th>
                  <th scope="col">Dob</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Home Address</th>
                  <th scope="col">Office Address</th>

                  <th scope="col"> Password</th>
                  <th scope="col"> Confirm Password </th>
                  <th scope="col"> Action </th>
                </tr>
              </thead>
              <tbody>
                {data.map((registration, index) => (
                  <tr key={registration.id}>
                    <td>{index + 1}</td>
                    <td>{registration.firstname}</td>
                    <td>{registration.lastname}</td>
                    <td>{registration.username}</td>
                    <td>{registration.phone}</td>
                    <td>{registration.email}</td>
                    <td>{registration.gender}</td>
                    <td>{registration.country}</td>
                    <td>{registration.dob}</td>
                    <td>{registration.companyname}</td>
                    <td>{registration.homeaddress}</td>
                    <td>{registration.officeaddress}</td>
                    <td>{registration.password}</td>
                    <td>{registration.confirmpassword}</td>
                    <td>
                      <Link to={`/editform/${registration._id}`} className="btn btn-info">
                        Edit
                      </Link>
                      <button onClick={() => deleteData(registration._id)} className="btn btn-danger">
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

export default Formview;
