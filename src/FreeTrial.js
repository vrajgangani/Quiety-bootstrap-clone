import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { CheckCircle, PlayCircle, PlayCircleFill } from "react-bootstrap-icons";

export const FreeTrial = () => {
  const [iconFill, setIconFill] = useState(true);

  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{
        padding: "50px 0px",
      }}
    >
      <div
        className="d-flex flex-column  justify-content-center align-items-center text-white rounded-4 p-lg-5 p-md-5 p-sm-5 p-4"
        style={{
          background: "rgb(9,2,107)",
          background:
            "linear-gradient(90deg, rgba(9,2,107,1) 35%, rgba(14,66,142,1) 97%)",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        <div className="text-center py-3 ">
          <h5 className="text-warning">Let's Try! Get Free Support</h5>
          <h2 className="fw-bold ">
            <strong>Start Your 14-Day Free Trial</strong>
          </h2>
          <span className="opacity-75">
            We can help you to create your dream website for better business
            revenue.
          </span>
        </div>
        <div className="demo-div my-lg-4  my-sm-4 my-sm-3 my-4 d-flex justify-content-start align-items-center">
          <Button
            variant="primary"
            className="px-lg-4 py-lg-2 px-md-3 py-md-2 px-sm-3 py-sm-2 px-3 py-2"
          >
            Contact With Us
          </Button>
          <div className="watch-demo d-flex justify-content-center align-items-center ms-lg-3 ms-md-3 ms-sm-3 ms-3">
            {iconFill ? (
              <PlayCircle
                size={"2.4rem"}
                onMouseEnter={() => setIconFill(!iconFill)}
              />
            ) : (
              <PlayCircleFill
                size={"2.4rem"}
                onMouseLeave={() => setIconFill(!iconFill)}
              />
            )}

            <p className=" h6 opacity-75 ms-lg-2 ms-md-3 ms-sm-2 ms-2 d-flex justify-content-center align-items-center">
              Watch demo
            </p>
          </div>
        </div>
        <div className="row py-4 d-flex justify-content-center  align-items-center">
          <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center  pb-2 pb-lg-0 pb-md-0 pb-sm-0 ">
            <CheckCircle size={"1.2rem"} className="text-primary" />
            <span className="opacity-75 ps-2">Free 14-days trial</span>
          </div>
          <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center pb-2 pb-lg-0 pb-md-0">
            <CheckCircle size={"1.2rem"} className="text-primary" />
            <span className="opacity-75 ps-2">No credit Reqiure</span>
          </div>
          <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center pb-2 pb-lg-0 pb-md-0 pb-sm-0 ">
            <CheckCircle size={"1.2rem"} className="text-primary" />
            <span className="opacity-75 ps-2">Spport 24/7</span>
          </div>
          <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center  pb-2 pb-lg-0 pb-md-0 pb-sm-0 ">
            <CheckCircle size={"1.2rem"} className="text-primary" />
            <span className="opacity-75 ps-2">Cancle Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};
