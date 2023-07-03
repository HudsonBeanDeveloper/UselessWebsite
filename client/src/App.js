//Imports
import React from "react";
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";
import Store from "./pages/Store";
import Profiles from "./pages/Profiles";
import Subscriptions from "./pages/Subscriptions";

//Main
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Explore" element={<Explore />} />
      <Route path="/Saved" element={<Saved />} />
      <Route path="/Store">
        <Route index element={<Store />}></Route>
        <Route path="Subscriptions" element={<Subscriptions />}></Route>
      </Route>
      <Route path="/Profiles">
        <Route path=":id/:user_name" element={<Profiles />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
