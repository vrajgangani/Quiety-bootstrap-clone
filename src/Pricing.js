import React from "react";
import { Calendar2Plus, CalendarX, CreditCard } from "react-bootstrap-icons";
import "./App.css";

export const Pricing = () => {
  return (
    <section
      style={{
        padding: "40px 10px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-center py-4">
            <h5 className="text-primary">Pricing</h5>
            <h2 className="fw-bold ">
              <strong>Check Our Valuable Price</strong>
            </h2>
            <span className="opacity-75">
              Conveniently mesh cooperative services via magnetic outsourcing.
              Dynamically grow value whereas accurate e-commerce vectors
            </span>
          </div>
        </div>
        <div className="row py-2 mb-5 ">
          <div className="col-12 col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
            <div style={{ fontSize: "3.4rem" }}>
              <CreditCard
                className="text-primary rounded-4  p-3"
                style={{ backgroundColor: "#175cff33" }}
              />
            </div>
            <div className=" pt-3 ps-3">
              <h5>No credit card required</h5>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 col-sm-12 d-flex  align-items-center">
            <div style={{ fontSize: "3.4rem" }}>
              <Calendar2Plus
                className="text-succes rounded-4  p-3"
                style={{ backgroundColor: "#5cc9a733" }}
              />
            </div>
            <div className=" pt-3 ps-3">
              <h5>Get 30 day free trial</h5>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 col-sm-12 d-flex  align-items-center">
            <div style={{ fontSize: "3.4rem" }}>
              <CalendarX
                className="text-danger rounded-4  p-3"
                style={{ backgroundColor: "#f2576733" }}
              />
            </div>
            <div className=" pt-3 ps-3">
              <h5>Cancel anytime</h5>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-12 col-lg-4 col-md-6 col-sm-12">
            <div
              className=" p-4 p-lg-5 p-md-4 p-sm-4 rounded-5"
              style={{
                backgroundColor: "white",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
            >
              <h5 className="text-primary">Stater</h5>
              <div className="d-flex">
                <h2 className="fw-bold">
                  <strong>$25</strong>
                </h2>
                <span className="pt-3 ps-1">/month</span>
              </div>
              <hr style={{ borderLeft: "1px dotted black" }}></hr>
              <div>
                <ul className="plan-facilities">
                  <li>1 Team</li>
                  <li> 1 Installed Agent</li>
                  <li> Real-Time Feedback</li>
                  <li> Video Dedicated Support</li>
                  <li> 1 Attacked Targets Per Month</li>
                  <li> Team Collaboration Tools</li>
                  <li> Automated Updated Features</li>
                  <li> 24/7 Life time Support</li>
                </ul>
                <button className="btn btn-outline-primary mt-3">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 col-sm-12">
            <div
              className=" p-4 p-lg-5 p-md-4 p-sm-4 rounded-5 text-white"
              style={{
                background: "rgb(9,2,107)",
                background:
                  "linear-gradient(90deg, rgba(9,2,107,1) 35%, rgba(14,66,142,1) 97%)",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
            >
              <h5 className="text-warning">Advanced</h5>
              <div className="d-flex">
                <h2 className="fw-bold">
                  <strong>$45</strong>
                </h2>
                <span className="pt-3 ps-1">/month</span>
              </div>
              <hr style={{ borderLeft: "1px dotted black" }}></hr>
              <div>
                <ul className="plan-facilities-advanced">
                  <li>5 Team</li>
                  <li> 3 Installed Agent</li>
                  <li> Real-Time Feedback</li>
                  <li> Video Dedicated Support</li>
                  <li> 24 Attacked Targets Per Month</li>
                  <li> Team Collaboration Tools</li>
                  <li> Automated Updated Features</li>
                  <li> 24/7 Life time Support</li>
                </ul>
                <button className="btn btn-primary mt-3">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 col-sm-12">
            <div
              className=" p-4 p-lg-5 p-md-4 p-sm-4 rounded-5"
              style={{
                backgroundColor: "white",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
            >
              <h5 className="text-primary">Primium</h5>
              <div className="d-flex">
                <h2 className="fw-bold">
                  <strong>$75</strong>
                </h2>
                <span className="pt-3 ps-1">/month</span>
              </div>
              <hr style={{ borderLeft: "1px dotted black" }}></hr>
              <div>
                <ul className="plan-facilities">
                  <li>6 Team</li>
                  <li> 8 Installed Agent</li>
                  <li> Real-Time Feedback</li>
                  <li> Video Dedicated Support</li>
                  <li> 40 Attacked Targets Per Month</li>
                  <li> Team Collaboration Tools</li>
                  <li> Automated Updated Features</li>
                  <li> 24/7 Life time Support</li>
                </ul>
                <button className="btn btn-outline-primary mt-3">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
