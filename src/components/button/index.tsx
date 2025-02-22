import { ButtonProps } from "@/types";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export default function Button({
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClass =
    "text-[#ff4c00] hover:text-[#ffffff] border-2 border-[#ff4c00] hover:bg-[#ff4c00] mt-5 block w-fit py-3 px-4 transition-all duration-300 ease-in-out";

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClass} ${className}`}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
