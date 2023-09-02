"use client"

export default function Stats() {
    return (
      <div className="bg-gray-50 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Tampa Bay since 2018
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Join thousands of satisfied customers who trust us for on-time delivery, high satisfaction rates, and environmentally friendly practices.
            </p>
          </div>
        </div>
        <div className="mt-10 bg-gray-50 pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Customer Satisfaction</dt>
                    <dd className="order-1 text-4xl font-bold tracking-tight text-[#f1592a]">100%</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Rentals</dt>
                    <dd className="order-1 text-4xl font-bold tracking-tight text-[#f1592a]">1,000 +</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Recycled</dt>
                    <dd className="order-1 text-4xl font-bold tracking-tight text-[#f1592a]">500,000 lbs +  </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }