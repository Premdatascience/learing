import React from 'react';
import Reduxapp from './Reduxapp';
import Home from '../Home';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import  useReducer  from './features/reduxuser';
const store =configureStore({

  reducer:{useReducer}
})

const ReduxConcepts = () => {
  return (
<>
<Home />

<div>ReduxConcepts</div>
<Provider store={store}>
<Reduxapp />
</Provider>
</>    
  )
}

export default ReduxConcepts;