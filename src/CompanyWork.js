import React from "react";
import {
  ArrowRight,
  CheckCircleFill,
  Fingerprint,
  ShieldCheck,
} from "react-bootstrap-icons";
import "./App.css";
import widget1 from "./Image/widget-11.png";
import widget2 from "./Image/widget-12.png";

export const CompanyWork = () => {
  const businessAnalytics = [
    "Thought leadership",
    "Modernized prospecting",
    "Showcasing success",
    "Personal branding",
    "Better win rates",
    "Sales compliance",
  ];

  return (
    <>
      <section style={{ padding: "130px 10px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12 col-sm-12 ">
              <div className="pb-lg-4 pb-md-4 pb-sm-4 pb-4">
                <ShieldCheck
                  className="bg-primary text-white rounded-4 p-3"
                  size={"4rem"}
                />
              </div>
              <h2 className="mb-lg-3 mb-md-3 mb-sm-3 mb-3 fw-bold">
                <strong>Advanced Analytics, Understand Business</strong>
              </h2>
              <p>
                Distinctively promote parallel vortals with ubiquitous
                e-markets. Proactively benchmark turnkey optimize
                next-generation strategic leadership without resource sucking
                ideas.
              </p>
              <div className="row">
                {businessAnalytics.map((items, index) => {
                  return (
                    <div
                      className="d-flex col-12 col-lg-6 col-md-6 col-sm-6"
                      key={index}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <CheckCircleFill
                          className="text-primary"
                          size={"1.2rem"}
                        />
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className=" mx-lg-2 my-lg-2 mx-md-2 my-lg-2 mx-sm-3 my-sm-2 mx-3 my-2">
                          {items}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex text-primary fw-bold mt-3">
                Know More About Us
                <div className="d-flex justify-content-center align-items-center ms-2">
                  <ArrowRight />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center align-items-center">
              <img
                src={widget1}
                alt="widget1-img"
                className="img-fluid mt-5 mt-sm-5 mt-md-5 mt-lg-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* company work page 2 */}

      <section style={{ padding: "100px 10px" }}>
        <div className="container">
          <div className="row d-flex flex-lg-row flex-md-column flex-md-column-reverse flex-sm-column flex-sm-column-reverse  flex-column flex-column-reverse">
            <div className="col-12 col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center align-items-center">
              <img
                src={widget2}
                alt="widget2-img"
                className="img-fluid mt-5 mt-lg-0 "
              />
            </div>
            <div className="col-12 col-lg-6 col-md-12 col-sm-12 px-lg-5 px-md-5">
              <div className="pb-lg-4 pb-md-4 pb-sm-4 pb-4">
                <Fingerprint
                  className="bg-dark text-white rounded-4 p-3"
                  size={"4rem"}
                />
              </div>
              <h2 className="mb-lg-3 mb-md-3 mb-sm-3 mb-3 fw-bold">
                <strong>Match Everything to Brand and Style</strong>
              </h2>
              <p>
                Intrinsicly pontificate reliable metrics with enabled.
                Holisticly maintain clicks-and-mortar manufactured products
                empower viral customer service through resource deliverables.
              </p>
              <p>
                Customer service through resource pontificate reliable metrics
                with enabled expedite resource maximizing information maintain
                manufactured products.
              </p>
              <div className="d-flex text-primary fw-bold mt-3">
                Know More About Us
                <div className="d-flex justify-content-center align-items-center ms-2">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
