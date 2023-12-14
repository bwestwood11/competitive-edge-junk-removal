import Image from "next/image";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import SocialMedias from "./SocialMedias";

const CTABlog = () => {
  return (
    <div className="w-full flex sm:h-[250px] mt-20">
      <div className="w-full flex sm:flex-row flex-col sm:gap-10 bg-white bg-opacity-30 border border-gray-200 shadow-2xl rounded-lg backdrop-blur-2xl p-3 items-center sm:items-start">
        <div className="basis-1/2">
          {" "}
          <Image
            src="/dumpster-truck.png"
            alt="truck"
            width={400}
            height={400}
          />
        </div>
        <div className="basis-1/2 flex flex-col text-center items-center mb-8 sm:mb-0">
            <div className="flex flex-row gap-2 items-end">
                
          <h4 className="font-bold text-2xl tracking-tight">Book With Us</h4> 
            </div>
       <div className="bg-orange-500 w-16 h-1"></div>
          <p className="text-base">
            Servicing the Tampa, FL & surrounding areas.
          </p>
          <Link href="/pricing">
            <button className="p-2 rounded-md border border-transparent bg-[#f1592a] hover:bg-[#f1592a]/70 sm:text-xs sm:py-1 sm:px-2 md:text-sm md:py-2 md:px-4 text-sm font-medium text-white shadow-sm whitespace-nowrap">
              Book Here
            </button>
          </Link>
        </div>
        <SocialMedias />
      </div>
    </div>
  );
};

export default CTABlog;
