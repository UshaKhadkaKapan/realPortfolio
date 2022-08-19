import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Header from "../components/Header";
import "../styles/projects-courses.css";
import projectsdata from "./projectsdata";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="container projects-intro">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 n-box2 px-3 py-5">
            <div>
              <h1 className="font-bold">Projects</h1>
              <p className="font-bold">
                Everybody should learn how to code because it teaches us how to
                think
              </p>
              <button className="primary-button">Get Started</button>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0F62FE"
                d="M51.5,-18C58.8,5.6,51.2,32.8,31.7,48C12.2,63.2,-19.2,66.4,-40.6,51.8C-62,37.2,-73.5,4.8,-65.1,-20.5C-56.7,-45.7,-28.3,-63.8,-3.1,-62.8C22.1,-61.8,44.3,-41.7,51.5,-18Z"
                transform="translate(100 100)"
              />
            </svg>
            <FaLaptopCode
              color="white"
              size="180"
              className="position-absolute top-50 start-50 translate-middle"
            />
          </div>
        </div>
      </div>

      <div className="container project-list">
        <h3 className="font-bold">Check Out My Projects</h3>
        <hr />
        <div className="row">
          {projectsdata.map((project) => {
            return (
              <div className="col-md-4">
                <div className="position-relative project">
                  <img src={project.image} alt="" />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <hr />
                    <p>{project.description}</p>
                    <button className="primary-button">Demo</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
