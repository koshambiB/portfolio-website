"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { twMerge } from "tailwind-merge";


export function TracingBeamDemo() {
    return (
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative text-foreground">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              
              <p className={twMerge("text-xl mb-6 mr-2")}>
                {item.title}
              </p>
   
              <div className="text-sm  prose prose-sm dark:prose-invert">
                
                {item.description}
              </div>
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
  <>
    <Card>
      <CardContent className="p-4 text-lg text-gray-400">
        {/* First line with 4 items */}
        <div className="flex space-x-6">
          <p>&bull; React Js</p>
          <p>&bull; Next Js</p>
          <p>&bull; Accertinity UI</p>
          <p>&bull; Tailwind CSS</p>
        </div>
        
        {/* Second line with 3 items */}
        <div className="flex space-x-6 mt-3">
          <p>&bull; HTML</p>
          <p>&bull; CSS</p>
          <p>&bull; JavaScript</p>
        </div>
      </CardContent>
    </Card>
  </>
),

    
    },
    {
      title: "Backend",
      description: (
        <>
          
          <Card>
      <CardContent className="p-4 text-lg text-gray-400">
        {/* First line with 4 items */}
        <div className="flex space-x-6">
          <p>&bull; Node Js</p>
          <p>&bull; Express Js</p>
          <p>&bull; MongoDB</p>
          <p>&bull; MySQL</p>
        </div>
        
        {/* Second line with 3 items */}
        <div className="flex space-x-6 mt-3">
          <p>&bull; Firebase</p>
          <p>&bull; Supabase</p>
         
        </div>
      </CardContent>
    </Card>

        </>
      ),
    },
    {
      title: "Languages & Other technologies",
      description: (
        <>
          <Card>
      <CardContent className="p-4 text-lg text-gray-400">
        {/* First line with 4 items */}
        <div className="flex space-x-6">
          <p>&bull; Java</p>
          <p>&bull; C/C++</p>
          <p>&bull; Python</p>
          
        </div>
        
        {/* Second line with 3 items */}
        <div className="flex space-x-6 mt-3">
          <p>&bull; Wireshark</p>
          <p>&bull; Nmap</p>
         
        </div>
      </CardContent>
    </Card>

        </>
      ),
    },
    
  ];