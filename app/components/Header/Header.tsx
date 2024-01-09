'use client'
import "./Header.css"
import { useTranslations } from 'next-intl';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MenuOutlined } from "@ant-design/icons"
import NavTop from './NavTop';
import Navigation from '../Navigation';
import Flag from '../Flag';
import useGetPath from "@/lib/useGetPath";
import Logo from "../Logo";

type THeaderProps = {
  lang: string
}

function Header({ lang }: THeaderProps) {
  const t = useTranslations('container')
  let currentRoute = useGetPath().splice(2).join('/');

  const navItems = [
    { href: ``, label: t('header.nav1') },
    { href: `about`, label: t('header.nav2') },
    { href: `products`, label: t('header.nav3') },
    { href: `news`, label: t('header.nav4') },
    { href: `contact`, label: t('header.nav5') },
  ];

  const [hidden, setHidden] = useState(false);
  const [hiddenNavTop, setHiddenNavTop] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150 && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 150) {
      setHiddenNavTop(true);
    } else {
      setHiddenNavTop(false);
    }
  })

  let hideTimeout: any;

  useEffect(() => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(() => {
      if (!hidden && scrollY.get() > 150 && !open) {
        setHidden(true);
      }
    }, 3000);

    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hidden]);


  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-110%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full h-16 text-base z-10">
      <div className="nav-menu text-white max-w-screen-2xl mx-auto bg-[#0000009c] py-1">
        <div className="mx-14 flex justify-between items-center">
          <Logo
            attribute={{
              width: 62,
              height: 62,
              priority: true,
            }}
          />
          <ul className="hidden md:flex justify-center items-center uppercase gap-10">
            <Navigation
              navItems={navItems}
              lang={lang}
              currentRoute={currentRoute}
              flagComponents={<Flag currentRoute={currentRoute} />}
            />
          </ul>
          <MenuOutlined className='text-2xl md:hidden' onClick={() => { setOpen(!open) }} />
        </div>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-nav flex flex-col md:flex justify-center items-center uppercase gap-8"
              onClick={() => { setOpen(!open) }}
            >
              <Navigation
                navItems={navItems}
                lang={lang}
                currentRoute={currentRoute}
                flagComponents={<Flag currentRoute={currentRoute} />}
              />
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

    </motion.header >
  );
}

export default Header;