"use client"
import Content from "@/app/components/Content";
import img_1 from '@/public/images/carousel/1.jpg'
import { useTranslations } from "next-intl";


function ArtPage() {
  const t = useTranslations('container.about_page')
  return (
    <div className="max-w-screen-2xl mx-auto sm:px-20">
      <div className="mb-12 text-[--primary-color]">
        <h1 className="text-2xl xs:text-3xl 2xs:text-4xl tracking-wider text-center uppercase pb-5">
          {t('nav3')}
        </h1>
        <div className="w-[10%] mx-auto border-b-[3px] border-[--primary-color]"></div>
      </div>
      <Content
        title={t('content_2.title')}
        content={t('content_2.content')}
        className="lg:flex-col"
        img={img_1}
        alt={t('content_2.title')}
        item2='lg:basis-auto h-[40vh] sm:h-[50vh] lg:h-[60vh]'
      />



    </div>
  );
}

export default ArtPage;

