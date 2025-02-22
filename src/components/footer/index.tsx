import { routes } from "@/constants/routes";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#232222] w-full">
      <div className="max-w-6xl p-6 mx-auto w-full flex flex-col justify-center">
        <div className="mt-[4.375rem] flex items-center">
          <svg
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
          <h1 className={`text-3xl text-[#FFFFFF] font-bold mb-0 ml-3`}>
            Lorem Ipsum
          </h1>
        </div>
        <ul className="flex gap-10 text-xl ml-[3.875rem] mt-8">
          <li className="text-[#ff4c00] hover:text-[#ffffff] transition-all duration-300">
            <Link className={``} href={routes.home}>
              Home
            </Link>
          </li>
          <li className="text-[#ff4c00] hover:text-[#ffffff] transition-all duration-300">
            <Link className={``} href={routes.about}>
              About
            </Link>
          </li>
        </ul>
        <div className="mt-[4.375rem] ml-[3.875rem] mb-4 text-[#FFFFFF] flex items-center justify-between">
          <p>@{currentYear} Miracle Tree Demo. All Rights Reserved</p>
          <ul className="flex gap-10">
            <li className="hover:text-[#ff4c00] transition-all duration-300">
              <Link className={``} href={routes.home}>
                Terms of Business
              </Link>
            </li>
            <li className="hover:text-[#ff4c00] transition-all duration-300">
              <Link className={``} href={routes.home}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
