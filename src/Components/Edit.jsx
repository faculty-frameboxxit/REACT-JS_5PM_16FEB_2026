import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserData, getUsers } from "../Store/ApiGet";
import { Link, useParams } from "react-router-dom";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";

function Edit() {
    const dispatch = useDispatch()
const {id} = useParams()
  const {user} = useSelector((state) => state.updateApi)
   useEffect(()=>{
    dispatch(editUserData(id))  
  },[])
  console.log(user)
  return (
    <>
      <div>Edit</div>
      <div className="mt-12">
        {user?.map((item) => {
          return (
            <li className="p-4  border items-start border-slate-300 my-3 flex justify-between ">
              <div>
                <input type="text" /> <br /><br />
                <input type="text" /><br /><br />
                <input type="text" /><br /><br />

              </div>
              <div className="flex gap-2">
                <Link href={"#"}>
                  <button onClick={() => handleeditTodo(item.id)}>
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
  );
}

export default Edit;
