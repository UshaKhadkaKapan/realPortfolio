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

      <div className=" devstack container my-5 n-box2 pt-5 pb-5">
        <div className="text-center">
          <h3 className="fond-bold text-center">My Development Stack</h3>
          <hr />
          <img src="./girllaptop.PNG" alt="" height="200" width="200" />
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="font-bold">
              <h3 className="font-bold text-start">Frontend</h3>
              <hr />
              <p>HTML5/CSS3</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Redux</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="font-bold">
              <h3 className="font-bold text-center">UI/Styling</h3>
              <hr />
              <p>Material UI</p>
              <p>Figma</p>
              <p>Bootstrap</p>
              <p>Semantic UI</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="font-bold">
              <h3 className="font-bold text-end">Backend/DB</h3>
              <hr />
              <p>NodeJS</p>
              <p>ExpressJS</p>
              <p>MongoDB</p>
              <p>MYSQL</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-center mt-4">Who is Usha?</h1>
        <div
          className="who-is-usha flex-with-center"
          style={{ backgroundImage: `url("/haikei.svg")` }}
        >
          <div className="mt-2">
            <h3>Hello</h3>
            <hr />
            <p>Name: Usha Khadka</p>
            <p>Gender:Female</p>
            <p>Phone: 0404472121</p>
            <p>Study: BIT</p>
            <p>From: Nepal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
