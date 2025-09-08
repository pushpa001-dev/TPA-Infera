import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import  Pricing  from "@/components/Pricing";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";


export default function Home() {
  return (
   <div>
   <Hero/>
   <About/>
   <Services/>
   <Projects/>
   <Workflow/>
   <Pricing/>
   <Contact/>
  ,<Footer/> 
   </div>
  );
}
