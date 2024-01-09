"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { opacityVariants, scaleVariants } from "@/app/constants/constants";
import { food_images } from "@/data/data";
import Content from "../../Content";
import img_1 from "@/public/images/carousel/1.jpg";
import { useTranslations } from "next-intl";
import CustomCarousel from "../../CustomCarousel";
import Link from "next/link";
import useGetPath from "@/lib/useGetPath";

type TSectionTwoProps = {};

const SectionTwo = ({}: TSectionTwoProps) => {
  const lang = useGetPath()[1];
  const t = useTranslations("container");
  const carouselContent = [
    {
      title: t("home_page.section_2.carousel_content_1.title"),
      content: t("home_page.section_2.carousel_content_1.content"),
      className: "flex-col-reverse",
      readBtn: "read_btn",
      href: "about/professionalism",
      item2: "h-[40vh] sm:h-[50vh] lg:h-[60vh]",
      img: img_1,
      alt: "Carousel Image 1",
      imgClass:
        "rounded-tl-[150px] rounded-br-[150px] 2xs:rounded-tl-[300px] 2xs:rounded-br-[300px] rounded-tr-[50px] rounded-bl-[50px]",
      animationVariant: opacityVariants,
    },
    {
      title: t("home_page.section_2.carousel_content_2.title"),
      content: t("home_page.section_2.carousel_content_2.content"),
      className: "lg:flex-row-reverse",
      readBtn: "read_btn",
      href: "about/art",
      item2: "h-[40vh] sm:h-[50vh] lg:h-[60vh]",
      img: img_1,
      alt: "Carousel Image 2",
      imgClass: "rounded-[40px]",
      animationVariant: scaleVariants,
    },
    {
      title: t("home_page.section_2.carousel_content_3.title"),
      content: t("home_page.section_2.carousel_content_3.content"),
      className: "flex-col-reverse",
      readBtn: "read_btn",
      href: "about/humanities",
      item2: "h-[40vh] sm:h-[50vh] lg:h-[60vh]",
      img: img_1,
      alt: "Carousel Image 3",
      imgClass: "radius-style-1",
      animationVariant: opacityVariants,
    },
  ];

  const [selectedSlide, setSelectedSlide] = useState(0);
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

  const caRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: caRef,
    offset: ["0 1", "0.9 1"],
  });

  return (
    <motion.div
      ref={caRef}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="section-2 mt-32"
    >
      <CustomCarousel
        className="home-carousel"
        onChange={(index) => setSelectedSlide(index)}
        attribute={{
          selectedItem: selectedSlide,
          showArrows: false,
          useKeyboardArrows: true,
        }}
      >
        {carouselContent.map((content, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={selectedSlide === index ? "visible" : "hidden"}
            variants={content.animationVariant}
          >
            <Content
              title={content.title}
              content={content.content}
              className={content.className}
              readBtn={content.readBtn}
              href={content.href}
              item2={content.item2}
              img={content.img}
              alt={content.alt}
              imgClass={content.imgClass}
            />
          </motion.div>
        ))}
      </CustomCarousel>
    </motion.div>
  );
};

export default SectionTwo;
