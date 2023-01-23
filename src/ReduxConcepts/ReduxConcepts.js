import React from 'react';
import Home from '../Home';
import { createStoreHook } from 'react-redux';
import { Dispatch } from 'redux';
const ReduxConcepts = () => {
  //selecter
  const Vadivelucomedy="vadivelucomedy";
  const Goundamanicomedy="goundamanicomedy";
  //action
  const VadiveluComedyAction =()=>({type:Vadivelucomedy});
  const GoundamaniComedyAction =()=>({type:Goundamanicomedy});
  //reducer
  const ComedyReducer=(state,action)=>{
    switch (action.type) {
      case Vadivelucomedy:
        return state ="kaduperthuraat my lord";
        
        case Goundamanicomedy:
        return state ="poda panni";
      default:
        return state ="no comady select";


    }
  }
  //store
  let store =createStoreHook(ComedyReducer);
// store.subscribe(()=>{console.log(store.getState);})
  // store.Dispatch(VadiveluComedyAction());


  return (
    <>
    <Home />
    <div className='container'>ReduxConcepts</div>
    </>
  )
}

export default ReduxConcepts