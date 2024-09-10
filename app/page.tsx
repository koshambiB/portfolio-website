import Image from "next/image";
import Navbar from "@/components/NavBar";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className=" m-20 overflow-y-auto bg-background  shadow-gray-900 shadow-xl"
    style={{ boxShadow: '10px 0px 25px rgba(0, 0, 0, 0.7)' }} >
      <Header/>
       <div className="box-border ml-32 mt-8 mr-60">
      <About/>
      <Skills/>
      <Projects/>
      </div> 
      
    </div>
  );
}
