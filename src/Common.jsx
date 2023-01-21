import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";


const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    
                    {props.name}
                    <br />
                  </h1>
                  <h1>Department of MCA presents</h1>
                  <h1>
                    <strong className="brand-name"> TECHEON-2023</strong> 
                  </h1>
                  
                  <h4 className="my-3">
                    Join us on 31st January & 1st February 
                  </h4>
                  <div className="mt-3">
                    <NavLink
                      className="btn btn-outline-primary"
                      to={props.visit}
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home.img"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
