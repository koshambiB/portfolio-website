import React from 'react'

const About = () => {
  return (
    <div className="relative flex justify-center font-gowun items-center pt-8 mb-12">
      <div className="text-center ">
        <p className="text-4xl   text-foreground">Hi, I am Koshambi Bardhan</p>
        <p className="text-bluecolor text-3xl pt-5 pb-8">I am an open-source developer</p>
        <p className="text-lg text-gray-500 pb-10">
        I specialize in front-end technologies, crafting engaging and user-friendly interfaces. 
        While I’m still mastering back-end development, I'm actively expanding my knowledge in that area. 
        I also have a keen interest in cybersecurity and web exploitation, dedicating time to learn best practices in the field. 
        My skills enable me to manage complex projects effectively, whether meeting deadlines or collaborating with a team. 
        With a strong attention to detail and problem-solving abilities, I ensure that every project is well-planned and executed.
        </p>
        <button className='border border-gray-400 rounded-xl py-3 px-5 text-gray-400 hover:border-white hover:text-white'>Resume</button>
      </div>
    </div>
  );
};
export default About;