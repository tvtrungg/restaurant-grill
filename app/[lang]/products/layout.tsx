"use client"
import { useTranslations } from 'next-intl';
import useGetPath from '@/lib/useGetPath';
import CustomContent from '@/app/components/CustomContent';
import SubNavigation from '@/app/components/SubNavigation';


type TProductsProps = {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export default function Products({ children, params }: TProductsProps) {
  const t = useTranslations('container')
  const navItems = [
    { href: `products`, label: t('products_page.nav1') },
    { href: `products/drinks-items`, label: t('products_page.nav2') },
    { href: `products/food-items`, label: t('products_page.nav3') },
  ];
  let currentRoute = useGetPath()[3] || 'products';

  let matchingNavItem = navItems.find((item) => currentRoute.startsWith(item.href.split('/').slice(-1)[0]));
  let navName = matchingNavItem ? matchingNavItem.label : t('products_page.nav1');

  return (
    <main className='menu-container'>
      <CustomContent
        brand='brand' intro='products_page.intro' background='banner-menu-bg' title=''
        subNav={
          <SubNavigation params={params} navItems={navItems} currentRoute={currentRoute} navName={navName} />
        }
        children={children}
      />
    </main>
  )
}