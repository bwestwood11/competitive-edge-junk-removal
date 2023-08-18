import Hero2 from "@/app/components/Hero2";
import Stats from "@/app/components/Stats";
import Services from "@/app/components/Services";
import Faq from "@/app/components/Faq";
import ServiceAreas from "@/app/components/ServiceAreas";
import DumpsterSizes from "@/app/components/DumpsterSizes";
import HowItWorksSection from "@/app/components/HowItWorksSection";

export const metadata = {
    title: "How It Works",
    description: "Order a dumpster for junk removal services, waste management solutions, and more.",
};

export default function Howitworks() {
    return (
   <>
   <Hero2 />
   <ServiceAreas />
   <DumpsterSizes />
   <HowItWorksSection />
   <Faq />
   </>
    )
}