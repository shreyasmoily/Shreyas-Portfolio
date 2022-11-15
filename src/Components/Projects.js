import { projectDetails } from "../projectDetails";
import React, { useEffect } from "react";
import "./Project.css";


function Projects() {
  useEffect(() => {
    console.log(projectDetails[0], "dffffffff");
  });

  return (
    <div className="Container">
      <h1 className="project-header"> Projects . .</h1>
      {projectDetails.map((item) => {
        return (
          <a href={item.link} style={{ textDecoration: "none" }}>
            <div className="Box">
              <div className="Title">
                <h2 className="header">
                  Project title : <h3>{item.name}</h3>
                </h2>
              </div>
              <div className="image-container">
                <img className="image" src={item.image} />
              </div>
              <div className="Content">
                <h3 className="header">
                  <h2 className="header">About</h2>
                </h3>
                <p className="content-paragraph">{item.content}</p>
              </div>
            </div>
          </a>
        );
      })}
      ;
    </div>
  );
}

export default Projects;
