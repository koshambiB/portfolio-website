import Image from "next/image";
import Navbar from "@/components/NavBar";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";

export default function Home() {
  return (
    <>
      <main className="box-border ml-60 mt-8 mr-60">
        <Navbar/>
      <p className="text-background text-9xl">ikugtyfdtrsea</p>
      <p className="text-background text-5xl">ikugtyfdtrsea</p>
      <About/>
      <Skills/>
      <Projects/>
      </main>
    </>
  );
}
