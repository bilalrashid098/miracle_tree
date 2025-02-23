import { Post, User } from "@/types";
import PostDetailView from "@/view/detail";
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
    const postRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params?.id}`
    );

    if (!postRes.ok) {
      return { notFound: true };
    }

    const post: Post = await postRes.json();

    const userRes = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );

    if (!userRes.ok) {
      return { props: { post }, revalidate: 60 };
    }

    const user: User = await userRes.json();
    const postWithUser = { ...post, user };

    return {
      props: {
        post: postWithUser,
        title: post.title,
        description: "Detailed information for post detail page",
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching post or user data:", error);
    return { notFound: true };
  }
};

export default function PostDetail({ post }: { post: Post & { user: User } }) {
  return <PostDetailView post={post} />;
}
