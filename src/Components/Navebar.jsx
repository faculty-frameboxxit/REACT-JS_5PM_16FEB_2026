import React, { useEffect, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

function Navebar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Image src={logo} width={150} />

          <Nav className="me-auto">
            <Nav className="mx-3">
              <Link to="/home" className="text-white text-decoration-none">
                Home
              </Link>
            </Nav>
            <Nav className="mx-3">
              <Link to="/about" className="text-white text-decoration-none">
                About
              </Link>
            </Nav>
            <Nav className="mx-3">
              <Link to="/contact" className="text-white text-decoration-none">
                Contact
              </Link>
            </Nav>
          </Nav>

          {/* 🔥 CONDITION HERE */}
          {user ? (
            <>
              <Button
                className="mx-2"
                onClick={() => navigate("/profile")}
              >
                Profile
              </Button>

              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default Navebar;