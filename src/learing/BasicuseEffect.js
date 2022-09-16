import React, { useState, useEffect } from "react";

const BasicuseEffect = () => {
    const [count, setCount] = useState(0);

      useEffect(() => {
        alert(`You clicked ${count} times`);
      });
      
      const handleUpdate = () => {
        setCount(count + 1);
      };
    
  return (
    <>
      <div>
        <div>You have clicked {count} times</div>
        <button onClick={handleUpdate}>Click me</button>
      </div>
    </>
  );
};

export default BasicuseEffect;
