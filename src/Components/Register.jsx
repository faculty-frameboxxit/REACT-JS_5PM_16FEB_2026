import axios from "axios";
import React, { useActionState, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormAction, useNavigate } from "react-router-dom";

function Register() {
  const [item, setItem] = useState([]);
  const navigation = useNavigate()
  const [data, action, pending] = useActionState(adduser, undefined);
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/user")
//       .then((res) => setItem(res.data))
//       .catch((err) => console.error(err));
//   }, []);
  function adduser(pre, formdata) {
    console.log(data);
    const name = formdata.get("username");
    const email = formdata.get("email");
    const password = formdata.get("password");
    console.log(name, email, password);
    axios.post("http://localhost:3000/user",{"name":name,"password":password,"email":email})
    navigation("/login")
  }
  return (
    <>
      <form action={action}>
        <div className="login-div border border-5 border-secondary mt-5 rounded-3 ">
          <Form.Label>Username : </Form.Label>
          <Form.Control
            type="text"
            //   id="inputPassword5"
            // size="20"
            name="username"
            className="input-width"
            placeholder="Enter Username"
          />
          <Form.Label>Email : </Form.Label>
          <Form.Control
            type="email"
            name="email"
            //   id="inputPassword5"
            // size="20"
            className="input-width"
            placeholder="Enter email"
          />
          <Form.Label>Password : </Form.Label>
          <Form.Control
            type="password"
            //   id="inputPassword5"
            // size="20"
            name="password"
            className="input-width"
            placeholder="Enter Password"
          />
          <div className="text-center">
            <Button type="submit" className="login-page-button ">
              Register
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
