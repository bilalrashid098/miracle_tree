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

export interface FeatureSectionProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  href?: string;
  className?: string;
  children: ReactNode;
}