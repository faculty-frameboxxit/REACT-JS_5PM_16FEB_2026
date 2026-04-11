import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Hiya from "../Hiya";
import Navebar from "../Components/Navebar";
// import Home from "../Components/Home";
import { lazy, Suspense } from "react";
// import UseEffect from "../Components/useEffect";
import UserProfile from "../Components/UserProfile";
import UseEffect from "../Components/UseEffect";
import Page from "../Components/Page";
import Ref from "../Components/Ref";
import CompA from "../Context/CompA";
import List_Task from "../Components/List_Task";
import Parent from "../Components/Parent";
import State from "../usetransition/State/State";
import Usetransition from "../usetransition/Usetransition";
import Lift from "../State Lifting/Lift";
import Memo from "../Memo/Memo";
import Callback from "../Callback/Callback";
import UseActionState from "../useActionState/UseActionState";
import UseFormStatus from "../useFormStatus/UseFormStatus";
import UseOptimistic from "../useOptimistic/UseOptimistic";
import UseDeferredValue from "../useDeferredValue/UseDeferredValue";
import Custom_hook from "../Custom_Hook/Custom_hook";
import Counter from "../Custom_Hook/Counter";
import Myname from "../Myname";
import Hoc from "../HOC/Hoc";

function Main_Router() {
  // const Home = lazy(() => import("../Components/Home"));
  const Home = lazy(() => import("../Components/Home"));
  return (
    <Routes>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      <Route path="/" element={<Navebar />}>
        <Route index element={<Page />} />
        <Route
          path="home"
          element={
            <Suspense fallback={<p>Hello ......</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="xyz/:id" element={<Hiya />} />
        <Route path="login" element={<Login />} />
        <Route path="useEffect" element={<UseEffect />} />
        <Route path="userProfile" element={<UserProfile />} />
        {/* <Route path="ref" element={<UseRef />} /> */}
        <Route path="compA" element={<CompA />} />
        <Route path="ref" element={<Ref />} />
        <Route path="list" element={<List_Task />} />
        <Route path="parent" element={<Parent />} />
        {/* <Route path="counter" element={<Counter />} /> */}
        <Route path="state" element={<State />} />
        <Route path="usetransition" element={<Usetransition />} />
        <Route path="lift" element={<Lift />} />
        <Route path="memo" element={<Memo />} />
        <Route path="callback" element={<Callback />} />
        <Route path="useActionState" element={<UseActionState />} />
        <Route path="useFormStatus" element={<UseFormStatus />} />
        <Route path="useOptimistic" element={<UseOptimistic />} />
        <Route path="useDeferredValue" element={<UseDeferredValue />} />
        <Route path="Custom_hook" element={<Custom_hook />} />
        <Route path="Counter" element={<Counter />} />
        <Route path="myname" element={<Myname />} />
        <Route path="hoc" element={<Hoc />} />
      </Route>
    </Routes>
  );
}

export default Main_Router;
