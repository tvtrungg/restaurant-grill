"use client";

import "./Footer.css";
import {
  EnvironmentFilled,
  FacebookFilled,
  InstagramFilled,
  MailFilled,
  PhoneFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Logo from "../Logo";
import { LINK } from "@/app/constants/constants";

type TFooterProps = {};

function Footer({}: TFooterProps) {
  const t = useTranslations("container");

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const footerCopyright = document.querySelector(".footer-copyright");

    const handleScroll = () => {
      if (footerCopyright) {
        const footerRect = footerCopyright.getBoundingClientRect();
        if (footerRect.top < window.innerHeight) {
          setShowBackToTop(true);
        } else {
          setShowBackToTop(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer id="footer" className="w-full footer">
      <div className="max-w-screen-2xl relative my-0 mx-auto flex-col items-center text-center md:text-left text-white p-8">
        <div className="text-[--grey-2] flex flex-col justify-between items-center md:items-start md:flex-row md:w-[90%] xl:w-[85%] md:gap-12">
          <Logo
            parentClassName="mb-8"
            attribute={{ width: 180, height: 202, loading: "lazy" }}
          />
          <div>
            <h2 className="pb-3 text-3xl tracking-wider text-[--primary-color] font-bold uppercase">
              {t("footer.title")}
            </h2>
            <ul className="flex flex-col gap-2.5">
              <li>
                <PhoneFilled className="mr-3 text-[--primary-color] align-text-top" />
                <a
                  className=" hover:text-[--primary-color] hover:font-medium"
                  href="tel:0123456789"
                >
                  {t("phone")}
                </a>
              </li>
              <li>
                <MailFilled className="mr-3 text-[--primary-color] align-text-top" />
                <a
                  className="hover:text-[--primary-color] hover:font-medium"
                  href="mailto:company@gmail.vn"
                >
                  {t("mail")}
                </a>
              </li>
              <li>
                <EnvironmentFilled className="mr-3 text-[--primary-color] align-text-top" />
                <a
                  className="hover:text-[--primary-color] hover:font-medium"
                  href={`/${LINK.CONTACT}`}
                >
                  {t("address")}
                </a>
              </li>
              <li>{t("footer.brn")}</li>
              <li>{t("footer.brn_date")}</li>
              <li>{t("footer.place_of_issue")}</li>
            </ul>
          </div>
          <div>
            <h2 className="mt-8 md:mt-0 pb-2 text-2xl tracking-wider text-[--primary-color] font-bold uppercase">
              {t("footer.sub_title_1")}
            </h2>
            <ul className="text-3xl flex justify-around items-center gap-2">
              <li>
                <a
                  href="https://www.facebook.com/wearewraparty"
                  target="_blank"
                >
                  <FacebookFilled className="mr-3 hover:text-[--primary-color]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wearewraparty"
                  target="_blank"
                >
                  <InstagramFilled className="mr-3 hover:text-[--primary-color]" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@wraparty3735" target="_blank">
                  <YoutubeFilled className="mr-3 hover:text-[--primary-color]" />
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <h2 className="pb-2 text-2xl tracking-wider text-[--primary-color] font-bold uppercase">
              {t("footer.sub_title_2")}
            </h2>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  className="hover:text-[--primary-color] hover:font-medium"
                  href={`/${LINK.HOME}`}
                >
                  {t("header.nav1")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[--primary-color] hover:font-medium"
                  href={`/${LINK.ABOUT}`}
                >
                  {t("header.nav2")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[--primary-color] hover:font-medium"
                  href={`/${LINK.PRODUCTS}`}
                >
                  {t("header.nav3")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[--primary-color] hover:font-medium"
                  href={`/${LINK.NEWS}`}
                >
                  {t("header.nav4")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[--primary-color] hover:font-medium"
                  href={`/${LINK.CONTACT}`}
                >
                  {t("header.nav5")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`back-to-top cursor-pointer fixed right-10 bottom-[20%] font-bold ${
            showBackToTop ? "visible" : "hidden"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="flex items-center justify-center">
            <p className="opacity-0 sm:text-sm text-xs">Back to top &nbsp;</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bg-[--primary-color] rounded-full h-6.5 w-6.5 sm:h-9 sm:w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="footer-copyright py-5 bg-[--black-1]">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="pl-8">Copyright © 2023 Tabi Grill</h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
