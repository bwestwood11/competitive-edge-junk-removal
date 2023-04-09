import { Inter } from "next/font/google";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Information from "./components/Information";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div>
      <Hero />
      <Stats />
      <Services />
    <Faq />
    </div>
  );
}
