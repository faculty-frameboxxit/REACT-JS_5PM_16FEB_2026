import React, { createContext, useRef, useState } from "react";
import CompB from "./CompB";

function CompA() {
  // const [user, setUser] = useState("Het");
  const ref = useRef();
  return (
    <div className="box">
      <h1>CompA</h1>
      {/* <p>{`Hello ${user}`}</p> */}
      {/* <data.Provider value={user}>
      </data.Provider> */}
      <CompB ref={ref} />
      <button onClick={() => ref.current.hello()}>call Button</button>
    </div>
  );
}

// export const data = createContext()
export default CompA;
