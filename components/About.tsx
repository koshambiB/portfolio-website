import React from 'react'

const About = () => {
  return (
    <div className="relative flex justify-center mx-6 md:mx-10 font-gowun items-center pt-8 mb-12">
      <div className="text-center ">
        <p className=" text-2xl md:text-4xl text-foreground ">Hi, I am Koshambi Bardhan</p>
        <p className="text-greencolor text-xl md:text-4xl pt-5 pb-8 font-bold">I am an open-source developer</p>
        <p className="text-sm md:text-xl text-justify md:text-center text-gray-700 font-extralight pb-10 leading-relaxed">
        I have a strong ability to manage projects efficiently and thrive in collaborative environments, where open communication and teamwork are key to achieving goals.
        I specialize in front-end technologies, crafting engaging and user-friendly interfaces. 
        I also have a keen interest in cybersecurity and web exploitation, actively dedicating time to learn best practices in the field. 
        My work is driven by curiosity and a desire to continuously improve, whether through learning new skills or finding ways to optimize processes.
        </p>
        <button className='border border-gray-700 rounded-xl py-3 px-5 text-gray-700 hover:border-greencolor hover:text-greencolor'>Resume</button>
      </div>
    </div>
  );
};
export default About;