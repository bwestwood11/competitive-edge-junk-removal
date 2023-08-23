import Image from "next/image"

const DumpsterSizes = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-6xl mx-auto mb-10 px-6 sm:px-0">
        <h2 className="text-left text-3xl font-bold tracking-tight text-gray-900 mb-3">How It Works</h2>
        <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">1. Choose The Right Dumpster</span>
       <p className="text-left mt-3 leading-8 text-gray-600 mb-3">Choose your dumpster size based on your project's needs & goals. Below we have listed all of our dumpster's dimensions so you can make the right choice!</p>
       <div>
          <p className="leading-8 text-gray-600"> If this is your first time renting a dumpster and you don't know exactly what size you need. You can either call us at (813) 200-8791 or email us at <a href="mailto:brian@competitiveedgedumpsters.com" className="underline font-bold text-black">brian@competitiveedgedumpsters.com</a> so we can pair you with the right size. </p>
       </div>
      </div>
      
    <div className="w-full mt-4 bg-gray-50 grid gap-8 grid-cols-1 sm:grid-cols-3 max-w-6xl mx-auto">
      <div className="border-2 flex sm:w-full w-3/4 mx-auto border-gray-500 rounded-lg shadow-xl">
          <Image
          src={'/10yardwithtext.jpg'}
          alt="Dumpster Image"
          width={1000}
          height={1000}
          />
      </div>
      <div className="border-2 flex sm:w-full w-3/4 mx-auto border-gray-500 rounded-lg shadow-xl">
          <Image
          src={'/15yardwithtext.jpg'}
          alt="Dumpster Image"
          width={1000}
          height={1000}
          />
      </div>
      <div className="border-2 flex sm:w-full w-3/4 mx-auto border-gray-500 rounded-lg shadow-xl">
          <Image
          src={'/20yardwithtext.jpg'}
          alt="Dumpster Image"
          width={1000}
          height={1000}
          />
      </div>
    </div>
    </div>
  )
}

export default DumpsterSizes