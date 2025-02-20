import { Post } from "@/types";
import HomeView from "@/view/home";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  return <HomeView posts={posts} />;
}
