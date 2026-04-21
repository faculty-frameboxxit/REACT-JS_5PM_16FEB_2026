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

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserData, getUsers } from '../Store/ApiGet'
import { Link } from 'react-router-dom'
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi'

function Api() {
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.updateApi)
  useEffect(()=>{
    dispatch(getUsers())
  },[])

  const handleDeleteTodo = (id)=>{
    dispatch(deleteUserData(id))
  }

  return (
   <>
   <h1>Api Print</h1>
   <div className="mt-12">
        {user?.map((item) => {
          return (
            <li className="p-4  border items-start border-slate-300 my-3 flex justify-between ">
              <div key={item.id}>
                <h3>Id: {item.id}</h3>
                <h3>Name: {item.name}</h3>
                <h3>Password: {item.password}</h3>
                <h3>email: {item.email}</h3>
          
              </div>
              <div className="flex gap-2">
                <Link href={"#"}>
                  <button>
                    <HiPencilAlt size={25} />
                  </button>
                </Link>
                <button onClick={() => handleDeleteTodo(item.id)}>
                  <HiOutlineTrash size={25} color="red" />
                </button>
              </div>
            </li>
          );
        })}
      </div>
   </>
  )
}

export default Api