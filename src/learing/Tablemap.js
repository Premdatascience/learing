import React from 'react';
import TableData from "./TableData";
// import { useEffect } from "react";
 
const Tablemap = () => {
    // get table column
 const column = Object.keys(TableData[0]);
 const ThData =()=>{
   
  // get table heading data

  return column.map((data)=>{
      return <th key={data}>{data}</th>
  })
}

// get table row data
const tdData =() =>{
   
  return TableData.map((data)=>{
    
    return(
        <tr>
             {
                column.map((v)=>{
                    return <td>{data[v]}</td>
                })
             }
        </tr>
    )
  })
}

  return (
 <>
      <table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
 </>
  );
}

export default Tablemap ;