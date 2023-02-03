import React from "react";
import Logo1 from "./Image/s1.png";
// import Logo2 from "./Image/s12.png";
import Logo3 from "./Image/s3.png";
import Logo4 from "./Image/s4.png";
import Logo5 from "./Image/s5.png";
import Logo6 from "./Image/s6.png";
import Logo7 from "./Image/s7.png";
import Logo8 from "./Image/s8.png";
import Logo9 from "./Image/s9.png";
import Logo10 from "./Image/s10.png";
import Logo11 from "./Image/s11.png";
import Logo12 from "./Image/s12.png";
import "./App.css";

export const Integration = () => {
  return (
    <section
      style={{
        padding: "100px 0px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container">
        <div className="outer-integration">
          <div className="div-1">
            <div className="l1">
              <img src={Logo1} alt="logo-img" />
            </div>
            <div className="l2">
              <img src={Logo12} alt="logo-img" />
            </div>
            <div className="l3">
              <img src={Logo3} alt="logo-img" />
            </div>
            <div className="l4">
              <img src={Logo4} alt="logo-img" />
            </div>
            <div className="l5">
              <img src={Logo5} alt="logo-img" />
            </div>
            <div className="l6">
              <img src={Logo6} alt="logo-img" />
            </div>
          </div>
          <div className="text-div w-50 text-center py-md-5 py-sm-5 py-5 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-primary">Integration</h5>
              <h2 className="fw-bold py-2">
                <strong>We Collaborate with Top Software Company</strong>
              </h2>
              <button className="btn btn-primary">View All Integration</button>
            </div>
          </div>
          <div className="div-2">
            <div className="className=l7">
              <img src={Logo7} alt="logo-img" />
            </div>
            <div className="l8">
              <img src={Logo8} alt="logo-img" />
            </div>
            <div className="l9">
              <img src={Logo9} alt="logo-img" />
            </div>
            <div className="l10">
              <img src={Logo10} alt="logo-img" />
            </div>
            <div className="l11">
              <img src={Logo11} alt="logo-img" />
            </div>
            <div className="l12">
              <img src={Logo12} alt="logo-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
