import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ListItem({ post }) {
  const { id, title, date, cover_image, category, description } = post;
  console.log("post", post);
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4">
      <div className="flex flex-col group cursor-pointer">
        <div className="relative w-full h-60 sm:h-70 lg:h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
          <Link href={`/posts/${id}`}>
            <Image
              src={cover_image}
              alt="blog"
              fill
              priority
              className="object-fit sm:object-cover object-left lg:object-center"
            />
          </Link>
          <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-3 sm:p-5 flex justify-between">
            <Link className="font-bold text-xs sm:text-lg" href={`/posts/${id}`}>
              {title}
              <p className="text-xs sm:text-sm mt-1">{formattedDate}</p>
            </Link>
            <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
              <div className="bg-[#f1592a] text-center text-white px-3 py-1 rounded-full text-sm font-semibold">
                <p>{category}</p>
              </div>
            </div>
          </div>
        </div>
        <Link href={`/posts/${id}`}>
          <div className="mt-5 flex-1">
            <p className="underline text-lg font-bold">{title}</p>
            <p className="text-gray-500 line-clamp-2">{description}</p>
          </div>
        </Link>
        <Link href={`/posts/${id}`}>
          <p className="mt-5 font-bold flex items-center group-hover:underline">
            Read Post
            <AiOutlineArrowRight className="ml-2 h-4 w-4" />
          </p>
        </Link>
      </div>
    </li>
  );
}