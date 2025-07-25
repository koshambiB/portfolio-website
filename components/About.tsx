
import React from 'react';

const About = () => {


  return (
    <div className="relative flex justify-center mx-6 md:mx-10 font-gowun items-center pt-8 mb-12">
      <div className="text-center">
        <p className="text-2xl md:text-4xl text-foreground">Hi, I am Koshambi Bardhan</p>
        <p className="text-greencolor text-xl md:text-4xl pt-5 pb-8 font-bold">I am an open-source developer</p>
        <p className="text-sm md:text-xl text-justify md:text-center text-gray-700 font-extralight pb-10 leading-relaxed">
          I enjoy solving problems using data structures and algorithms - it's where I feel most confident and challenged. I primarily code in Java and Python, and I'm continuously working to deepen my understanding of core programming concepts through DSA.

Alongside that, I've worked on a range of projects - mostly focused on front-end development and I enjoy building things that are both functional and visually appealing. I'm currently focused on refining my DSA skills while also working on new projects that help me apply what I've learned in practical ways.
        </p>

    
        <a
          href="/resume2025.pdf"
          download="Koshambi_Bardhan_Resume.pdf"
          className="border border-gray-700 rounded-xl py-3 px-5 text-gray-700 hover:border-greencolor hover:text-greencolor"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
