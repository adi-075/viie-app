import React from "react";
import ci from "../assets/ContactImg.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Footer from "./Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div
        style={{
          backgroundImage: "url(" + ci + ")",
          height: "25vh",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div style={{marginLeft:"36%"}}>
          <h1 className="text-white font-serif text-center text-7xl absolute mt-20">
            Contact Us
          </h1>
        </div>
      </div>


      <div className="flex flex-col md:flex-row relative lg:top-48">
        {/* making the parent div as flex */}
        <div className="mx-auto max-w-sm rounded overflow-hidden shadow-2xl">
          <div className="px-2 py-2 text-center">
            <FaMapMarkedAlt
              className="mx-auto m-3"
              size={35}
              style={{ color: "#6b0707" }}
            ></FaMapMarkedAlt>
            <div className="font-bold text-xl mb-2">Address</div>
            <p className="text-gray-700 text-base">
              1st Floor , Pearl Center Senapati Bapat Marg, Dadar (W) Mumbai
              400028
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-sm rounded overflow-hidden shadow-2xl">
          <div className="px-2 py-2 text-center">
            <FaPhoneAlt
              className="mx-auto m-3"
              size={35}
              style={{ color: "#6b0707" }}
            ></FaPhoneAlt>
            <div className="font-bold text-xl mb-2">Contact</div>
            <p className="text-gray-700 text-base">
              Mobile: (+91) 91 677 877 23 Campus Office : (+91) 22 2416 22 26 /
              Extn. 05 Email : enquiry@viie.edu.in
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-sm rounded overflow-hidden shadow-2xl">
          <div className="px-[5rem] py-2 text-center">
            <FaClock
              className="mx-auto m-3"
              size={35}
              style={{ color: "#6b0707" }}
            ></FaClock>
            <div className="font-bold text-xl mb-2">Hours of Operation</div>
            <p className="text-gray-700 text-base">
              Monday - Friday: 10 a.m. - 6 p.m.
            </p>
          </div>
        </div>
      </div>      
      <br />
      <br />
      <div className="relative lg:top-96">
        <Footer />
      </div>

      
    </div>
  );
};
export default Contact;
