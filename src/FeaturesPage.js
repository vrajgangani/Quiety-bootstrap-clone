import React from "react";
import { CodeSlash, Collection, ShieldCheck } from "react-bootstrap-icons";
import "./App.css";
import ProductImage1 from "./Image/cta-img-1.png";
import ProductImage2 from "./Image/cta-img-2.png";

export const FeaturesPage = () => {
  return (
    <section
      style={{
        padding: "100px 10px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="py-lg-4 py-md-4 py-sm-4 py-4 w-lg-50 w-md-50">
            <h2 className="text-center features-need fw-bolder">
              <strong>With all the Features You Need</strong>
            </h2>
            <p className="text-center opacity-75">
              Credibly grow premier ideas rather than bricks-and-clicks
              strategic theme areas distributed for stand-alone web-readiness.
            </p>
          </div>
        </div>
        <div className="row py-lg-5 py-md-5 py-sm-4 py-4 ">
          <div className="feature-container col-12 col-lg-4 col-md-4 col-sm-6 text-center px-lg-5 px-md-3 px-sm-3 px-4">
            <div className="feature-icon pb-lg-4 pb-md-4 pb-sm-4 pb-4 ">
              <Collection
                className="bg-primary text-white rounded-4 p-3"
                size={"4rem"}
              />
            </div>
            <h5>
              <strong>Good Performance</strong>
            </h5>
            <p>
              Appropriately grow competitive leadership rather than strategic
              technically sound processes without state.
            </p>
          </div>

          <div className="feature-container col-12 col-lg-4 col-md-4 col-sm-6 text-center px-lg-5 px-md-3 px-sm-4 px-4 pb-sm-5">
            <div className="feature-icon pb-lg-4 pb-md-4 pb-sm-4 pb-4">
              <ShieldCheck
                className="bg-danger text-white rounded-4 p-3"
                size={"4rem"}
              />
            </div>
            <h5>
              <strong>Highly Secure</strong>
            </h5>
            <p>
              Appropriately grow competitive leadership rather than strategic
              technically sound processes without state.
            </p>
          </div>
          <div className="feature-container col-12 col-lg-4 col-md-4 col-sm-6 text-center px-lg-5 px-md-4 px-sm-3 px-3">
            <div className="feature-icon pb-lg-4 pb-md-4 pb-sm-4 pb-4">
              <CodeSlash
                className="bg-dark text-white rounded-4 p-3"
                size={"4rem"}
              />
            </div>
            <h5>
              <strong>Fast Development</strong>
            </h5>
            <p>
              Appropriately grow competitive leadership rather than strategic
              technically sound processes without state.
            </p>
          </div>
        </div>
        <div className="d-flex flex-sm-column flex-lg-row flex-md-row flex-column ">
          <div className="feature-service-1 rounded-4 p-lg-5 p-md-5 p-sm-4 p-4 me-lg-4 me-md-4 mb-sm-4 mb-4 ">
            <h5>
              <strong>Utilize your software data</strong>
            </h5>
            <p className="pt-lg-2">
              Progressively reinvent models and niche revolutionary benefits for
              integrated niches.
            </p>
            <div className="d-flex">
              <button className="btn btn-outline-primary mt-lg-5">
                Start For Free
              </button>
              <img
                src={ProductImage1}
                alt="product-img-1"
                className="product-img-1"
              />
            </div>
          </div>
          <div className="feature-service-2 rounded-4 p-lg-5 p-md-5 p-sm-4 p-4  mb-4 mb-sm-4 ">
            <h5>
              <strong>Get real time updated anytime</strong>
            </h5>
            <p className="pt-lg-2">
              Progressively reinvent models and niche revolutionary benefits for
              integrated niches.
            </p>
            <div className="d-flex">
              <button className="btn btn-outline-primary mt-lg-5">
                Start For Free
              </button>
              <img
                src={ProductImage2}
                alt="product-img-2"
                className="product-img-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
