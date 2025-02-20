import { Post } from "@/types";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await res.json();

    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));

    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params?.id}`
    );

    if (!res.ok) {
      return { notFound: true };
    }

    const post: Post = await res.json();

    return { props: { post }, revalidate: 60 };
  } catch (error) {
    console.error("Error fetching post:", error);
    return { notFound: true };
  }
};

export default function PostDetail({ post }: { post: Post }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
      <p className="text-sm text-gray-500 mt-4">
        Post ID: {post.id} | Author: {post.userId}
      </p>
    </div>
  );
}
