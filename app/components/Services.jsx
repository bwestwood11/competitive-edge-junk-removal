import Image from "next/image";
import couch from "../../public/couch.jpg";
import dumpster from '../../public/dumpster.jpg'
import mattress from '../../public/mattress.jpg'
import garage from '../../public/garage.jpg'
import hottub from '../../public/hottub.jpg'
import dumpsterrental from '../../public/dumpsterrental.jpg'
import junk from '../../public/junk.jpg'

const Services = () => {
  return (
    <section className="flex items-center bg-gray-50 w-full justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-8 px-8">
         <div className="rounded-xl bg-white shadow-lg text-center hover:scale-105 ease-in duration-300">
         <div className="p-5 flex flex-col">
             <div className="rounded-xl overflow-hidden">
                 <Image 
                 src={couch} 
                 alt='/'
                 />
             </div>
             <h5 className="text-2xl md:text-3xl font-medium mt-3">Furniture Removal</h5>
             <p className="text-slate-500 text-lg mt-3">Our furniture removal service includes the responsible and efficient removal of unwanted furniture from individuals' homes, freeing up valuable space and minimizing clutter.</p>
         </div>
         </div>
         <div className="rounded-xl bg-white shadow-lg text-center hover:scale-105 ease-in duration-300">
         <div className="p-5 flex flex-col">
             <div className="rounded-xl overflow-hidden">
                 <Image 
                 src={mattress} 
                 alt='/'
                 />
             </div>
             <h5 className="text-2xl md:text-3xl font-medium mt-3">Mattress Removal</h5>
             <p className="text-slate-500 text-lg mt-3">Our mattress removal service involves the responsible and eco-friendly disposal of unwanted mattresses, allowing individuals to free up space and minimize clutter in their homes or businesses.</p>
         </div>
         </div>
         <div className="rounded-xl bg-white shadow-lg text-center hover:scale-105 ease-in duration-300">
         <div className="p-5 flex flex-col">
             <div className="rounded-xl overflow-hidden">
                 <Image 
                 src={garage} 
                 alt='/'
                 />
             </div>
             <h5 className="text-2xl md:text-3xl font-medium mt-3">House Cleanouts</h5>
             <p className="text-slate-500 text-lg mt-3">Our team will handle the entire cleanout process, from sorting and packing to transportation and disposal, so you can sit back and relax. We understand that house cleanouts can be overwhelming, which is why we provide a stress-free solution for our clients.</p>
         </div>
         </div>
         <div className="rounded-xl bg-white shadow-lg text-center hover:scale-105 ease-in duration-300">
         <div className="p-5 flex flex-col">
             <div className="rounded-xl overflow-hidden">
                 <Image 
                 src={hottub} 
                 alt='/'
                 />
             </div>
             <h5 className="text-2xl md:text-3xl font-medium mt-3">Hot Tub Removal</h5>
             <p className="text-slate-500 text-lg mt-3">A team of experts who have the tools and experience necessary to safely and efficiently remove your unwanted hot tub, regardless of its size or location.</p>
         </div>
         </div>
         <div className="rounded-xl bg-white shadow-lg text-center hover:scale-105 ease-in duration-300">
         <div className="p-5 flex flex-col">
             <div className="rounded-xl overflow-hidden">
                 <Image 
                 src={dumpsterrental} 
                 alt='/'
                 />
             </div>
             <h5 className="text-2xl md:text-3xl font-medium mt-3">Dumpster Rentals</h5>
             <p className="text-slate-500 text-lg mt-3">Our dumpster rental service is the best choice for individuals and businesses looking for affordable, reliable, and efficient waste management solutions.</p>
         </div>
         </div>
         <div className="rounded-xl shadow-lg bg-white text-center hover:scale-105 ease-in duration-300">
         <div className="p-5 flex flex-col">
             <div className="rounded-xl overflow-hidden">
                 <Image 
                 src={junk} 
                 alt='/'
                 />
             </div>
             <h5 className="text-2xl md:text-3xl font-medium mt-3">Junk Removal</h5>
             <p className="text-slate-500 text-lg mt-3">We specialize in removing any and all types of junk, including furniture, appliances, electronics, yard waste, construction debris, and more, offering a comprehensive junk removal service that allows you to quickly and easily get rid of unwanted items and clutter in your home or business.</p>
         </div>
         </div>
        </div>
    </section>
  );
};

export default Services;
