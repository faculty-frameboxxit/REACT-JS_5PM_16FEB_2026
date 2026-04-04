import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main_Router from "./Router/Main_Router";
import "./App.css"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <Main_Router/>
  </BrowserRouter>,
);
