import React from "react";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Contact from "./routes/Contact";

import { Routes, Route } from "react-router-dom";
import Academics from "./components/Academics";

// import Register from "./Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign-Up" element={<Signup />} />
        <Route path = "/Contact" element={<Contact/>}/>
        <Route path = "/Academics" element={<Academics/>}/>
      </Routes>
    </>
    // <div className="App">
    //   <Navbar />
    //   <div className="content">
    //     <Home />
    //     <Login />
    //   </div>
    // </div>
  );
}

export default App;
