import React from 'react'

function Lecture_9() {
 let name = true 
 function check() {
  if (name) return <p>name is Available</p>;
  
  else return <h2>name not is Available</h2>
 } 
 function print() {
  if (name == true) {
    return("true")
 }
 else{
  return("false")
 }
 }
  return (
    <>
    <h1>{check()}</h1>
    <h2>{print()}</h2>
    <h1>name:-{name ?"true-ter":"false-ter"}</h1>

    {}
    </>
  )
}

export default Lecture_9