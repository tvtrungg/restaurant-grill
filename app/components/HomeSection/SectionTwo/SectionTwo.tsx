"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { opacityVariants, scaleVariants } from "@/app/constants/constants";
import Content from "../../Content";
import img_1 from "@/public/images/carousel/1.jpg";
import { useTranslations } from "next-intl";
import CustomCarousel from "../../CustomCarousel";
import Title from "../../Title";

type TSectionTwoProps = {};

const SectionTwo = ({}: TSectionTwoProps) => {
  const t = useTranslations("container");
  const carouselContent = [
    {
      title: t("home_page.section_2.carousel_content_1.title"),
      content: t("home_page.section_2.carousel_content_1.content"),
      className: "w-[70%] flex-col-reverse",
      readBtn: "read_btn",
      href: "about/professionalism",
      item1: "lg:basis-[45%]",
      item2: "lg:basis-[50%] h-[40vh] sm:h-[50vh] lg:h-[60vh]",
      img: img_1,
      alt: "Carousel Image 1",
      imgClass:
        "rounded-tl-[100px] rounded-br-[100px] 2xs:rounded-tl-[200px] 2xs:rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]",
      animationVariant: opacityVariants,
    },
    {
      title: t("home_page.section_2.carousel_content_2.title"),
      content: t("home_page.section_2.carousel_content_2.content"),
      className: "w-[70%] lg:flex-row-reverse",
      readBtn: "read_btn",
      href: "about/art",
      item1: "lg:basis-[45%]",
      item2: "lg:basis-[50%] h-[40vh] sm:h-[50vh] lg:h-[60vh]",
      img: img_1,
      alt: "Carousel Image 2",
      imgClass: "rounded-[40px]",
      animationVariant: scaleVariants,
    },
    {
      title: t("home_page.section_2.carousel_content_3.title"),
      content: t("home_page.section_2.carousel_content_3.content"),
      className: "w-[70%] flex-col-reverse",
      readBtn: "read_btn",
      href: "about/humanities",
      item1: "lg:basis-[45%]",
      item2: "lg:basis-[50%] h-[40vh] sm:h-[50vh] lg:h-[60vh]",
      img: img_1,
      alt: "Carousel Image 3",
      imgClass: "radius-style-1",
      animationVariant: opacityVariants,
    },
  ];

  const [selectedSlide, setSelectedSlide] = useState(0);
  const caRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: caRef,
    offset: ["0 1", "0.9 1.2"],
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
      <Title title={t("home_page.section_2.title")} />
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
              item1={content.item1}
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
