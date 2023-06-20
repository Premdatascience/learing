import React from 'react';
import Home from '../Home';
import Compound1 from './compound1';
import Mycontext from './Mycontext';
const Contexthookconcept = () => {
  return (

<>
<Home />

<div>Contexthook</div>
<Mycontext.Provider value='kumar'>

<Compound1 />

</Mycontext.Provider>
</>
    )
}

export default Contexthookconcept;