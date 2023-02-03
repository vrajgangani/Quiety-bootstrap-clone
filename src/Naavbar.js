import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import WhiteLgo from "./Image/logo-white.png";
import BlackLogo from "./Image/logo-color.png";
import Button from "react-bootstrap/Button";

export const Naavbar = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={"sticky-top custom-navbar"}
        >
          <Container fluid>
            <Navbar.Brand
              href="#logo"
              className="mx-lg-5 my-lg-3 mx-md-5 my-md-3 mx-sm-3 my-sm-2 mx-2 my-1"
            >
              <img src={BlackLogo} alt="brand-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={BlackLogo} alt="brand-logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                  <NavDropdown
                    title="Home"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="px-lg-3 px-md-1"
                    // style={{'color':chanegColor?'black':''}}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#service" className="px-lg-3 px-md-1">
                    Service
                  </Nav.Link>
                  <Nav.Link href="#about" className="px-lg-3 px-md-1">
                    About
                  </Nav.Link>
                  <Nav.Link href="#pricing" className="px-lg-3 px-md-1">
                    Pricing
                  </Nav.Link>
                  <NavDropdown
                    title="Pages"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="px-lg-3 px-md-1"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav.Link
                  href="#signin"
                  className="py-2 px-3 me-lg-4 me-md-2 text-center"
                >
                  SignIn
                </Nav.Link>
                <div className="text-center">
                  <Button
                    variant="primary"
                    className="px-lg-4 py-lg-2 me-lg-5 px-md-4 py-md-2 mx-auto"
                  >
                    Get Started
                  </Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
