import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import couch from "../../../public/couch.jpg";
import dumpster from "../../../public/dumpster.jpg";
import mattress from "../../../public/mattress.jpg";
import garage from "../../../public/garage.jpg";
import hottub from "../../../public/hottub.jpg";
import shed from "../../../public/shed1.jpg";
import junk from "../../../public/junk.jpg";
import CTA from "@/app/components/CTA";
import JunkRemovalServices from "@/app/components/Junk-Removal-Services";

export const metadata = {
  title: "Junk Removal Services in Tampa, FL",
  description: "Junk removal services in Tampa, FL. We offer junk removal services for your home or business.",
  alternates: {
    canonical: "https://www.competitiveedgedumpsters.com/junk-removal",
  },
};

const junkRemovalPage = () => {
  return (
    <section className="w-full h-full py-20">
      <div className="max-w-7xl mx-auto px-8 flex sm:flex-row flex-col">
        <div className="basis-1/2">
          <p className="text-gray-600 leading-7 tracking-wide">
            GET SPACE BACK IN YOUR LIFE!
          </p>
          <h1 className="font-extrabold text-5xl">
            Junk Removal Services in Tampa, FL
          </h1>
          <p className="mt-8 text-lg text-gray-600">
            At Competitive Edge Dumpsters, we offer junk removal services in the
            Tampa & surrounding areas. This includes an all inclusive labor plus
            dumpster combination.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            So, if you do not want to even deal with your junk at all. We do
            offer a hassle-free, stress-free process that will give you a piece
            of mind! Say goodbye to unwanted items without ever lifting a
            finger!
          </p>
        </div>
        <div className="basis-1/2 pt-8 sm:pt-0">
          <Image
            src="/junkremoval.jpg"
            alt="junk removal"
            width={500}
            height={500}
            priority
            className="rounded-xl shadow-xl mx-auto shadow-black/60"
          />
        </div>
      </div>
      <JunkRemovalServices />
      <CTA />
    </section>
  );
};

export default junkRemovalPage;
