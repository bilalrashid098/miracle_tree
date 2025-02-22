import { CardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";

export default function Card({ post, image, fullView }: CardProps) {
  return (
    <div className={`w-full ${fullView ? "sm:md:w-1/3" : ""} mb-4 md:px-2`}>
      <div
        className={`border-2 border-[#ADADAD] h-full sm:flex rounded-xl p-4 ${
          !fullView ? "flex-row" : "flex-col"
        } transition-all duration-300 ease-in-out`}
      >
        <Image
          className={`${
            !fullView ? "sm:aspect-square sm:w-[30%]" : "aspect-[3/2] w-full"
          } object-cover rounded-lg`}
          src={image}
          alt={post.title}
        />
        <div className={`flex flex-col grow py-6 ${!fullView ? "sm:p-6" : "sm:py-6"}`}>
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            <Link href={`/post/${post.id}`} className="capitalize hover:none">
              {post.title}
            </Link>
          </h2>
          <p className="text-xl text-gray-600 mt-2 grow">
            {post.body.substring(0, 100)}...
          </p>
          <Button href={`/post/${post.id}`}>Read More</Button>
        </div>
      </div>
    </div>
  );
}
