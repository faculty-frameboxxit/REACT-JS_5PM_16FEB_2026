import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import Home from './Home'

function Navebar() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar href="#home"><Link to={"/"}>Navbar</Link></Navbar>
          <Nav className="me-auto">
            <Nav href="#home"><Link to={"home"}>Home</Link></Nav>
            <Nav href="#features"><Link to={"about"}>About</Link></Nav>
            <Nav href="#pricing"><Link to={"blog"}>Blog</Link></Nav>
            {/* <Nav href="#ref"><Link to={"ref"}>UseRef</Link></Nav> */}
            {/* <Nav href="#compa"><Link to={"compA"}>CompA</Link></Nav> */}
            <Nav href="#ref"><Link to={"ref"}>ref</Link></Nav>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  )
}

export default Navebar