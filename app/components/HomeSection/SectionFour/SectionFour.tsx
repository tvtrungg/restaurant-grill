"use client";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import CustomButton from "../../CustomButton";
import { motion } from "framer-motion";
import { slideVariants } from "@/app/constants/constants";

type TSectionThreeProps = {};

const SectionThree = ({}: TSectionThreeProps) => {
  const t = useTranslations("container");

  const pageRef = useRef(null);
  const isInView = useInView(pageRef);

  return (
    <div ref={pageRef} className="h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView === true ? "visible" : "hidden"}
        variants={slideVariants}
      >
        <div className="section-3 h-screen relative mt-32">
          <div className="bg-[#00000026] h-full">
            <div className="absolute md:w-auto 2xs:w-[60%] w-[90%] top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="txt-custom text-3xl sm:text-4xl lg:text-5xl">
                {t("home_page.section_4.title")}
              </h2>
              <p className="txt-custom text-sm 2xs:text-base sm:text-lg mt-4 sm:mt-8 mb-8">
                {t("home_page.section_4.content")}
              </p>
              <CustomButton
                href="about"
                content="read_btn"
                className="read-btn !px-10"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionThree;
