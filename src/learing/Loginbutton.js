import React from 'react';

const Loginbutton = (props) => {
  return (
    <div>
        <button onClick={props.onClick}>login</button>
    </div>
  );
}

export default Loginbutton;