

import React from 'react';

import { useState, useEffect, useRef } from "react";


import axios from "axios";


const Formtable = () => {

    const [data, setData] = useState();
    let formdata = [];

    useEffect(() => {
        
      getData();
      // calldata()
    }, []);
  
    const getData = async () => {
      const response = await axios.get("http://localhost:4000/view");
      console.log(response.data);
      setData(response.data);
    
    };
  
   

   // console.log(data);
    

// const calldata =()=>{
  data?.map((x,index) => {
    formdata.push({"No":index+1,"FirstName":x.firstname,"LastName":x.lastname})
 
})

// }

console.log(formdata);

  //   // get table column
  //   const column = Object.keys(formdata[0]);
  //   console.log(column);
  //   const ThData = () => {
  
  //     // get table heading data
  
  //     return column.map((data1) => {
  //       return <th key={data1}>{data1}</th>
  
        
  //     })
  //   }
  //   console.log(column);
  //   // get table row data
  //   const tdData = () => {
  
  //     return formdata.map((data1) => {
  //       return (
  //         <tr>
  //           {
  //             column.map((v) => {
                
  //               return <td>{data1[v]}</td>
  //             })
  //           }
  //           <td>
  
  //             <button  className="btn btn-danger">
  //               Delete
  //             </button>
  
  
  //           </td>
  
  //         </tr>
  //       )
  //     })
  //   }
  


  // return (
  //  <>
  //  <div className='container'>
  //  <table class="table table-bordered mt-3" style={{ width: "100%" }}>
  //             <thead>
  //               {ThData()}   <th scope="col"> Action </th>

  //             </thead>
  //             <tbody>
  //               {tdData()}

  //             </tbody>
  //           </table>
  //  </div>


   
  //  </>
  // );
}

export default Formtable;