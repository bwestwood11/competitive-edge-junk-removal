import Image from "next/image";
import {FaDumpster, FaAngleRight, FaBookmark } from 'react-icons/fa';
import junk from '../../public/junkremoval.jpg'

export default function Information() {
    return (
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={junk}
                alt=""
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p className="text-base font-semibold leading-7 text-[#f1592a]">Junk Removal</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Us!</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Whether you're clearing out your garage, remodeling your home, or managing a construction site, we have the perfect dumpster size for your project. Our team of experienced professionals will help you select the right dumpster and schedule convenient delivery and pickup times that work for you.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <p>
                At our company, we believe in responsible waste management and strive to minimize the impact of our operations on the environment. That's why we partner with local recycling facilities and disposal sites to ensure that as much waste as possible is recycled or repurposed.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <FaDumpster className="mt-1 h-5 w-5 flex-none text-[#f1592a]" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Dumpster Sizes</strong> Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                      blanditiis ratione.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FaAngleRight className="mt-1 h-5 w-5 flex-none text-[#f1592a]" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                      ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FaBookmark className="mt-1 h-5 w-5 flex-none text-[#f1592a]" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                      vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                  fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                  adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                <p className="mt-6">
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                  Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                  tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                  turpis ipsum eu a sed convallis diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }