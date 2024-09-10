import React from 'react';
import { TracingBeamDemo } from "../components/skillContent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Skills = () => {
  return (
    <div className='mb-32'>
      <h1 className='text-foreground text-3xl font-poppins font-semibold'>Skills</h1>
      <div className='mt-10 ml-20 '>
          <TracingBeamDemo/>
          
      </div>
    </div>
  )
}

export default Skills