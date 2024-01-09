'use client'
import CustomBanner from "../CustomBanner"
import { useTranslations } from "next-intl";

type Props = {
   children: React.ReactNode
   subNav?: React.ReactNode
   brand: string
   intro: string
   background: string
   title?: string
}

const CustomContent = ({ children, subNav, brand, intro, background, title }: Props) => {
   const t = useTranslations('container')

   return (
      <>
         <CustomBanner brand={t(brand)} intro={t(intro)} background={background} />
         {subNav}
         <section className="max-w-screen-2xl mx-auto px-10 2xs:px-12 sm:px-20 xl:px-32 py-20">
            {title &&
               <div className="mb-12 text-[--primary-color]">
                  <h1 className="text-2xl xs:text-3xl 2xs:text-4xl tracking-wider text-center uppercase pb-5">
                     {t(title)}
                  </h1>
                  <div className="w-[8%] mx-auto border-b-[3px] border-[--primary-color]"></div>
               </div>
            }
            {children}
         </section>
      </>
   )

}

export default CustomContent