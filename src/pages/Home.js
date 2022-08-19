import React from "react";
import Casorel from "../components/Casorel";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />

      <div
        className="introduction flex-with-center"
        // style={{ backgroundImage: `url("./star.PNG")` }}
        style={{ backgroundColor: `black` }}
      >
        <div>
          <h1>Usha Khadka</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>
              MERN Stack <br />
              Full Stack Developer
            </p>
            <button className="primary-button font-bold ">Get Started</button>
          </div>
        </div>
      </div>
      <Casorel />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#"
            fill-opacity="1"
            d="M0,288L48,288C96,288,192,288,288,261.3C384,235,480,181,576,165.3C672,149,768,171,864,181.3C960,192,1056,192,1152,208C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 px-3 py-5 font-bold">
              <h1>Hi, I am MERN Stack developer.</h1>
              <br />
              <p>I am Javascript Buff....</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img
                src="./nodeimage.PNG"
                alt=""
                height="200"
                className="w-100"
              />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 px-3 py-5 font-bold">
              <p></p>MERN stands for MongoDB, Express, React, Node, after the
              four key technologies that make up the stack. MongoDB — document
              database. Express(.js) — Node.js web framework. React(.js) — a
              client-side JavaScript framework.
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3>My Development Stack</h3>
      </div>
    </div>
  );
};

export default Home;
