import { CardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Card({ post, image, fullView }: CardProps) {
  return (
    <div className={`w-full ${fullView ? "sm:md:w-1/2" : ""} mb-4 px-2`}>
      <div
        className={`border-2 border-[#ADADAD] h-full flex rounded-xl p-4 ${
          !fullView ? "flex-row" : "flex-col"
        } transition-all duration-300 ease-in-out`}
      >
        <Image
          className={`${
            !fullView ? "aspect-square w-[35%]" : "aspect-[3/2] w-full"
          } object-cover rounded-lg`}
          src={image}
          alt={post.title}
        />
        <div className={`flex flex-col grow ${!fullView ? "p-6" : "py-6"}`}>
          <h2 className="text-4xl font-bold heading mb-3">
            <Link href={`/post/${post.id}`} className="capitalize hover:none">
              {post.title}
            </Link>
          </h2>
          <p className="text-2xl text-gray-600 mt-2 grow">
            {post.body.substring(0, 100)}...
          </p>
          <Link
            href={`/post/${post.id}`}
            className="text-[#ff4c00] hover:text-[#ffffff] border-2 border-[#ff4c00] hover:bg-[#ff4c00] mt-5 block w-fit py-3 px-4 transition-all duration-300 ease-in-out"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
