import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ci from "../assets/ContactImg.jpg";
import ai from "../assets/AddressIcon.png";
import pi from "../assets/PhoneIcon.png";
import cl from "../assets/Clock.png";

const Contact = () =>{
    return(
        <div>
            <Navbar/>
            <div style={{backgroundImage: "url(" + ci + ")",height:"25vh",textAlign:"center",justifyContent:"center"}}>
                <div>
                <h1 className="text-white font-light text-center text-5xl">Contact Us</h1>
                </div>
            </div>
            <div className="row">
            <div className="row m-5 max-w-sm rounded overflow-hidden shadow-2xl">
                <div className="px-6 py-4 text-center">
                    <img src = {ai} style={{height:"60px",marginLeft:"40%"}} alt="Address"/>
                    <div className="font-bold text-xl mb-2">Address</div>
                    <p className="text-gray-700 text-base">
                        1st Floor , Pearl Center
                        Senapati Bapat Marg,
                        Dadar (W)
                        Mumbai 400028                
                    </p>
                </div>
            </div>

            <div className="row m-5 max-w-sm rounded overflow-hidden shadow-2xl">
                <div className="px-6 py-4 text-center">
                    <img src = {pi} style={{height:"60px",marginLeft:"40%"}} alt="Address"/>
                    <div className="font-bold text-xl mb-2">Contact</div>
                    <p className="text-gray-700 text-base">
                    Mobile: (+91) 91 677 877 23
                    Campus Office : (+91) 22 2416 22 26 / Extn. 05
                    Email : enquiry@viie.edu.in    
                    </p>          
                </div>
            </div>
            
            <div className="row m-5 max-w-sm rounded overflow-hidden shadow-2xl">
                <div className="px-6 py-4 text-center">
                    <img src = {cl} style={{height:"60px",marginLeft:"40%"}} alt="Address"/>
                    <div className="font-bold text-xl mb-2">Hours of Operation</div>
                    <p className="text-gray-700 text-base">
                    Monday - Friday: 10 a.m. - 6 p.m.
                    </p>

                </div>
            </div>

            </div>

            <Footer/>
        </div>
    );
}


export default Contact;