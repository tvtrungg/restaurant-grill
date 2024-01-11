import { LINK } from "@/app/constants/constants";
import Slogan from "../../Slogan";

type TSectionOneProps = {};

const SectionOne = ({}: TSectionOneProps) => {
  return (
    <div className="banner-intro-bg w-full h-screen relative flex justify-center items-center md:gap-20">
      <div className="bg-[#00000026] h-full w-full">
        <div className="absolute top-1/2 -translate-y-1/2 right-[80px] flex flex-col justify-center items-center">
          <div className="home-title-wrapper">
            <div className="title-inner">
              <div className="home-title">
                <h1 className="text-4xl xs:text-6xl 2xs:text-8xl tracking-wider text-center uppercase font-serif">
                  Tabi Grill
                </h1>
              </div>
              <div className="home-sub-title">
                <Slogan />
                <div className="flex gap-6 items-center justify-center mt-10">
                  <a href={`/${LINK.PRODUCTS}`} className="read-btn">
                    Order Now
                  </a>
                  <a
                    href={`/${LINK.ABOUT}`}
                    className="sub-slider-btn !rounded-xl"
                  >
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
