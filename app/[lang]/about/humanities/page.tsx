"use client"
import Content from "@/app/components/Content";
import img_1 from '@/public/images/carousel/1.jpg'
import { useTranslations } from "next-intl";


function HumanitiesPage() {
  const t = useTranslations('container.about_page')
  return (
    <div className="max-w-screen-2xl mx-auto sm:px-20">
      <div className="mb-12 text-[--primary-color]">
        <h1 className="text-2xl xs:text-3xl 2xs:text-4xl tracking-wider text-center uppercase pb-5">
          {t('nav4')}
        </h1>
        <div className="w-[10%] mx-auto border-b-[3px] border-[--primary-color]"></div>
      </div>
      <Content
        title={t('content_3.title')}
        content={t('content_3.content')}
        className="lg:flex-col-reverse"
        img={img_1}
        alt={t('content_3.title')}
        item2='lg:basis-auto h-[40vh] sm:h-[50vh] lg:h-[60vh]'
      />



    </div>
  );
}

export default HumanitiesPage