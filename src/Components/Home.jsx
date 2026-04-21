// import React from 'react'
// import Navebar from './Navebar'
// import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
// import { Button } from 'react-bootstrap'

// function Home() {
//     const naviget = useNavigate()
//     const users = [
//     { id: 1, name: "Rahul" },
//     { id: 2, name: "Amit" },
//     { id: 3, name: "Priya" },
//   ];
//   function submit(id) {
//     naviget(`/xyz/${id}`)
//   }
//   return (
//     <>
//     {/* <Navebar/>   */}
//     <h1>Home</h1>
     
//     <Button onClick={()=>naviget("/")}>Back to Home</Button>
//     {users.map((data)=>(
//         <>
//         <p className='mx-5'>{data.name}</p>
//         <Button className='mx-5' onClick={()=>submit(data.id)}>ID</Button>
//         </>
//     ))}
//     </>
//   )
// }

// export default Home
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/login");
    }
  }, []);

  return <h1>Home Page (Protected)</h1>;
}

export default Home;