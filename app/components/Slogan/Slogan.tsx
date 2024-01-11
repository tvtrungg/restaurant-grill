"use client";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const Slogan = ({ className }: Props) => {
  const t = useTranslations("container");

  return (
    <h3
      className={twMerge(
        "text-sm xs:text-base 2xs:text-lg text-center my-4 text-slate-200 italic font-serif",
        className
      )}
    >
      {t("home_page.section_1.slogan")}
    </h3>
  );
};

export default Slogan;
