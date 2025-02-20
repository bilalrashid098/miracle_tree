import { StaticImageData } from "next/image";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface CardProps {
  post: Post;
  image: StaticImageData;
  fullView: boolean;
}
