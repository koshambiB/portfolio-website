import React from 'react'
import { Button } from '@/components/ui/button';
const About = () => {
  return (
    <div className=" relative text-foreground ">
      <div className='flex gap-4'>
      <div >
        <p className="text-5xl font-semibold pb-font-poppins"> Hi, I am Koshambi Bardhan</p>
        <p className="text-bluecolor text-4xl pt-5 pb-10">dfcgvbhjnkmlytre</p>
        <p className="text-xl text-gray-500 pb-20"> write about myself <br/> write about myelf <br/> write about myelf <br/> write about myelf </p>
        </div>
        <div className='flex justify-center items-center pl-44'> <Button>hii</Button></div>
        </div>
        <div className='line-container mb-20 relative overflow-hidden w-full h-2'>
        </div>
    </div>
  );
};

export default About