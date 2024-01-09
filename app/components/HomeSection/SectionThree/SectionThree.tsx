"use client";
import Image from "next/image";
import { motion, useAnimate, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { food_images } from "@/data/data";
import { useTranslations } from "next-intl";
import CustomCarousel from "../../CustomCarousel";
import Link from "next/link";
import useGetPath from "@/lib/useGetPath";

type TSectionTwoProps = {};
function usePageAnimation(isInView: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".food-image",
      isInView
        ? { opacity: 1, filter: "blur(0px)" }
        : { opacity: 0, filter: "blur(20px)" },
      {
        duration: 1,
      }
    );
  }, [isInView]);

  return scope;
}

const SectionThree = ({}: TSectionTwoProps) => {
  const lang = useGetPath()[1];
  const t = useTranslations("container");
  const pageRef = useRef(null);
  const isInView = useInView(pageRef);
  const scope = usePageAnimation(isInView);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div ref={pageRef} className="sub-slider relative mt-32">
      <CustomCarousel
        attribute={{
          showIndicators: false,
          autoPlay: true,
          centerSlidePercentage: 35,
          centerMode: !isMobile,
        }}
      >
        {food_images.map((item, index) => (
          <div
            ref={scope}
            key={index}
            className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="food-image relative aspect-[1/1] w-[250px] 2xs:w-[300px] md:w-[350px] lg:w-[400px]">
              <Image
                src={item}
                alt={`Drink ${index}`}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </CustomCarousel>

      <div className="content w-full absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-[--white-3] uppercase">
        <div className="relative text-5xl 2xs:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide">
          Restaurant
        </div>
        <Link href={`${lang}/products`}>
          <button className="sub-slider-btn mt-3">
            {t("button.read_btn")}
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default SectionThree;
