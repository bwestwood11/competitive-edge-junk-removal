"use client"

import { Disclosure } from '@headlessui/react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const faqs = [
  {
    question: "What Are My Payment Options?",
    answer:
      "Competitive Edge accepts all major credit cards or in-person payment as well.",
  },
  {
    question: "How Do I Contact Customer Service?",
    answer:
      "You can reach us by emailing brianwestwood13@gmail.com or calling (813) 200-8791",
  },
  {
    question: "What Does My Dumpster Rental Price Include?",
    answer:
      "The price of your dumpster rental includes: one-time delivery and one-time pickup, a specified amount of days of rental, the fuel, environmental fees, and taxes associated with the dumpster size and days ordered.",
  },
  {
    question: "How Do I Change or Cancel My Dumpster Rental?",
    answer:
      "You may update your reservation by calling us directly at (813) 200-8791. Any changes to rentals must be made 24 hours prior to the scheduled delivery of the dumpster. This is to avoid a trip charge which can be up to $150.",
  },
  {
    question: "Do I Have To Be Present During Delivery or Pick Up?",
    answer:
      "No you don't have to. Just please be sure to give any special instructions on your order form during checkout. If there are no special instructions, the driver will use his.her best judgement and experience.",
  },
  {
    question: "What If The Drivers Cannot Access Dumpster to Pickup?",
    answer:
      "If the driver is unable to access the dumpster for any reason (customer's fault or not), the renter will be billed a trip charge ($150). If a missed pickup causes a dumpster to be at the property for longer than contracted time, the renter will also be billed per day until the dumpster is picked up.",
  },
  {
    question: "What If I Put Prohibited/Hazardous Material in my Dumpster?",
    answer:
      "We will charge the credit card on file 4 times the amount of the fee we get charged for any and all hazardous materials in the dumpster as well as a $250 container cleaning fee.",
  },
  {
    question: "How Do I Know if a Product is Hazardous?",
    answer:
      "Assume a product is hazardous if the label contains ANY of the following words: pesticide, fertilizer, warning, poison, acid, danger, caustic, flammable. If you are unsure, give us a call at (813) 507-5503",
  },
  // More questions...
]

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <AiOutlineMinus className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <AiOutlinePlus className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}