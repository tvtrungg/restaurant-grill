import CardItem from '@/app/components/CardItem';
import { hot_menu } from '@/data/data';
import React from 'react'

type Props = {}

const HotMenuPage = (props: Props) => {
  return (
    <div className='max-w-screen-2xl mx-auto px-10 2xs:px-12 sm:px-20 xl:px-32'>
      <div className='grid 2xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {hot_menu.map((item, index) => (
          <CardItem key={index} src={item.cdn.src} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  )
}

export default HotMenuPage;
