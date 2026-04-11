// import { useState } from "react";

// const useToggle = (defaultVal) => {
//   const [sate,setState]=useState(defaultVal);
//   function toggle(val) {
//     if (typeof val!=`boolean`) {
//         setState(!sate)
//     }else{
//         setState(val)
//     }
//   }
//   return[sate,toggle]
// };

// export default useToggle;

import React, { useState } from "react";

function useToggle(defaultVal) {
  const [toggle, setToggle] = useState(defaultVal);
  function item(newval) {
    if (typeof newval != `boolean`) {
      console.log("if");
      setToggle(!toggle);
    } else {
      console.log("else");
      setToggle(newval);
    }
  }
  return [toggle, item];
}

export default useToggle;
