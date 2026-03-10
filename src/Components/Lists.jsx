import React from "react";

function Lists() {
  const item = ["Het", "Kavy", "Hiya"];
  return (
    <>
      <h1>Hello</h1>
      <ul>
        {item.map((item,index) => (
            // console.log(index    )
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Lists;
