"use client";

import { Inter } from "next/font/google";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Hero2 from "./components/Hero2";
import Information from "./components/Information";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";
import ServiceAreas from "./components/ServiceAreas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero2 />
      <Stats />
      <Services />
      <Faq />
      <ServiceAreas />
    </div>
  );
}
