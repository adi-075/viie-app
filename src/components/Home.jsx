import React from "react";
import "../index.css";
//import student from "../assets/student-section.png";
import aff from "../assets/Affordable-Edu.jpg";
import redf from "../assets/frame-red.png";

const Home = () => {
  return (
    <>
      <div>
        <div className="min-h-screen min-w-screen">
          <div class="e-hosted-video" className="w-full h-full">
            <video
              width="1920"
              height="1080"
              className="mx-auto"
              src="https://viie.edu.in/wp-content/uploads/2023/02/Untitled-1-1.mp4"
              loop
              autoPlay
              muted="muted"
              controlsList="nodownload"
            ></video>
          </div>
          <div className="min-w-screen min-h-max md:bg-[url('grid.png')] bg-no-repeat bg-fixed bg-cover p-5 md:p-20">
            <h1 className="text-3xl md:text-5xl text-[#6B0707] order-0 py-10 mx-auto sm:mx-20 font-bold">
              This is VIIE
            </h1>
            <div className="md:px-20 text-black font-semibold text-left">
              <h2>
                Vidyalankar has collaborated with top universities in the USA,
                CANADA, UK, Australia, and New Zealand and has developed some
                unique programs at the undergraduate and postgraduate levels.Our
                programs equip the students with the right toolset, suitable
                skillset and, more importantly, the right mindset. Ever since
                they were started in 2006, they have been well received by the
                students, their parents and by the industry.
              </h2>
              <div className="py-10">
                <button className="bg-red-900 px-6 py-2 rounded-md text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <section class="min-w-screen min-h-max hidden xl:block">
            <img src={aff} alt="Affordable Education" />
            <div class="top-right">
              <h1 class="min-w-screen hidden xl:block absolute xl:top-[1500px] xl:left-[1000px] text-left text-6xl font-bold text-red-900">
                Affordable
                <br />
                International
                <br />
                Education
                <br />
                <h3 className="py-2 text-lg text-gray-800">
                  Take your education to new heights and explore the world with
                  our affordable international education program.
                </h3>
                <button className="bg-white rounded-md text-red-900 border border-red-900 text-xl py-2 px-3">
                  Learn More
                </button>
              </h1>
            </div>
          </section>
          <div className="min-w-screen">
            <img src={redf} alt="Red-Frame" />
          </div>

          {/* <div className="max-w-screen mx-auto flex flex-col sm:flex-row">
            <div className="flex text-gray-500 text-center px-10 text-2xl sm:px-12">
              Vidyalankar has collaborated with top universities in the USA,
              CANADA, UK, Australia, and New Zealand and has developed some
              unique programs at the undergraduate and postgraduate levels.Our
              programs equip the students with the right toolset, suitable
              skillset and, more importantly, the right mindset. Ever since they
              were started in 2006, they have been well received by the
              students, their parents and by the industry.
            </div>
            <div className="flex order-1 sm:order-0 mx-auto py-6 sm:mx-7 sm:flex">
              <iframe
                src="https://www.youtube.com/embed/tBDfWEc2CLA"
                title="Vidyalankar Institute For International Educaition"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
