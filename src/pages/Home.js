import React from "react";

const Home = () => {
  return (
    <div>
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
            <button className="primary-button font-bold w-50">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
