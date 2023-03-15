import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import VIIE from "../assets/VIIE.png";
import "./NavbarStyles.css";
import "../index.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header>
      <nav class="navbar">
        <div className="logo">
          <Link to="/">
            <img src={VIIE} alt="VIIE LOGO" />
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/Academics" className="nav-link">
              Academics
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#ffffff" }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
