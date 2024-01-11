"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Menu from "@/public/images/menu/menu.jpg";
import Menu_1 from "@/public/images/menu/menu_1.jpg";

function Products() {
  const t = useTranslations("container");
  return (
    <>
      <div className="mb-12 text-[--primary-color]">
        <h1 className="text-2xl xs:text-3xl 2xs:text-4xl tracking-wider text-center uppercase pb-5">
          {t("products_page.intro")}
        </h1>
        <div className="w-[10%] mx-auto border-b-[3px] border-[--primary-color]"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-20 ">
        <div className="mx-auto w-full  aspect-[1/1.5] relative overflow-hidden rounded-[20px] 2xs:rounded-[40px]">
          <Image
            src={Menu}
            alt="Menu"
            fill
            sizes="100%"
            className="object-cover "
          />
        </div>
        <div className="mx-auto w-full  aspect-[1/1.5] relative overflow-hidden rounded-[20px] 2xs:rounded-[40px]">
          <Image
            src={Menu_1}
            alt="Menu"
            fill
            sizes="100%"
            className="object-cover "
          />
        </div>
      </div>
    </>
  );
}

export default Products;
