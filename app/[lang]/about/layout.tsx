"use client"

import { useTranslations } from 'next-intl';
import useGetPath from '@/lib/useGetPath';
import CustomContent from '@/app/components/CustomContent';
import SubNavigation from '@/app/components/SubNavigation';

type AboutLayoutProps = {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export default function AboutLayout({ children, params }: AboutLayoutProps) {
  const t = useTranslations('container')
  const navItems = [
    { href: `about`, label: t('about_page.nav1') },
    { href: `about/professionalism`, label: t('about_page.nav2') },
    { href: `about/art`, label: t('about_page.nav3') },
    { href: `about/humanities`, label: t('about_page.nav4') },
  ];
  
  let currentRoute = useGetPath()[3] || 'about';
  let matchingNavItem = navItems.find((item) => currentRoute.startsWith(item.href.split('/').slice(-1)[0]));
  let navName = matchingNavItem ? matchingNavItem.label : t('about_page.nav1');

  return (
    <main className='about-container'>
      <CustomContent
        brand='brand' intro='about_page.intro' background='about-bg' title=''
        subNav={
          <SubNavigation params={params} navItems={navItems} currentRoute={currentRoute} navName={navName} />
        }
        children={children}
      />
    </main>
  )
}