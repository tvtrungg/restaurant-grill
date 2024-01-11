"use client";
import Content from "@/app/components/Content";
import img_1 from "@/public/images/carousel/1.jpg";
import { useTranslations } from "next-intl";

function ProfessionalismPage() {
  const t = useTranslations("container");
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="mb-12 text-[--primary-color]">
        <h1 className="text-2xl xs:text-3xl 2xs:text-4xl tracking-wider text-center uppercase pb-5">
          {t("about_page.nav2")}
        </h1>
        <div className="w-[10%] mx-auto border-b-[3px] border-[--primary-color]"></div>
      </div>
      <Content
        title={t("about_page.content_1.title")}
        content={t("about_page.content_1.content")}
        img={img_1}
        alt={t("about_page.content_1.title")}
        item1="lg:basis-[40%]"
        item2="lg:basis-[50%] h-[40vh] sm:h-[50vh] lg:h-[60vh]"
        imgClass="rounded-[40px]"
      />

      <Content
        className="lg:flex-row-reverse"
        title={t("about_page.content_2.title")}
        content={t("about_page.content_2.content")}
        img={img_1}
        alt={t("about_page.content_2.title")}
        item1="lg:basis-[40%]"
        item2="lg:basis-[50%] h-[40vh] sm:h-[50vh] lg:h-[60vh]"
        imgClass="rounded-[40px]"
      />

      <Content
        className="lg:flex-col"
        title={t("about_page.content_3.title")}
        content={t("about_page.content_3.content")}
        img={img_1}
        alt={t("about_page.content_3.title")}
        item2="lg:w-3/4 h-[40vh] sm:h-[50vh] lg:h-[60vh]"
        imgClass="rounded-[40px]"
      />
    </div>
  );
}

export default ProfessionalismPage;
