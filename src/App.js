import Welcome from "./pages/welcome/welcome";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";

import FlightsTR from "./pages/flights/FlightsTR";
import FlightsMR from "./pages/flights/FlightsMR";

import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <Route path="flights/tr" element={<FlightsTR />} />
            <Route path="flights/mr" element={<FlightsMR />} />
            <Route path="flights/:numeroVol" element={<Single />} />
            <Route path="flights/new" element={<New/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
