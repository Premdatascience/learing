import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { XLSX } from "xlsx";
import { CSVLink } from "react-csv";
import $ from "jquery";
import Home from "../Home";
import ReactPaginate from "react-paginate";

const ViewFormval = () => {
  const [data, setData] = useState([]);
  //search
  const [loading, setLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");

  const keys = ["email", "password", "address", "address2", "City", "Zip"];

  // page
  //
  // const [page ,setPagecount] =useState([0]);

  const getData = async (currentpage) => {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:4000/formview?_page=${currentpage}&_limit=2`
    );
    // setData(response.data);
    // console.log(getData);
    // console.log(response.data);
    // setFilterdata(response.data);
    return response.data;
  };

  useEffect(() => {
    const resolves = async () => {
      const contents = await getData();
      setData(contents);
      setLoading(false);
    };
    resolves();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:4000/formdelete/${id}`);

    getData();
  };

  // page
  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentpage = data.selected + 1;
    const commentsFormserver = await getData(currentpage);
    setData(commentsFormserver);
  };

  return (
    <>
      <Home />
      <div className="container-fluid mt-5">
        <div className="row">
          <div class="col-md-3 offset-md-3"></div>
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
                <div className="col">
                  <input type="text" name="name"
                   onChange={(e) => setSearchTitle(e.target.value)}
                  placeholder="Search..." />
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
                {loading ? (
                  <h4>Loading ...</h4>
                ) : (
                  data
                    .filter((value) => {
                      if (searchTitle === "") {
                        return value;
                      } else if (
                        keys.some((key) =>
                          value[key]
                            .toLowerCase()
                            .includes(searchTitle.toLowerCase())
                        )
                      ) {
                        return value;
                      }
                    })
                    .map((formval, index) => (
                      <tr key={formval.id}>
                        <td>{index + 1}</td>
                        <td>{formval.email}</td>
                        <td>{formval.password}</td>
                        <td>{formval.address}</td>
                        <td>{formval.address2}</td>
                        <td>{formval.City}</td>
                        <td>{formval.Zip}</td>

                        <td>
                          <Link
                            to={`/formvaledit/${formval._id}`}
                            className="btn btn-info"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteData(formval._id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
            <div className="container mt-5">
              <ReactPaginate
                previousLabel={"< previous"}
                nextLabel={"next >"}
                breakLabel={"..."}
                pageCount={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewFormval;
