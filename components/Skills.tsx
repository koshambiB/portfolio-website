"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Import Card and CardContent

const Skills = () => {
  return (
    <div className="mb-18 font-gowun px-6 sm:px-6 lg:px-10 mx-auto max-w-full">
      <h1 className="text-foreground text-3xl font-semibold">Skills</h1>
      <div className="mt-10 grid grid-cols-1 gap-8"> {/* Column Layout */}
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-12">
            <p className="text-base sm:text-lg md:text-xl font-semibold mb-4">
              {item.title}
            </p>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

const dummyContent = [
  {
    title: "Frontend",
    description: (
      <Card className="shadow-xl">
        <CardContent className="p-4 text-gray-700 bg-[#c2d7ee]">
          <div className="flex flex-wrap gap-4 text-sm sm:text-base lg:text-lg">
            <p>&bull; React.js</p>
            <p>&bull; Next.js</p>
            <p>&bull; Kotlin</p>
            <p>&bull; Tailwind CSS</p>
            <p>&bull; Javascript</p>
            <p>&bull; HTML</p>
            <p>&bull; CSS</p>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    title: "Backend",
    description: (
      <Card className="shadow-xl">
        <CardContent className="p-4 text-gray-700 bg-[#c2d7ee]">
          <div className="flex flex-wrap gap-4 text-sm sm:text-base lg:text-lg">
            <p>&bull; Node.js</p>
            <p>&bull; MongoDB</p>
            <p>&bull; Firebase</p>
            <p>&bull; Supabase</p>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    title: "Languages & Other Technologies",
    description: (
      <Card className="shadow-xl">
        <CardContent className="p-4 text-gray-700 bg-[#c2d7ee]">
          <div className="flex flex-wrap gap-4 text-sm sm:text-base lg:text-lg">
            <p>&bull; Java</p>
            <p>&bull; C/C++</p>
            <p>&bull; Python</p>
            <p>&bull; SQL</p>
            <p>&bull; DevOps (basic knowledge)</p>
          </div>
        </CardContent>
      </Card>
    ),
  },
];
