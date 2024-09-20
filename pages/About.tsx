import React from 'react'

const About = () => {
  return (
    <div className="relative flex justify-center font-gowun items-center my-16">
      <div className="text-center ml-16">
        <p className="text-2xl   text-foreground">Hi, I am Koshambi Bardhan</p>
        <p className="text-bluecolor text-3xl pt-5 pb-8">I am a software developer</p>
        <p className="text-md text-gray-500 pb-10">
        My current expertise lies heavily in front-end technologies, where I’m skilled in crafting engaging, user-friendly interfaces that prioritize both aesthetics and functionality.
        While I’m still in the early stages of mastering backend development, I’m actively expanding my knowledge in this area, learning the ins and outs of databases, server-side frameworks, and API integration.
        In addition to my development skills, I have a deep interest in cybersecurity and web exploitation, which keeps me aware of the security implications of my work.
        Whether it’s meeting deadlines or working collaboratively with a team, these skills allow me to manage complex projects efficiently. My attention to detail, 
        and problem-solving abilities translate directly into my approach as a developer, ensuring that every project is properly planned and executed.
        </p>
        <button className='border border-gray-400 rounded-xl py-3 px-5 text-gray-400 hover:border-white hover:text-white'>Resume</button>
      </div>
    </div>
  );
};

export default About;
