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

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  href?: string;
  className?: string;
  children: ReactNode;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface SelectProps {
  value: string;
  label: string;
}
