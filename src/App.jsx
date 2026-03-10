import React from "react";
import Demo from "./Demo";
import Greeting from "./Components/Greeting";
import Button from "./Components/Button";
import State from "./Components/State";
import UserProfile from "./Components/UserProfile";
import logo from "./assets/react.svg";
import State_Two from "./Components/State_Two";
import Lists from "./Components/Lists";
import TodoList from "./Components/TodoList";
import List_Task from "./Components/List_Task";
import Vishvdeep from "./Student_Task/vishvdeep";
import Event_Handling from "./Components/Event_Handling";
import Navebar from "./Components/Navebar";
import Login from "./Components/Login";
import New_login from "./Components/New_login";
import Page from "./Components/Page";

function App() {
  //   const employee = {
  //     name: "Rahul",
  //     role: "Frontend Developer",
  //     isOnline: true,
  //     salary: 50000,
  //     skills: ["HTML", "CSS", "JavaScript"],
  //     experience: 2
  //   };

  //   const currentYear = new Date().getFullYear();

  //   return (
  //     <div style={{ padding: "20px", fontFamily: "Arial" }}>

  //       {/* Task 1 */}
  //       <h1>Employee Profile</h1>

  //       {/* Task 2 */}
  //       <p>Name: {employee.name}</p>

  //       {/* Task 3 */}
  //       <p>Role: {employee.role}</p>

  //       {/* Task 4 & 12 */}
  //       <p
  //         style={{
  //           color: employee.isOnline ? "green" : "red",
  //           fontWeight: "bold"
  //         }}
  //       >
  //         Status: {employee.isOnline ? "Online" : "Offline"}
  //       </p>

  //       {/* Task 5 */}
  //       <p>Year: {currentYear}</p>

  //       {/* Task 6 */}
  //       <p>Salary: ${employee.salary}</p>

  //       {/* Task 7 */}
  //       <p>Experience: {employee.experience} years</p>

  //       {/* Task 8 */}
  //       <p>
  //         Level:{" "}
  //         {employee.experience > 3
  //           ? "Senior Developer"
  //           : "Junior Developer"}
  //       </p>

  //       {/* Task 13 */}
  //       <p>Total Skills: {employee.skills.length}</p>

  //       {/* Task 14 */}
  //       {employee.skills.length === 0 && (
  //         <p>No Skills Available</p>
  //       )}

  //       {/* Task 9 */}
  //       <ul>
  //         {employee.skills.map((skill, index) => (
  //           <li key={index}>{skill}</li>
  //         ))}
  //       </ul>

  //       {/* Task 10 */}
  //       <button>Contact Employee</button>

  //       {/* Task 11 */}
  //       <div>
  //         <img
  //           src="https://via.placeholder.com/150"
  //           alt="Profile"
  //         />
  //       </div>

  //       {/* Task 15 */}
  //       {/* All content wrapped inside single parent div */}

  //       <footer>
  //         <p>© {currentYear}</p>
  //       </footer>

  //     </div>
  //   );
  // }
  // const user = {
  //   name: "Amit",
  //   role: "Frontend Developer",
  //   isOnline: false,
  // };
  return (
    // <div>
    //   <h1>Hello ReactJS</h1>
    // <div/>
    <div>
      {/* <h2 className="">{user.name}</h2> */}
      {/* <p>{user.role}</p> */}
      <hr />
      {/* <img src="" alt="" /> */}
      {/* <Demo />
      <Greeting /> */}
      {/* <Button label="Het"/> */}
      {/* {user.isOnline ? <Button label="Login" /> : <Button label="Log-Out" />} */}
      {/* {} */}
      {/* <State /> */}
      {/* <UserProfile name="Rahul" role="Developer" avatar={logo} /> */}
      {/* <UserProfile name="Anita" role="Designer" avatar={logo} />  */}
      {/* <State_Two/> */}
      {/* <Lists/> */}
      {/* <TodoList/> */}
      {/* <List_Task/> */}
      {/* <Vishvdeep/> */}
      {/* <Button name="Hiya"/> */}
      {/* <Navebar/> */}
      {/* <Login/> */}
      <Page/>
      {/* <New_login/> */}
      {/* <Event_Handling/> */}
    </div>
  );
}

export default App;
