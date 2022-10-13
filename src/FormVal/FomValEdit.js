import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const FormValEdit = () => {
  const [editUser, setEditUser] = useState({
    email: "",
    password: "",
    address: "",
    address2: "",
    City: "",
    Zip: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.put(`http://localhost:4000/formupdate/${id}`, data);

    // window.location.href = "/viewformval";
    navigate("/viewformval");
  };

  const handeledit = (e) => {
    setEditUser({ ...editUser, [e.target.name]: [e.target.value] });
  };

  useEffect(() => {
    getDataById();
  }, []);

  const getDataById = async () => {
    const response = await axios.get(`http://localhost:4000/formview/${id}`);

    console.log(response.data);
    reset(response.data);

    console.log(editUser);
  };

  // console.log(data)
  return (
    <>
      <div className="container mt-5">
        <div className="card mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-row">
              <h1>update form</h1>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  onChange={handeledit}
                  name="email"
                  {...register("email", {
                    required: "email Name is required",
                  })}
                />
                <div className="mt-2">
                  {errors.email && (
                    <small className="errornote">{errors.email.message}</small>
                  )}
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  onChange={handeledit}
                  name="password"
                  {...register("password", {
                    required: "password Name is required",
                  })}
                />
                <div className="mt-2">
                  {errors.password && (
                    <small className="errornote">
                      {errors.password.message}
                    </small>
                  )}
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                onChange={handeledit}
                name="address"
                {...register("address", {
                  required: "Address Name is required",
                })}
              />
              <div className="mt-2">
                {errors.address && (
                  <small className="errornote">{errors.address.message}</small>
                )}
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                onChange={handeledit}
                name="address2"
                {...register("address2", {
                  required: "Address2 Name is required",
                })}
              />
              <div className="mt-2">
                {errors.address2 && (
                  <small className="errornote">{errors.address2.message}</small>
                )}
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  onChange={handeledit}
                  name="City"
                  {...register("City", {
                    required: "City Name is required",
                  })}
                />
                <div className="mt-2">
                  {errors.City && (
                    <small className="errornote">{errors.City.message}</small>
                  )}
                </div>
              </div>

              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputZip"
                  onChange={handeledit}
                  name="Zip"
                  {...register("Zip", {
                    required: "Zip Name is required",
                  })}
                />
                <div className="mt-2">
                  {errors.Zip && (
                    <small className="errornote">{errors.Zip.message}</small>
                  )}
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormValEdit;
