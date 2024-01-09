'use client'
import { stagger, useAnimate, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react'
import CustomButton from '../../CustomButton';

type TSectionThreeProps = {}


const staggerMenuItems = stagger(0.1, { startDelay: 0.5 });

function usePageAnimation(isInView: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".txt-custom",
      isInView
        ? { opacity: 1, filter: "blur(0px)" }
        : { opacity: 0, filter: "blur(20px)" },
      {
        duration: 1,
        delay: isInView ? staggerMenuItems : 0,
      }
    );
  }, [isInView]);

  return scope;
}

const SectionThree = ({ }: TSectionThreeProps) => {
  const t = useTranslations('container');

  const pageRef = useRef(null);
  const isInView = useInView(pageRef);
  const scope = usePageAnimation(isInView);
  return (
    <div ref={pageRef} className="section-3 h-screen relative mt-32">
      <div className='bg-[#00000026] h-full'>
        <div ref={scope} className="absolute md:w-auto 2xs:w-[60%] w-[90%] top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="txt-custom text-3xl sm:text-4xl lg:text-5xl">{t('home_page.section_3.title')}</h2>
          <p className="txt-custom text-sm 2xs:text-base sm:text-lg mt-4 sm:mt-8 mb-8">{t('home_page.section_3.content')}</p>
          <CustomButton href='about' content='read_btn' className="read-btn !px-10" />
        </div>
      </div>
    </div>
  )
}

export default SectionThree;