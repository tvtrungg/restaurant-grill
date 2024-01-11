import Image, { StaticImageData } from "next/image";
import CustomButton from "../CustomButton";
import { twMerge } from "tailwind-merge";
import { LINK } from "@/app/constants/constants";

type Props = {
  title: string;
  content: string;
  className?: string;
  readBtn?: string;
  href?: string;
  img: StaticImageData;
  alt: string;
  item1?: string;
  item2?: string;
  imgClass?: string;
};

const Content = ({
  title,
  content,
  className = "",
  readBtn,
  href,
  item1,
  item2 = "",
  img,
  alt,
  imgClass = "",
}: Props) => {
  return (
    <div
      className={twMerge(
        "mx-auto flex flex-col lg:flex-row justify-between items-center sm:px-14 2xs:px-10 xs:px-8 px-4",
        className
      )}
    >
      <div className={twMerge("text-justify", item1)}>
        <span className="text-2xl xs:text-3xl 2xs:text-4xl span-style-1 relative tracking-wider pl-5 ">
          {title}
        </span>
        <p className="text-sm xs:text-base md:text-lg my-5 md:my-10">
          {content}
        </p>
        {readBtn && (
          <CustomButton
            href={href || `/${LINK.ABOUT}`}
            content={readBtn}
            className="read-btn"
          />
        )}
      </div>
      <div
        className={twMerge("relative my-8 lg:mt-0 w-full lg:w-[35vw]", item2)}
      >
        <Image
          src={img}
          alt={alt}
          fill
          sizes="100%"
          className={`object-cover ${imgClass} `}
        />
      </div>
    </div>
  );
};

export default Content;
