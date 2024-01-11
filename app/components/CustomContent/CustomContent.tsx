"use client";
import CustomBanner from "../CustomBanner";
import { useTranslations } from "next-intl";
import Title from "../Title";

type Props = {
  children: React.ReactNode;
  subNav?: React.ReactNode;
  brand: string;
  intro: string;
  background: string;
  title?: string;
};

const CustomContent = ({
  children,
  subNav,
  brand,
  intro,
  background,
  title,
}: Props) => {
  const t = useTranslations("container");

  return (
    <>
      <CustomBanner brand={t(brand)} intro={t(intro)} background={background} />
      {subNav}
      <section className="max-w-screen-2xl mx-auto px-10 2xs:px-12 sm:px-20 xl:px-32 py-20">
        {title && (
          <Title
            title={t(title)}
            fontSize="text-2xl xs:text-3xl 2xs:text-4xl"
          />
        )}
        {children}
      </section>
    </>
  );
};

export default CustomContent;
