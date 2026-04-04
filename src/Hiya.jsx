import React from "react";
import { useParams } from "react-router-dom";

export default function Hiya() {
  // const {id} = useParams()
  const xyz = [
    { id: 1, name: "qwr" },
    { id: 2, name: "dfds" },
  ];
  // const xyz = (e)=>{
  //   console.log(e.target.value)
  // }
  return (
    <>
      {/* {xyz.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))} */}
      <div>Hiya</div>
      <p>{id}</p>
      <input type="text" onChange={xyz} />
    </>
  );
}
