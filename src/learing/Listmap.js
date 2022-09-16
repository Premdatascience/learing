import React from "react";
import Skill from "./Skill";

const Listmap = () => {
  const courses = [
    { id: 1, name: "kutty" },
    { id: 2, name: "kutty" },
    { id: 3, name: "kutty" },
    { id: 4, name: "kutty" },
    { id: 5, name: "kutty" },
    { id: 6, name: "kutty" },
    { id: 7, name: "kutty" },
  ];

  const developer = [
    {
      name: "kumar",
      skills: [
        {
          name: "java",
          type: "frontend",
        },
        {
          name: "python",
          type: "backend",
        },
      ],
    },
    {
      name: "prem",
      skills: [
        {
          name: "c++",
          type: "frontend",
        },
        {
          name: "php",
          type: "backend",
        },
      ],
    },
  ];

  return (
    <>
      <div className="mt-5">Listmap</div>

      {/* <ul>
        {courses.map((data) => (
          <li>{data.name}</li>
        ))}
        ;
      </ul> */}

      <ul>
        {courses.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
        ;
        {courses.map((data) => (
          <li key={data.index}>{data.id}</li>
        ))}
        ;
      </ul>

      <div>
        {developer.map((dev, index) => (
          <div key={index}>
            <h2>{dev.name}skills</h2>
            <div>
              {dev.skills.map((Skill, index) => (
                <p key={index}>{Skill.type}-----{Skill.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Listmap;
