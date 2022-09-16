import React from 'react';
import Conditionalrengering from './Conditionalrengering';
import HandleclickCC from './HandleclickCC';
import Lifecyclereact from './Lifecyclereact';
import Listmap from './Listmap';
import Logincontrol from './Logincontrol';
import Skill from './Skill';
import Useststehooks from './Useststehooks';

const Employee = () => {
  return (
    <>
      <div className="container mt-5 ">
        <h1>name:prem</h1>
        <h2>id : 123445</h2>
        <Skill empskill="developer"></Skill>
        <HandleclickCC />

        <Useststehooks />
        <Lifecyclereact />
        <Listmap />
        <Conditionalrengering />
        <Logincontrol />

      </div>
    </>
  );

}

export default Employee;