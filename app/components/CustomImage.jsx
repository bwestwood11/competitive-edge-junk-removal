import Image from "next/image";

export default function CustomImage({ src, alt, priority }) {
  return (
    <div className=" w-full h-full">
      <Image
        className="rounded-lg mx-auto"
        src={src}
        alt={alt}
        width={650}
        height={650}
        priority={priority}
      />
    </div>
  );
}
