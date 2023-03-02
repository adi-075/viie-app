import React from "react";
import "../index.css";

const Home = () => {
  return (
    <>
      <div class="w-full h-full">
        <div className="min-h-screen">
          <div className="w-full mx-auto text-center text-2xl sm:text-4xl py-5">
            <h1>This is VIIE</h1>
          </div>
          <div className="max-w-screen mx-auto flex flex-col sm:flex-row">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
