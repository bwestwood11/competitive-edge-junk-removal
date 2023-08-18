import Link from "next/link"

const HowItWorksSection = () => {
  return (
    <div className='bg-gray-50 mt-8 w-full'>
       <div className="max-w-6xl mx-auto mb-10">
        <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">2. Book Your Dumpster Online</span>
       <p className="text-left mt-3 leading-8 text-gray-600 mb-3">After deciding which size is best for you. Next, you will go to our <Link href='/pricing'><span className='underline font-bold text-black'>pricing page</span></Link> where we have transparent upfront pricing. (2,000lbs is included, any weight over this threshold will be an extra charge)</p>
       <div>
          <p className="leading-8 text-gray-600"> You will now click the 'book now' button and this will lead you to a form where we will need some information to fulfill your order. Make sure all your information is correct before submitting. </p>
       </div>
       <div className="mb-4">
          <p className="leading-8 text-gray-600"> Finally you will checkout with your credit or debit card. If the payment is successfully you will be prompted with a success message. If the payment failed then you will be prompted with a error message. </p>
       </div>
        <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">3. Wait For Delivery Of Your Dumpster</span>
       <p className="text-left mt-3 leading-8 text-gray-600 mb-3">Whatever date and 4 hour time frame you choose will be the delivery date and time of your dumpster. The driver will follow any special instructions you left in the notes. Our driver will call you when he is in route to your specified address. You can give the driver more instructions if need be.</p>
       <div>
          <p className="leading-8 text-gray-600"> If you have any questions about the whole process, don't hesitate to give us a call. </p>
       </div>
      </div>
    </div>
  )
}

export default HowItWorksSection