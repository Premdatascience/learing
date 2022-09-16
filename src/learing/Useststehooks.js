import React,{useState} from 'react';

const Useststehooks = () => {



    const [button , setButton] = useState("");


const onAddpress=()=>{
    setButton("add");
    console.log(button);


};

const onDeletepress=()=>{
    setButton("delete");
    console.log(button);
}


  return (
    <>
      <div className="container mt-5">
        <h1>useState</h1>
        <button onClick={() => onAddpress()}>add</button>
        <button onClick={() => onDeletepress()}>delete</button>
      </div>
    </>
  );
}

export default Useststehooks;