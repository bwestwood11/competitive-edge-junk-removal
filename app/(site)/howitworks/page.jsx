import Hero2 from "@/app/components/Hero2";
import Stats from "@/app/components/Stats";
import Services from "@/app/components/Services";
import Faq from "@/app/components/Faq";
import ServiceAreas from "@/app/components/ServiceAreas";

export const metadata = {
    title: "How It Works",
    description: "How It Works",
};

export default function Howitworks() {
    return (
   <>
   <Hero2 />
   <ServiceAreas />
    <Stats />
    <Services />
    <Faq />
    
   </>
    )
}