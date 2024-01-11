"use client";
import Image from "next/image";
import Link from "next/link";
import { error_page } from "@/data/data";
import { LINK } from "../constants/constants";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <>
          <div className="w-full h-screen mx-auto flex justify-center items-center">
            <div className="md:basis-2/5 text-center">
              <h2 className="py-5 text-2xl 2xs:text-3xl font-semibold">
                <span className="text-[--primary-color]">Oops...</span>looks
                like it's
              </h2>
              <h1 className="text-8xl 2xs:text-10xl font-semibold text-red-500 uppercase">
                Error
              </h1>
              <h1 className="text-xl 2xs:text-2xl font-semibold">
                Something went wrong!
              </h1>
              <h4 className="py-5 text-2xl 2xs:text-3xl font-semibold">
                You'd better{" "}
                <span className="text-[--primary-color]">return</span>
              </h4>
              <div className="w-full text-center">
                <button className="read-btn">
                  <Link href={`/${LINK.HOME}`}>Home Page</Link>
                </button>
                <button className="ml-5 error-btn" onClick={() => reset()}>
                  Try again
                </button>
              </div>
            </div>
            <Image
              src={error_page}
              width={500}
              height={500}
              alt="404"
              loading="lazy"
              className="hidden md:block"
            />
          </div>
        </>
      </body>
    </html>
  );
}
