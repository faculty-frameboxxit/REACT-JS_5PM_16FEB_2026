// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Api() {
//   const [item, setItem] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/user")
//       .then((res) => setItem(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   console.log(item);
//   return (
//     <>
//       <h1>Api</h1>
//       {item.map((de, index) => (
//         <ul key={index}>  
//           <li >{de.id}</li>
//           <li >{de.email}</li>
//           <li >{de.rol}</li>
//           <li >{de.password}</li>
//           <li >{de.name}</li>
//           <button>edit</button>
//           <button>del</button>
//         </ul>
//       ))}
//     </>
//   );
// }

const Api = async () => {
  const res = await fetch("http://localhost:3000/user");
  
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  
  return res.json();
};
export default Api;