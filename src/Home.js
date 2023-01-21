import React from "react";

import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Home = () => {
  const getToken = localStorage.getItem("token");
  // console.log(getToken);
  var decoded = jwt_decode(getToken);

  // console.log(decoded.name);
 
  const Roleid = decoded.name

  const logout = () => {
    localStorage.clear(getToken);
};
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    {" "}
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li className="nav-item">
                
                {Roleid==="admin"?  <a className="nav-link" href="#">
             
                    <Link to="/viewform">Form Registertion</Link>
                  </a>:<div></div>}
                </li>
                <li className="nav-item">
                {Roleid==="admin"?
                  <a className="nav-link" href="#">
                 
                    <Link to="/viewfileupload">Fileupload</Link>
                  </a>:<div></div>}
                </li>
                <li className="nav-item">
                {Roleid==="admin"?
                  <a className="nav-link" href="#">
                    {" "}
                    <Link to="/testformdata">Formtable</Link>
                  </a>:<div></div>}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    <Link to="/viewformval">FormValidation </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    <Link to="/datatable">datatable</Link>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <a className="nav-link" onClick={logout} href="/login" >
             
                Logout
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Home;
