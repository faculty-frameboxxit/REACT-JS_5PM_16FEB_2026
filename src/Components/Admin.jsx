import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserData, editUserData, getUsers } from "../Store/ApiGet";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.updateApi);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const handleeditTodo = (id) => {
    console.log("object");
    navigate(`/edit/${id}`)
  };
   const handleDeleteTodo = (id)=>{
      dispatch(deleteUserData(id))
    }
  // function handleeditTodo(item) {
  //   console.log("object");
  //   navigate("edit");
  // }
  return (
    <>
      <h1>Api Get</h1>
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
                {/* <Link href={"#"}> */}
                  <button onClick={() => handleeditTodo(item.id)}>
                    <HiPencilAlt size={25} />
                  </button>
                {/* </Link> */}
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

export default Admin;
