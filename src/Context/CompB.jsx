import React, { useImperativeHandle,forwardRef } from "react";
import CompC from "./CompC";

function CompB(props,ref) {
  // useImperativeHandle(ref,()=>{
  //   return{
  //     hello
  //   }
  // })
  useImperativeHandle(ref,()=>({hello}))
  const hello =()=> {
    return(
      console.log("Hello Denish")
    )
  }
  return (
    <div className="box">
      <h1>CompB</h1>
      {/* <CompC /> */}
    </div>
  );
}

export default forwardRef(CompB);
