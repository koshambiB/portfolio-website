"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Card, CardContent } from "@/components/ui/card";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-full px-3 sm:px-4 mx-auto pt-4 relative text-foreground">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-12">
            {/* Responsive Card Title */}
            <p className="text-base sm:text-lg md:text-xl font-semibold mb-4">
              {item.title}
            </p>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Frontend",
    description: (
      <Card className="shadow-xl">
        <CardContent className="p-4 text-gray-700 bg-[#c2d7ee]">
          <div className="flex flex-wrap gap-4 text-sm sm:text-base lg:text-lg">
            <p>&bull; React.js</p>
            <p>&bull; Next.js</p>
            <p>&bull; Tailwind CSS</p>
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
          </div>
        </CardContent>
      </Card>
    ),
  },
];