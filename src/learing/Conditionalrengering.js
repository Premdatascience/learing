import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Conditionalrengering = (props) => {

const isLoggedIN = props.isLoggedIN; //true or false
if(isLoggedIN){
    return  <UserGreeting />;
}
else{
    return <GuestGreeting />;
}
    
}

export default Conditionalrengering;