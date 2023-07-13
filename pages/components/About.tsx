import React from "react";
import config from "../index.json";
import Image from "next/image";

const About = () => {
  const about = config.about;
  const skills = about.skills;
  return (
    <div
      id="About"
      className="px-8 md:px-32 pb-32 content-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
    >
      <h1 className="pt-12 uppercase font-bold text-center text-white text-bold text-4xl">
        {about.title}
      </h1>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center">
        <div className="w-1/2 flex justify-center content-center">
          <Image src={about.image} alt="about" width={300} height={300} />
        </div>
        <div className="pt-8 md:py-0 md:w-1/2 text-white md:ml-4 text-center md:text-left">
          <div>
            <span>{about.primary}</span>
          </div>
          <div className="mt-6">
            <p className="mb-2">Skills : </p>
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 ">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={skill.alt}
                    className="group flex flex-col items-start relative w-1/5 md:w-auto"
                  >
                    <div className="mb-3">
                      <Image
                        src={skill.image}
                        alt={skill.alt}
                        className="w-16 h-16"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="absolute">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-14 bg-white bg-opacity-80 px-2 py-1 rounded text-black text-center shadow-md">
                        {skill.alt}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6 mx-auto md:mx-0 border-2 border-white py-1 px-2 w-36 text-center font-bold">
            <a
              href="https://flowcv.com/resume/he6814bsp5"
              target="_blank"
              className=" text-white text-l"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
