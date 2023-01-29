import React from 'react';
import Home from '../Home';
import Compound1 from './compound1';
import Mycontext from './Mycontext';
const Contexthook = () => {
  return (

<>
<Home />

<div>Contexthook</div>
<Mycontext.Provider value='kutty'>

<Compound1 />

</Mycontext.Provider>
</>
    )
}

export default Contexthook;