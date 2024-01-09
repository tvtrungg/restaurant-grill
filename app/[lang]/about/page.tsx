"use client"
import Content from "@/app/components/Content";
import img_1 from '@/public/images/carousel/1.jpg'
import { useTranslations } from "next-intl";


function About() {
    const t = useTranslations('container')
    return (
        <div className="max-w-screen-2xl mx-auto sm:px-20">
            <Content
                title={t('about_page.content_1.title')}
                content={t('about_page.content_1.content')}
                img={img_1}
                alt={t('about_page.content_1.title')}
                item1='lg:basis-[40%]'
                item2='lg:basis-[60%] customer-img-1 h-[40vh] sm:h-[50vh] lg:h-[60vh]'
            />

            <Content
                className="lg:flex-row-reverse my-10"
                title={t('about_page.content_2.title')}
                content={t('about_page.content_2.content')}
                img={img_1}
                alt={t('about_page.content_2.title')}
                item1='lg:basis-[40%]'
                item2='lg:basis-[60%] customer-img-2 h-[40vh] sm:h-[50vh] lg:h-[60vh]'
            />

            <Content
                className="lg:flex-col"
                title={t('about_page.content_3.title')}
                content={t('about_page.content_3.content')}
                img={img_1}
                alt={t('about_page.content_3.title')}
                item2='lg:basis-auto h-[40vh] sm:h-[50vh] lg:h-[60vh]'
            />
        </div>
    );
}

export default About;