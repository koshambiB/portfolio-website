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
            <CardHeader>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
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
            <CardHeader>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>

        </>
      ),
    },
    {
      title: "Others",
      description: (
        <>
          <Card>
            <CardHeader>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>

        </>
      ),
    },
    
  ];