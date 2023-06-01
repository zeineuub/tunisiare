import Welcome from "./pages/welcome/welcome";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";

import Flights from "./pages/flights/Flights";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import List from "./pages/list/List";

//import Home from "./pages/home/Home";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Welcome />} />
            <Route path="signin" element={<Login />} />
            <Route path="signin" element={<Login />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="signup" element={<Register />} />
            <Route path="users" element={<List />} />
            <Route path="profile" >
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="flights">
              <Route index element={<Flights />} />
              <Route path=":flightNumber" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Flight" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
