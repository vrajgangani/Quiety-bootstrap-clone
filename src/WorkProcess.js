import React from "react";
import OfficeImage from "./Image/office-img-1.jpg";
import "./App.css";
import { BodyText, BoundingBox, CardText, Truck } from "react-bootstrap-icons";

export const WorkProcess = () => {
  return (
    <section
      style={{
        padding: "80px 10px",
        backgroundColor: "#f8f9fa",
      }}
      className=""
    >
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-center py-4">
            <h5 className="text-primary">Process</h5>
            <h2 className="fw-bold ">
              <strong>We Follow Our Work Process</strong>
            </h2>
            <span className="opacity-75">
              Enthusiastically engage cross-media leadership skills for
              alternative experiences. Proactively drive vertical systems than
              intuitive architectures.
            </span>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center custom-client-img mb-5">
            <img
              src={OfficeImage}
              alt="client-img-review"
              className="img-fluid rounded-4 "
            />
          </div>
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 mb-4 d-flex justify-content-center align-items-center ps-lg-5">
            <div className="">
              <div className="d-flex">
                <div className="icon1">
                  <BodyText />
                </div>
                <div className="px-4">
                  <h6 className="text-primary">Step 1</h6>
                  <h5 className="fw-bold">Research and Content Planing</h5>
                  <p className="opacity-75">
                    Progressively foster enterprise-wide systems whereas equity
                    invested web-readiness harness installed base bandwidth.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon2">
                  <BoundingBox />
                </div>
                <div className="px-4">
                  <h6 className="text-primary">Step 2</h6>
                  <h5 className="fw-bold py-1">Publishing and Execution</h5>
                  <p className="opacity-75">
                    Dramatically administrate progressive metrics without
                    error-free globally simplify standardized alignments
                    plagiarize distributed.
                  </p>
                </div>
              </div >
              <div className="d-flex">
                <div className="icon3">
                  <CardText />
                </div>
                <div className="px-4">
                  <h6 className="text-primary">Step 3</h6>
                  <h5 className="fw-bold py-1">Product Prototyping</h5>
                  <p className="opacity-75">
                    Interactively whiteboard transparent testing procedures
                    before bricks-and-clicks initiatives administrate
                    competencies
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon4">
                  <Truck />
                </div>
                <div className="px-4">
                  <h6 className="text-primary">Step 4</h6>
                  <h5 className="fw-bold py-1">Deliver the Final Product</h5>
                  <p className="opacity-75">
                    Dramatically plagiarize distributed progressive metrics
                    without error-free globally simplify standardized
                    alignments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
