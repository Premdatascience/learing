import Context from '@mui/base/TabsUnstyled/TabsContext';
import React, { useContext } from 'react';
import Mycontext from './Mycontext';

const Coumpound2 = () => {
    const name =useContext(Mycontext);
    console.log("data",name);
  return (
    <div>Coumpound2 {name}</div>
  )
}

export default Coumpound2;