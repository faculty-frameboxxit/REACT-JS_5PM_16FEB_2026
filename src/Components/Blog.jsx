import React from 'react'
import About from './About'
import { useNavigate } from 'react-router-dom'
// import Navebar from './Navebar'
import { Navigate } from "react-router-dom";

function Blog() {
  const isAuth = false
  // const Navigate = useNavigate()
  return (
    <>
    {/* <Navebar/> */}
    <div>Blog</div>
    { isAuth ? <About/> : <Navigate to="/login" />}
    </>
  )
}

export default Blog