"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { opacityVariants } from "@/app/constants/constants";

import { useEffect, useRef, useState } from "react";
import { food_images } from "@/data/data";
import { useTranslations } from "next-intl";
import CustomCarousel from "../../CustomCarousel";
import Link from "next/link";
import useGetPath from "@/lib/useGetPath";
import Title from "../../Title";

type TSectionTwoProps = {};

const SectionThree = ({}: TSectionTwoProps) => {
  const lang = useGetPath()[1];
  const t = useTranslations("container");
  const pageRef = useRef(null);
  const isInView = useInView(pageRef);
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
    <div ref={pageRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView === true ? "visible" : "hidden"}
        variants={opacityVariants}
        className="sub-slider relative"
      >
        <Title title={t("home_page.section_3.title")} />
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
              key={index}
              className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2"
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
            Tabi Grill
          </div>
          <Link href={`${lang}/products`}>
            <button className="sub-slider-btn mt-3">
              {t("button.read_btn")}
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionThree;
