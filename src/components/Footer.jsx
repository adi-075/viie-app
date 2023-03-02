import React from "react";
import "./FooterStyles.css";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="content">
          <div className="rights">
            <p>Copyright &copy; 2023. All rights reserved.</p>
          </div>
          <div className="footer-bottom">
            <a
              href="https://www.facebook.com/vidyalankar.VIIE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={20}
                style={{ color: "#d3d3d3", marginRight: "10px" }}
              ></FaFacebook>
            </a>
            <a
              href="https://www.youtube.com/@viievidyalankar3834"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                size={20}
                style={{ color: "#d3d3d3", marginRight: "10px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/viie_college/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={20}
                style={{ color: "#d3d3d3", marginRight: "10px" }}
              />
            </a>
            <a
              href="https://in.linkedin.com/company/vidyalankar-institute-for-international-education"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#d3d3d3", marginRight: "10px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
