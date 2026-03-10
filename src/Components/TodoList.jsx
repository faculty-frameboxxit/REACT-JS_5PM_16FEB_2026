import React, { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  function addItem() {
    console.log("first");
    if (input.trim() === "") return;
    const newItem = {
      id: Date.now(), // unique key
      text: input,
    };
    setItem([...item,newItem])
    setInput("")
  }
  function deleteItem(id) {
   console.log(id)
   const remove = item.filter((item)=> item.id !==id);
   console.log(item)
   setItem(remove)

  }
  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addItem}>Add</button>
      <ul>
        {item.map((item) => (
          <li key={item.id}>
            {item.text}
              <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
