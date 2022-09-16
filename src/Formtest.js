import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";

const Formtest = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  //  cheackbox in react js

  const [boxes, setBoxes] = useState([]);

  function handleChange(e) {
    const {
      parentNode: { children },
    } = e.target;

    const index = [...children].indexOf(e.target);

    const newState = [...boxes];

    newState[index] = !newState[index];

    setBoxes(newState);
  }

  function isDisabled() {
    const len = boxes.filter((box) => box).length;
    return len === 0 || len > 1;
  }

  function autoFilAddress(e) {
    let checkBox = document.getElementById("checkBox");
    let pAddressLine1 = document.getElementById("pAddressLine1");
    let curAddressLine1 = document.getElementById("curAddressLine1");
    if (checkBox.checked == true) {
      let pAddressLine1Value = pAddressLine1.value;
      curAddressLine1.value = pAddressLine1Value;
    } else {
      curAddressLine1.value = "";
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div class="card mt-3">
          <h5 class="card-header regcolor">
            <center className="textwhite">Register</center>
          </h5>
          <div class="card-body">
            <form id="basic-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="col">
                      <div className="input-group mt-3">
                        <input
                          className="form-control"
                          placeholder="First Name"
                          type="text"
                          id="firstName"
                          name="firstName"
                          {...register("firstName", {
                            required: "First Name is required",
                            pattern: {
                              value: /^[a-z\s]+$/,
                              message: "enter only characters", // JS only: <p>error message</p> TS only support string
                            },
                            minLength: {
                              value: 3,
                              message: "enter atleast 3 characters", // JS only: <p>error message</p> TS only support string
                            },
                          })}
                        />
                      </div>
                      <div className="mt-2">{errors.firstName && <small className="errornote">{errors.firstName.message}</small>}</div>
                    </div>
                    <div className="col">
                      <div className="input-group mt-3">
                        <input
                          className="form-control"
                          type="text"
                          name="username"
                          placeholder="Username"
                          {...register("username", {
                            required: "username is required",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter only alphanumeric", // JS only: <p>error message</p> TS only support string
                            },
                            minLength: {
                              value: 3,
                              message: "Enter atleast 3 characters", // JS only: <p>error message</p> TS only support string
                            },
                          })}
                        />
                      </div>
                      <div className="mt-2">{errors.username && <small className="errornote">{errors.username.message}</small>}</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col">
                      <div className="input-group mt-3">
                        <input
                          className="form-control"
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          {...register("lastname", {
                            required: "Last Name is required",
                            pattern: {
                              value: /^[A-Z\L]+$/,
                              message: "Enter only uppercase and characters ", // JS only: <p>error message</p> TS only support string
                            },
                            maxLength: {
                              value: 1,
                              message: "Enter one characters", // JS only: <p>error message</p> TS only support string
                            },
                          })}
                        />
                      </div>
                      <div className="mt-2">{errors.lastname && <small className="errornote">{errors.lastname.message}</small>}</div>
                    </div>
                    <div className="col">
                      <div className="input-group mt-3">
                        <input
                          className="form-control"
                          type="number"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                          {...register("phone", {
                            required: "Phone Number is required",
                            pattern: /\d+/,
                            minLength: {
                              value: 10,
                              message: "please enter 10-12 numbers", // JS only: <p>error message</p> TS only support string
                            },

                            maxLength: {
                              value: 12,
                              message: "please enter valied 10-12 numbers", // JS only: <p>error message</p> TS only support string
                            },
                          })}
                        />
                      </div>
                      <div className="mt-2">{errors.phone && <small className="errornote">{errors.phone.message}</small>}</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="input-group mt-3">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Your E-Mail Address"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                    </div>
                    <div className="mt-2">{errors.email && <small className="errornote">{errors.email.message}</small>}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div class="mt-3">
                      <select
                        id="Select"
                        class="form-select"
                        name="gender"
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                      >
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className="mt-2">{errors.gender && <small className="errornote">{errors.gender.message}</small>}</div>
                    <div class="mt-3">
                      <select
                        id="Select"
                        class="form-select"
                        name="country"
                        {...register("country", {
                          required: "Country is required",
                        })}
                      >
                        <option value="">country</option>
                        <option value="india">india</option>
                        <option value="usa">usa</option>
                        <option value="Afghanistan">Afghanistan</option>
                      </select>
                    </div>
                    <div className="mt-2">{errors.country && <small className="errornote">{errors.country.message}</small>}</div>
                  </div>

                  <div className="col">
                    <div className="input-group mt-3">
                      <input
                        className="form-control"
                        type="date"
                        name="dob"
                        placeholder="Date Of Birth : DD/MM/YY"
                        {...register("dob", {
                          required: "Date Of Birth is required",
                        })}
                      />
                    </div>
                    <div className="mt-2">{errors.dob && <small className="errornote">{errors.dob.message}</small>}</div>
                    <div className="input-group mt-3">
                      <input
                        className="form-control"
                        type="text"
                        name="companyname"
                        placeholder="Your Company's Name"
                        {...register("companyname", {
                          required: "company Name is required",
                        })}
                      />
                    </div>
                    <div className="mt-2">{errors.companyname && <small className="errornote">{errors.companyname.message}</small>}</div>
                  </div>
                </div>

                <div className="container">
                  <div className="row">
                    <div className="col-5">
                      <div className="mt-3">
                        <textarea
                          className="form-control"
                          id="pAddressLine1"
                          rows="3"
                          placeholder="Home Address"
                          name="HomeAddress"
                          {...register("HomeAddress", {
                            required: "Home Address is required",
                          })}
                        ></textarea>
                      </div>
                      <div className="mt-2">{errors.HomeAddress && <small className="errornote">{errors.HomeAddress.message}</small>}</div>
                    </div>
                    <div className="col-2 mt-4">
                      <div class="form-group">
                        <input type="checkbox" id="checkBox" onChange={autoFilAddress} /> Same as permanent address
                      </div>
                    </div>
                    <div className="col-5">
                      <div class="mt-3">
                        <textarea
                          class="form-control"
                          id="curAddressLine1"
                          rows="3"
                          placeholder="Office Address"
                          name="OfficeAddress"
                          {...register("OfficeAddress", {
                            required: "Office Address is required",
                          })}
                        ></textarea>
                      </div>
                      <div className="mt-2">{errors.OfficeAddress && <small className="errornote">{errors.OfficeAddress.message}</small>}</div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="input-group mt-3">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="password"
                          {...register("password", {
                            required: "Password is required",
                            pattern: {
                              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                              message: "invalid password",
                            },
                          })}
                        />
                      </div>
                      <div className="mt-2">{errors.password && <small className="errornote">{errors.password.message}</small>}</div>
                    </div>
                    <div className="col">
                      <div className="input-group mt-3">
                        <input
                          type="password"
                          className="form-control"
                          name="confirmpassword"
                          placeholder="Confirm Password"
                          {...register("confirmpassword", {
                            required: "Password is required",
                            validate: (val) => {
                              if (watch("password") != val) {
                                return "Your passwords do no match";
                              }
                            },
                          })}
                        />
                      </div>
                      <div className="mt-2">{errors.confirmpassword && <small className="errornote">{errors.confirmpassword.message}</small>}</div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div class="mt-3">
                    <div class="form-check ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="FieldsetCheck"
                        name="FieldsetCheck"
                        // onChange={handleChange}

                        {...register("FieldsetCheck", {
                          required: "Agree is required",
                        })}
                      />
                      <label class="form-check-label " for="FieldsetCheck">
                        Recieve best offers and updates
                      </label>
                    </div>
                    <div className="mt-1">{errors.FieldsetCheck && <small className="errornote">{errors.FieldsetCheck.message}</small>}</div>
                  </div>
                  <div class="mt-3">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="FieldsetCheck1" name="FieldsetCheck1" onChange={handleChange} />
                      <label class="form-check-label" for="FieldsetCheck2">
                        I agree with the terms & conditions.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center ">
                  <div className="col-3 mt-3">
                    <div class="d-grid gap-2">
                      <button type="submit" className="btn btn  regcolor  stophover textwhite submit" disabled={isDisabled()}>
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                <div className="container mt-2 linecolor"></div>
                <div className="row mt-4">
                  <center>Already have an account ? Login</center>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formtest;

// class Form extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (

//     );
//   }
// }

// export default Form;
