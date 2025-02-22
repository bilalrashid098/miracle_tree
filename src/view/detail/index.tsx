import { Post, User } from "@/types";
import Image from "next/image";
import img from "@/public/1.jpg";

export default function PostDetailView({
  post,
}: {
  post: Post & { user: User };
}) {
  return (
    <div className="">
      <div className="w-full min-h-[60vh] pt-[88px] bg-[#F1F1F1] flex flex-col justify-center">
        <div className="absolute w-full h-[calc(60vh-88px)] top-0 left-0 z-[1] opacity-5 flex justify-end">
          <svg
            className="w-auto h-full"
            width="49"
            height="40"
            viewBox="0 0 49 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.3947 40C43.8275 39.8689 49 34.6073 49 28.1389C49 24.9931 47.7512 21.9762 45.5282 19.7518L25.7895 0V12.2771C25.7895 14.3303 26.6046 16.2995 28.0556 17.7514L32.6795 22.3784L32.6921 22.3907L40.4452 30.149C40.697 30.4009 40.697 30.8094 40.4452 31.0613C40.1935 31.3133 39.7852 31.3133 39.5335 31.0613L36.861 28.3871H12.139L9.46655 31.0613C9.21476 31.3133 8.80654 31.3133 8.55476 31.0613C8.30297 30.8094 8.30297 30.4009 8.55475 30.149L16.3079 22.3907L16.3205 22.3784L20.9444 17.7514C22.3954 16.2995 23.2105 14.3303 23.2105 12.2771V0L3.47175 19.7518C1.24882 21.9762 0 24.9931 0 28.1389C0 34.6073 5.17252 39.8689 11.6053 40H37.3947Z"
              fill="#FF0A0A"
            ></path>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto p-6 w-full z-[2]">
          <div className="text-8xl font-bold mb-6">POST</div>
          <div className="text-4xl font-semibold text-[#ff4c00] mb-6">
            {post.title}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6 py-[6.25rem]">
        <div>
          <Image
            className="aspect-[4/2] md:w-[60%] mx-auto object-cover"
            src={img}
            alt={post.title}
          />
          <p className="text-xl my-10">{post.body}</p>
        </div>
        <div className="mt-8">
          <p className="text-xl font-bold">Author</p>
          <p className="font-semibold">{post.user.name}</p>
          <p className="">{post.user.email}</p>
          <p className="">{post.user.website}</p>
        </div>
      </div>
    </div>
  );
}
