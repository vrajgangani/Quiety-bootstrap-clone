import React from "react";
import { PlayCircleFill, StarFill } from "react-bootstrap-icons";
import ColonImage from "./Image/quotes-left.svg";
import ClientReviwImage from "./Image/t-1.jpg";
import Devloper1 from "./Image/1.jpg";
import Devloper2 from "./Image/2.jpg";
import Devloper3 from "./Image/3.jpg";
import Devloper4 from "./Image/4.jpg";
import Devloper5 from "./Image/5.jpg";
import "./App.css";

export const ClientReview = () => {
  const Devloper = [
    {
      img: <Devloper1 />,
      name: "Joe Richard",
      position: "Visual Designe",
    },
    {
      img: <Devloper2 />,
      name: "Neaj Morshed",
      position: "FrontEnd Developer",
    },
    {
      img: <Devloper3 />,
      name: "Joe Richard",
      position: "Software Engineer",
    },
    {
      img: <Devloper4 />,
      name: "Hanry Luice",
      position: "App devloper",
    },
    {
      img: <Devloper5 />,
      name: "Ami Nijai",
      position: "Customer Support",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 10px",
        background: "rgb(9,2,107)",
        background:
          "linear-gradient(90deg, rgba(9,2,107,1) 35%, rgba(14,66,142,1) 97%)",
      }}
      className="text-white"
    >
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
        <div className="text-center py-4">
          <h5 className="text-warning">Testimonial</h5>
          <h2 className="fw-bold ">
            <strong>What They Say About Us</strong>
          </h2>
          <span className="opacity-75">
            Uniquely promote adaptive quality vectors rather than stand-alone
            e-markets. pontificate alternative architectures whereas iterate.
          </span>
        </div></div>
        <div className="row py-4">
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 mb-4 ">
            <img
              src={ColonImage}
              alt="colon-imag"
              className="colon-img1  img-fluid"
            />
            <h3 className="fw-bold py-2">
              The Best Template You Got to Have it!
            </h3>
            <div className="five-start-rating d-flex text-warning pb-3">
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
            </div>
            <p className="opacity-75">
              Globally network long-term high-impact schemas vis-a-vis
              distinctive e-commerce cross-media infrastructures rather than
              ethical sticky alignments rather than global. Plagiarize
              technically sound total linkage for leveraged value media
              web-readiness and premium processes.
            </p>
            <h6 className="fw-bold">Joe Richard</h6>
            <span className="opacity-75">Visual Designe</span>
          </div>
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center custom-client-img">
            <img
              src={ClientReviwImage}
              alt="client-img-review"
              className="img-fluid  rounded-4 "
            />
            {/* <div className="watch-video d-flex justify-content-center align-items-center">
              <PlayCircleFill size={"2.4rem"} className="text-primary" />

              <p className=" h6 opacity-75 ms-lg-2 ms-md-3 ms-sm-2 ms-2 d-flex justify-content-center align-items-center text-dark">
                Watch demo
              </p>
            </div> */}
          </div>
          <div className="row g-3 ">
            {Devloper.map((item, index) => {
              return (
                <div className="col-12 col-lg-3 col-md-4 col-sm-6 " key={index} >
                  <div
                    className="devloper-profile d-flex align-items-center ps-lg-4 ps-md-1  ps-sm-3 ps-5  rounded-3 "
                    style={{
                      "borderColor": "#6565650f",
                      background: "rgba(255,255,255,.1)",
                      height: "80px",
                    }}
                  >
                    <img
                      src={item.img.type}
                      alt="devloper-img"
                      className="img-fluid rounded-circle me-3 h-75"
                    />
                    <div className="text-center">
                      <h6 className="fw-bold">{item.name}</h6>
                      <span>{item.position}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
