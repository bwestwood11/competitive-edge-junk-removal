import Link from "next/link"

export default function CTA() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to dive in?
            <br />
            Contact Us Today!   
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link href="/pricing">
            <button
              href="#"
              className="rounded-md bg-[#f1592a] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#f1592a]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f1592a]"
            >
              Get started
            </button>
            </Link>
            <Link href="/contact">
            <button className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }