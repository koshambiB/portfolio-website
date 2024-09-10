"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-gray-800 dark:bg-slate-900 text-black dark:text-white border-blue-500 dark:border-slate-800"
      >
        Borders are cool
      </Button>
    </div>
  );
}
