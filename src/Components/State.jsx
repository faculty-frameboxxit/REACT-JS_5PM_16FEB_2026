import React, { useState } from "react";

function State(avatar,role) {
  const [show, setShow] = useState(false);
  //   const [name, setName] = useState("Rahul");
  const [name, setName] = useState("");
  const [age, setAge] = useState(20);
  const [user, setUser] = useState({ name: "Amit", city: "Delhi" });

  return (
    <>
      {/* <div>
        <img src={avatar} alt={name} width="50" />
        <h4>{name}</h4>
        <p>{role}</p>
      </div> */}
      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3>Hello, {name}</h3>
      </div>
      <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <p>This text is visible now 👀</p>}
      </div>
      <div>
        <h3>
          {name} is {age} years old
        </h3>
        <button onClick={() => setAge(age + 1)}>Increase Age</button>
      </div>
      <div>
        <h3>
          {user.name} from {user.city}
        </h3>
        <button onClick={() => setUser({ ...user, city: "Mumbai" })}>
          Change City
        </button>

      </div>
    </>
  );
}
export default State;
