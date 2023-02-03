import { React } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import "./index.css";
import HomeImage from "./Image/hero-1.png";
import Client1 from "./Image/client-1.svg";
import Client2 from "./Image/client-2.svg";
import Client3 from "./Image/client-3.svg";
import { PlayCircle, PlayCircleFill } from "react-bootstrap-icons";
import { useState } from "react";

export const Home = () => {
  const [iconFill, setIconFill] = useState(true);
  return (
    <>
      <section>
        <div className="main1">
          

          <div className="container-fluid text-white p-4 p-lg-5 p-md-5 p-sm-4">
            <div className="row">
              <div className="col col-12 col-lg-6 col-md-6 col-sm-12 ">
                <p className=" display-4 fw-bolder">
                  Get Fully Control and Visibility your Company
                </p>
                <h5 className="opacity-75 py-2 py-lg-1 py-md-1 py-sm-1 ">
                  Proactively coordinate quality quality vectors vis-a-vis
                  supply chains. Quickly engage client-centric web services.
                </h5>
                <div className="demo-div my-lg-5  my-sm-4 my-sm-3 my-4 d-flex justify-content-start align-items-center">
                  <Button
                    variant="primary"
                    className="px-lg-4 py-lg-2 px-md-3 py-md-2 px-sm-3 py-sm-2 px-3 py-2"
                  >
                    Request For Demo
                  </Button>
                  <div className="watch-demo d-flex justify-content-center align-items-center ms-lg-3 ms-md-3 ms-sm-3 ms-3">
                    {iconFill ? (
                      <PlayCircle size={"2.4rem"} onMouseEnter={() => setIconFill(!iconFill)} />
                    ) : (
                      <PlayCircleFill size={"2.4rem"} onMouseLeave={ ()=>setIconFill(!iconFill)} />
                    )}

                    <p className=" h6 opacity-75 ms-lg-2 ms-md-3 ms-sm-2 ms-2 d-flex justify-content-center align-items-center">
                      Watch demo
                    </p>
                  </div>
                </div>
                <div className="homepage-client row">
                  <p className="h5 opacity-75">Our Top Clients</p>
                  <div className="client-details col-12">
                    <img src={Client1} alt="client-details-img" className="ps-0" />
                    <img src={Client2} alt="client-details-img" />
                    <img src={Client3} alt="client-details-img" />
                  </div>
                </div>
              </div>
              <div className="col col-12 col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center ">
                <img src={HomeImage} alt="car-img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
