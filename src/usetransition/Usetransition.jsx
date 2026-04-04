import React, { useId, useReducer, useState, useTransition } from "react";
import TaskInput from "./TaskInput";
import FilterButtons from "./FilterButtons";
import TaskList from "./TaskList";
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: action.id, text: action.text, completed: false }];

    case "TOGGLE":
      return state.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task,
      );

    default:
      return state;
  }
}
function Usetransition() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [filter, setFilter] = useState("ALL");
  const [isPending, startTransition] = useTransition();
  const baseId = useId();

  // Add task
  const addTask = (text) => {
    dispatch({
      type: "ADD",
      id: baseId + Date.now(),
      text,
    });
  };

  // Toggle task
  const toggleTask = (id) => {
    dispatch({ type: "TOGGLE", id });
  };

  // Filter logic (wrapped in transition)
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleFilter = (type) => {
    setFilter(type);

    startTransition(() => {
      let result = tasks;

      if (type === "COMPLETED") {
        result = tasks.filter((t) => t.completed);
      } else if (type === "PENDING") {
        result = tasks.filter((t) => !t.completed);
      }

      setFilteredTasks(result);
    });
  };
  // const [input, setInput] = useState("");
  // const [list, setList] = useState([]);
  // const [isPending, startTransition] = useTransition();

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setInput(value);

  //   startTransition(() => {
  //     const newList = [];
  //     for (let i = 0; i < 20; i++) {
  //       newList.push(value + " Item " + i);
  //     }
  //     setList(newList);
  //   });
  // };
  return (
    <>
     <h2>Smart Task Manager</h2>

      <TaskInput onAdd={addTask} />
      <FilterButtons onFilter={handleFilter} />

      {isPending && <p>Loading...</p>}

      <TaskList
        tasks={filter === "ALL" ? tasks : filteredTasks}
        onToggle={toggleTask}
      />
  
      {/* <h2>useTransition Example</h2>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something..."
      />

      {isPending && <p>Updating list...</p>}

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </>
  );
}

export default Usetransition;
