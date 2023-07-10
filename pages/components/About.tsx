import React from "react";
import config from "../index.json";
import Image from "next/image";

const About = () => {
  const about = config.about;
  const skills = about.skills;
  return (
    <div id="About" className="px-8 md:px-32 pb-32 content-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
      <h1 className="pt-12 uppercase font-bold text-center text-white text-bold text-4xl">{about.title}</h1>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center">
        <div className="w-1/2 flex justify-center content-center">
          <Image 
            src={about.image} 
            alt="about" 
            width={300} 
            height={300}
            />
        </div>
        <div className="pt-8 md:py-0 md:w-1/2 text-white md:ml-4 text-center md:text-left">
          <div className="about__primary">
            <span>{about.primary}</span>
          </div>
          <div className="mt-6">
            <p className="mb-2">Skills : </p>
            <div className="flex space-x-4 justify-start">
            {skills.map((skill,index)=>{
              return <div key={skill.alt} className="flex flex-col items-center">
                <Image 
                className="w-12 h-12"
                src={skill.image} 
                alt={skill.alt} 
                width={48} 
                height={48}/>
            </div>})}
            </div>
          </div>
          <div className="mt-6 mx-auto md:mx-0 border-2 border-white py-1 px-2 w-36 text-center font-bold">
            <a href="https://flowcv.com/resume/he6814bsp5" target="_blank" className="about__resume text-white text-l">View Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;