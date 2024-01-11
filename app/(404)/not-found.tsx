import Image from "next/image";
import Link from "next/link";
import { page_404 } from "@/data/data";
import { LINK } from "../constants/constants";

export default function NotFound() {
  return (
    <>
      <div className="w-full h-screen mx-auto flex justify-center items-center">
        <div className="md:basis-2/5 text-center">
          <h2 className="py-5 text-2xl 2xs:text-3xl font-semibold">
            <span className="text-[--primary-color]">Oops...</span>looks like
            it's
          </h2>
          <h1 className="text-8xl 2xs:text-10xl font-semibold">404</h1>
          <h1 className="text-xl 2xs:text-2xl font-semibold">
            (Page Not Found)
          </h1>
          <h4 className="py-5 text-2xl 2xs:text-3xl font-semibold">
            You'd better <span className="text-[--primary-color]">return</span>
          </h4>
          <div className="w-full text-center">
            <button className="read-btn">
              <Link href={`/${LINK.HOME}`}>Home Page</Link>
            </button>
          </div>
        </div>
        <Image
          src={page_404}
          width={500}
          height={500}
          alt="404"
          loading="lazy"
          className="hidden md:block"
        />
      </div>
    </>
  );
}
