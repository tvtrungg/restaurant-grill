import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  brand: string;
  intro: string;
  background: string;
  className?: string;
};

const CustomBanner = ({ brand, intro, background, className }: Props) => {
  return (
    <div className={`${background} w-full h-[381px] relative`}>
      <div
        className={twMerge(
          "absolute top-[45%] left-10 -translate-y-1/2 text-white pl-4 span-style-1 before:border-white",
          className
        )}
      >
        <span className=" text-xl xs:text-2xl 2xs:text-3xl relative tracking-wider">
          {brand}
        </span>
        <h1 className="text-3xl xs:text-4xl 2xs:text-5xl tracking-widest mt-2">
          {intro}
        </h1>
      </div>
    </div>
  );
};

export default CustomBanner;
