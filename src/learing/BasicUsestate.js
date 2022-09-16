
import React, { useState } from "react";

const BasicUsestate = () => {
  const [click, setClick] = useState(0);
  const [count, setCount] = useState(0);
  const [clickoddoreven, setClickoddoreven] = useState(0);
  const [check, setCheck] = useState(false);



  const TimeOFusestate = () => {
    setCount(count + 1);
  };

  const TimeOFusestate1 = () => {
    setCount(count - 1);
  };

  const TimeOFusestate2 = () => {
    setClickoddoreven(clickoddoreven + 1);
  };

  const Checkdisable = () => {
    // if (check === false) {
    //   setCheck(true);
    // } else {
    //   setCheck(false);
    // }
  
      check === false ? setCheck(true) : setCheck(false);
    
  };

const [data ,setData]=useState({username:"",password:""});
const [form, setForm] = useState({username: "",password: "",});
 const [submit, submitted] = useState(false);

const printValues = (e) => {
  e.preventDefault();
  setForm({
    username: data.username,
    password: data.password,
  });
  submitted(true);
  console.log(...data);
};

const updateField = (e) => {
  setData({
    ...data,
    [e.target.name]: e.target.value,
  });
  console.log(...data)
};



  return (
    <>
      <div className="container">
        <h1>number of times{click}</h1>

        <button onClick={() => setClick(click + 1)}>add</button>
        <button onClick={() => setClick(click - 1)}>del</button>

        <div className="container mt-5">
          <h1>number of times{count}</h1>
          <button onClick={TimeOFusestate}>add by function</button>
          <button onClick={TimeOFusestate1}>add by function</button>
        </div>

        <div className="container mt-5">
          <p>You've clicked {clickoddoreven} times!</p>
          <p>The number of times you have clicked is {clickoddoreven % 2 == 0 ? "even!" : "odd!"}</p>
          <button onClick={TimeOFusestate2}>Click me</button>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div class="form-check">
                <input class="form-check-input" onChange={Checkdisable} type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>
            <div className="col">
              {check === true ? (
                <button type="button" class="btn btn-primary">
                  Primary
                </button>
              ) : (
                <button type="button" class="btn btn-primary" disabled>
                  Primary
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <form onSubmit={printValues}>
            <label className="mt-5">
              username:
              <input name="username" value={data.username} type="username" onChange={updateField} />
            </label>

            <label className="mt-3">
              password:
              <input name="password" value={data.password} type="password" onChange={updateField} />
            </label>
            <br />
            <button>Submit</button>
          </form>

          <p>{submit ? form.username : null}</p>

          <p>{submit ? form.password : null}</p>
        </div>
      </div>
    </>
  );
};

export default BasicUsestate;
