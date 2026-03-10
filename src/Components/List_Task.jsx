import React, { useState } from "react";

function List_Task() {
  const [item, setItem] = useState("");
  const [show, setShow] = useState([]);
  const [editId, setEditId] = useState(null);
  // console.log(item)
  function addlist() {
    if (item.trim() === "") return;
    const newData = {
      id: Date.now(),
      text: item,
    };
    setShow([...show, newData]);
    // setItem("");
    console.log(newData.id);
    // console.log(item)
  } 
  function del(id) {
    // console.log(id)
    const remove = show.filter((show) => show.id !== id);
    setShow(remove);
    
  }
  function startEdit(data) {
    setItem(data.text);
    setEditId(data.id);
  }
  function updateList() {
    const updated = show.map((data) =>
      data.id === editId ? { ...data, text: item } : data,
    );

    setShow(updated);
    setEditId(null);
    setItem("");
  }
  function cancelEdit() {
    setEditId(null);
    setItem("");
  }
  return (
    <>
      <h1>List</h1>
      <input
        type="text"
        placeholder="Enter Name or List"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      {editId ? (
        <>
          <button style={{ marginLeft: 10 }} onClick={updateList}>
            Update
          </button>
          <button style={{ marginLeft: 10 }} onClick={cancelEdit}>
            Cancel
          </button>
        </>
      ) : (
        <button style={{ marginLeft: 10 }} onClick={addlist}>
          Add List
        </button>
      )}
      {show.map((Data) => (
        // console.log(Data.text)
        <ul key={Data.id}>
          <li>
            {Data.text}
            <button style={{ marginLeft: 10 }} onClick={() => startEdit(Data)}>
              Edit
            </button>
            <button
              style={{ margin: "0 0 0 10px" }}
              onClick={() => del(Data.id)}
            >
              Delete
            </button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default List_Task;
