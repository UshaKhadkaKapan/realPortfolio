import React from "react";
import Header from "../components/Header";
import "../styles/header-footer.css";
import "../styles/Home.css";

const Contact = () => {
  return (
    <div>
      <Header />

      <div>
        <Header />
        <div className="container contact mt-3">
          <div className="row pt-5">
            <div className="col-md-6 p-5">
              <img src="./contactus.PNG" alt="" />
            </div>
            <div className="col-md-6">
              <div className="contact-form m-2 p-5 n-box2">
                <h3 className="font-bold">Contact US</h3>

                <hr />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <br />

                <textarea className="form-control" rows={3} defaultValue={""} />

                <button className="primary-button mt-3 ">SUMBIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
