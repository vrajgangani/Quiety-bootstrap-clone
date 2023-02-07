import React from "react";
import F1Image from './Image/5217215.jpg';

export const Faq = () => {
  return (
    <section
      style={{
        padding: "80px 10px 30px 10px",
        backgroundColor: "white",
      }}
      className=""
    >
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-center py-4 mb-2">
            <h5 className="text-primary">FAQ</h5>
            <h2 className="fw-bold ">
              <strong>Frequently Asked Questions</strong>
            </h2>
            <span className="opacity-75">
              Enthusiastically engage cross-media leadership skills for
              alternative experiences. Proactively drive vertical systems than
              intuitive architectures.
            </span>
          </div>
        </div>
        <div className="row py-4 d-flex justify-content-center align-items-center">
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 p-lg-5 ">
            <div className="pb-4">
              <div className="d-flex">
                <h5 className="text-primary fw-bold pe-2">1.</h5>
                <h5 className="fw-bold"> How does back pricing work?</h5>
              </div>
              <p className="opacity-75">
                Progressively foster enterprise-wide systems whereas equity
                invested web-readiness harness installed base bandwidth.
              </p>
            </div>
            <div className="pb-4">
              <div className="d-flex">
                <h5 className="text-primary fw-bold pe-2">2.</h5>
                <h5 className="fw-bold">  How do I calculate how much price?</h5>
              </div>
              <p className="opacity-75">
              Globally benchmark customized mindshare before clicks-and-mortar partnerships. Efficiently maintain economically sound scenarios and whereas client-based progressively.
              </p>
            </div>
            <div className="pb-4">
              <div className="d-flex">
                <h5 className="text-primary fw-bold pe-2">3.</h5>
                <h5 className="fw-bold"> Can you show me an example?</h5>
              </div>
              <p className="opacity-75">
              Dynamically visualize whereas competitive relationships. Progressively benchmark customized partnerships generate interdependent benefits rather sound scenarios and robust alignments.
              </p>
            </div>
            
          </div>
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center custom-client-img mb-5">
            <img
              src={F1Image}
              alt="faq-img"
              className="img-fluid rounded-4 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
