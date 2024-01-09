import { Fragment, useState } from 'react'
import Navigation from '@/app/components/Navigation';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { AnimatePresence, motion } from 'framer-motion';

type TSubNavigationProps = {
   params: {
      lang: string
   }
   navItems: {
      href: string
      label: string
   }[]
   currentRoute: string
   navName: string

}
const SubNavigation = ({ params, navItems, currentRoute, navName }: TSubNavigationProps) => {
   const [isShow, setIsShow] = useState(false);

   return (
      <Fragment>
         <ul className="sub-menu hidden md:flex justify-center items-center uppercase gap-4 mt-20">
            <Navigation navItems={navItems} lang={params.lang} currentRoute={currentRoute} />
         </ul>
         <div className='block md:hidden w-[60%] mx-auto relative mt-20'>
            <h1
               onClick={() => { setIsShow(!isShow) }}
               className={`text-white py-2 text-center bg-[--primary-color] ${isShow ? "rounded-t-xl" : "rounded-xl"} cursor-pointer relative`}>
               {navName}
               <span className='text-sm absolute top-[45%] -translate-y-1/2 right-1 xs:right-2 2xs:right-4'>{isShow ? <UpOutlined /> : <DownOutlined />}</span>
            </h1>
            <AnimatePresence >
               {isShow &&
                  <motion.ul
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 'auto' }}
                     exit={{ opacity: 0, height: 0 }}
                     transition={{ duration: 0.3 }}
                     className="mobile-sub-menu w-full absolute top-10 left-0 flex flex-col justify-center items-center uppercase overflow-hidden bg-white z-20"
                     onClick={() => { setIsShow(!isShow) }}
                  >
                     <Navigation navItems={navItems} lang={params.lang} currentRoute={currentRoute} />
                  </motion.ul>
               }
            </AnimatePresence>
         </div>
      </Fragment>
   )
}

export default SubNavigation