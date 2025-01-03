import { CardHoverEffectDemo } from "@/components/project-cards";
import React from "react";

const Projects = () => {
  return (
    <div className="text-foreground font-gowun mb-20">
      <h1 className="text-foreground text-3xl  px-6 sm:px-6 lg:px-10 mx-auto max-w-full font-semibold">
        Projects
      </h1>
      <CardHoverEffectDemo />
    </div>
  );
};

export default Projects;
