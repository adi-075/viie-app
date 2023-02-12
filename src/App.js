import React from "react";
// import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";

// import Register from "./Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/Sign-Up" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
