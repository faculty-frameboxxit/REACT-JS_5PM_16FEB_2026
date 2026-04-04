import React, { useImperativeHandle,forwardRef } from "react";

function Child(props,ref) {
    useImperativeHandle(ref,()=>{
        return{
            hello
        }
    })

    const hello = ()=>{
        console.log("this is my first File")
    }
  return (
    <div>
      <h1>Child</h1>
    </div>
  );
}

export default forwardRef(Child);
