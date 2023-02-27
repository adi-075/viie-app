import React from "react";
import Navbar from "./Navbar";
import "../index.css";
// import Footer from "./Footer";
// import Signup from "./Signup";

const Home = () => {
  return (
    <>
      <Navbar />
      <section class="hero" className="w-auto min-h-full min-w-full"></section>

      <div className="flex bg-gray-100">
        <div className="flex-1">
          <h1 className="w-full text-center py-12 px-4 text-5xl font-semibold text-red-900">
            Discover VIIE
          </h1>
          <p className="text-xl text-gray-900 px-12 ">
            Vidyalankar has collaborated with top universities in the USA,
            CANADA, UK, Australia, and New Zealand and has developed some unique
            programs at the undergraduate and postgraduate levels. Our programs
            equip the students with the right toolset, suitable skillset and,
            more importantly, the right mindset. Ever since they were started in
            2006, they have been well received by the students, their parents
            and by the industry.
          </p>
          <p className="text-xl text-gray-900 px-12 ">
            Our Global Pathway program gives students the best of both worlds;
            studying initial years with us in India offers students a solid
            foundation. The academic rigor makes them ready to take on
            international challenges eventually. Vidyalankar has a legacy of
            countless successful candidates over these 15 years of operation.
            {/* <b className="flex flex-col text-center py-5">We are VIIE</b> */}
          </p>
        </div>
        <div className="flex">
          <iframe
            className="px-11 py-6"
            width="854"
            height="480"
            src="https://www.youtube.com/embed/tBDfWEc2CLA"
            title="Vidyalankar Institute For International Education"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
