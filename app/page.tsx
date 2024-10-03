import Image from "next/image";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      className="m-5 sm:m-10 md:m-12 overflow-y-auto rounded-3xl bg-neutral-950    shadow-gray-900 shadow-xl"
      style={{ boxShadow: "10px 0px 25px rgba(0, 0, 0, 0.7)" }}
    >
      <Header />
      <div className="flex flex-col items-center mt-8">
        <div className="w-full max-w-4xl px-2 sm:px-3  md:px-0">
          <About />
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
}
