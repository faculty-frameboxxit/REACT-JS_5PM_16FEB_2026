import React, { useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

import logo from "../assets/Logo.png";
import Home from "./Home";

function Navebar() {
    const [isId,setisId] = useState(false)
   const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Image src={logo} width={150} />
          <Nav className="me-auto text-decoration-none mx-1 ">
            <Nav className="fs-6 mx-3">
              <Link to={"home"} className="text-decoration-none text-white">
                Home
              </Link>
            </Nav>
            <Nav className="fs-6 mx-3 ">
              <Link to={"about"} className="text-decoration-none text-white">
                About
              </Link>
            </Nav>
            <Nav href="#" className="fs-6 mx-3 ">
              <Link to={`contact`} className="text-decoration-none text-white">
                Contact
              </Link>
            </Nav>
            <Nav href="#" className="fs-6 mx-3">
              <Link to={"blog"} className="text-decoration-none text-white">
                Blog
              </Link>
            </Nav>
          </Nav>
          {isId ? (
            <Button
              className="button-bg-color"
              onClick={() => navigate("login")}
            >
              Login
            </Button>
          ) : (
            <Button
              className="button-bg-color"
              onClick={() => navigate("register")}
            >
              Register-Now
            </Button>
          )}
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navebar;
