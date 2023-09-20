import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import couch from "../../../public/couch.jpg";
import dumpster from "../../../public/dumpster.jpg";
import mattress from "../../../public/mattress.jpg";
import garage from "../../../public/garage.jpg";
import hottub from "../../../public/hottub.jpg";
import shed from "../../../public/shed1.jpg";
import junk from "../../../public/junk.jpg";

const junkRemovalPage = () => {
  return (
    <section className="w-full h-full py-20">
      <div className="max-w-7xl mx-auto px-8 flex sm:flex-row flex-col">
        <div className="basis-1/2">
          <p className="text-gray-600 leading-7 tracking-wide">
            GET SPACE BACK IN YOUR LIFE!
          </p>
          <h1 className="font-bold text-5xl">
            Junk Removal Services in Tampa, FL
          </h1>
          <p className="mt-8 text-lg text-gray-600">
            At Competitive Edge Dumpsters, we offer junk removal services in the
            Tampa & surrounding areas. This includes an all inclusive labor plus
            dumpster combination
          </p>
          <p className="mt-4 text-lg text-gray-600">
            So, if you do not want to even deal with your junk at all. We do
            offer a hassle-free, stress-free process that will give you a piece
            of mind! Say goodbye to unwanted items without ever lifting a
            finger.
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
      <div className="max-w-7xl mx-auto pt-20 flex sm:flex-row flex-col-reverse px-6 sm:px-0">
        <div className="basis-1/2">
        <Image 
        src='/dumpster3.jpg'
        alt='dumpster'
        width={500}
        height={500}
        priority
        className='rounded-xl shadow-xl mx-auto mt-10 shadow-black/60'
        />
        </div>
        <div className="basis-1/2">
          <h2 className="text-center font-bold text-3xl">Items We Take</h2>
          <ul className="max-w-2xl mx-auto mt-8 grid grid-cols-2 px-8 sm:px-0 gap-6">
            <li className="flex flex-row gap-4 justify-center items-center">
              <BsFillCheckCircleFill className="inline-block sm:text-xl text-[#f1592a]" />
              <p className="text-gray-600 sm:text-xl text-lg leading-7 tracking-wide">
                Appliances
              </p>
            </li>
            <li className="flex flex-row gap-4 justify-center items-center">
              <BsFillCheckCircleFill className="inline-block sm:text-xl text-[#f1592a]" />
              <p className="text-gray-600 sm:text-xl text-lg leading-7 tracking-wide">
                Sofa/Couch
              </p>
            </li>
            <li className="flex flex-row gap-4 justify-center items-center">
              <BsFillCheckCircleFill className="inline-block sm:text-xl text-[#f1592a]" />
              <p className="text-gray-600 sm:text-xl text-lg leading-7 tracking-wide">
                Mattresses
              </p>
            </li>
            <li className="flex flex-row gap-4 justify-center items-center">
              <BsFillCheckCircleFill className="inline-block sm:text-xl text-[#f1592a]" />
              <p className="text-gray-600 sm:text-xl text-lg leading-7 tracking-wide">
                Hot Tubs
              </p>
            </li>
            <li className="flex flex-row gap-4 sm:justify-center items-center">
              <BsFillCheckCircleFill className="inline-block sm:text-xl text-[#f1592a]" />
              <p className="text-gray-600 sm:text-xl text-lg leading-7 tracking-wide">
                Shed Removal
              </p>
            </li>
            <li className="flex flex-row gap-4 justify-center items-center">
              <BsFillCheckCircleFill className="inline-block sm:text-xl text-[#f1592a]" />
              <p className="text-gray-600 sm:text-xl text-lg leading-7 tracking-wide">
                Furniture
              </p>
            </li>
            <li className="flex flex-row gap-4 justify-center items-center">
              <BsFillCheckCircleFill className="inline-block sm:text-xl text-[#f1592a]" />
              <p className="text-gray-600 sm:text-xl text-lg leading-7 tracking-wide">
                Yard Waste
              </p>
            </li>
            <li className="flex flex-row gap-4 justify-center items-center">
              <BsFillCheckCircleFill className="inline-block sm:text-xl text-[#f1592a]" />
              <p className="text-gray-600 sm:text-xl text-lg leading-7 tracking-wide">
                Cabinets
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pt-16">
        <div className="rounded-xl bg-white shadow-lg text-center hover:scale-105 ease-in duration-300">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src={couch} alt="/" />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">
              Sofa/Couch Removal
            </h5>
            <h3 className="font-slate-500 font-medium mt-2">
              starting at $125
            </h3>
            <p className="text-slate-500 text-lg mt-3">
              Our furniture removal service includes the responsible and
              efficient removal of unwanted furniture from individuals' homes,
              freeing up valuable space and minimizing clutter.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg text-center hover:scale-105 ease-in duration-300">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src={mattress} alt="/" />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">
              Mattress Removal
            </h5>
            <h3 className="font-slate-500 font-medium mt-2">starting at $99</h3>
            <p className="text-slate-500 text-lg mt-3">
              Our mattress removal service involves the responsible and
              eco-friendly disposal of unwanted mattresses, allowing individuals
              to free up space and minimize clutter in their homes or
              businesses.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg text-center hover:scale-105 ease-in duration-300">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src={garage} alt="/" />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">
              House Cleanouts
            </h5>
            <h3 className="font-slate-500 font-medium mt-2">starting at $99</h3>
            <p className="text-slate-500 text-lg mt-3">
              Our team will handle the entire cleanout process, from sorting and
              packing to transportation and disposal, so you can sit back and
              relax. We understand that house cleanouts can be overwhelming,
              which is why we provide a stress-free solution for our clients.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg text-center hover:scale-105 ease-in duration-300">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src={hottub} alt="/" />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">
              Hot Tub Removal
            </h5>
            <h3 className="font-slate-500 font-medium mt-2">
              starting at $299
            </h3>
            <p className="text-slate-500 text-lg mt-3">
              A team of experts who have the tools and experience necessary to
              safely and efficiently remove your unwanted hot tub, regardless of
              its size or location.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg text-center hover:scale-105 ease-in duration-300">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src={shed} width={500} height={500} alt="/" />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">
              Shed Demolition
            </h5>
            <h3 className="font-slate-500 font-medium mt-2">
              starting at $500
            </h3>
            <p className="text-slate-500 text-lg mt-3">
              Have an old shed that is just taking up too much space. We will be
              able to demo the shed, take the debris/junk and give you the space
              back that you deserve.
            </p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg bg-white text-center hover:scale-105 ease-in duration-300">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src={junk} alt="/" />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">
              Junk Removal
            </h5>
            <p className="text-slate-500 text-lg mt-3">
              We specialize in removing any and all types of junk, including
              furniture, appliances, electronics, yard waste, construction
              debris, and more, offering a comprehensive junk removal service
              that allows you to quickly and easily get rid of unwanted items
              and clutter in your home or business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default junkRemovalPage;
