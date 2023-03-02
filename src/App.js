import React from "react";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import { Routes, Route } from "react-router-dom";

// import Register from "./Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign-Up" element={<Signup />} />
        {/* Route to Signup component which includes navbar and footer */}
      </Routes>
    </>
  );
}

export default App;
