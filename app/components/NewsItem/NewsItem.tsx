import Image from "next/image"
import { StaticImageData } from 'next/image';

type TNewsItemProps = {
  src: StaticImageData;
  title: string;
  content: string;
}

const NewsItem = ({ src, title, content }: TNewsItemProps) => {
  return (
    <div className='shadow-lg min-h-[430px]'>
      <div className='image-animation-1 overflow-hidden relative w-full h-[275px]'>
        <Image
          className='object-cover'
          src={src} alt={title}
          fill sizes="(max-width: 768px) w-full"
        />
      </div>
      <div className='w-full text-base p-5 z-[3]'>
        <h2 className='text-xl uppercase text-[--primary-color] font-medium'>{title}</h2>
        <h2 className='text-base mt-1 '>{content}</h2>
      </div>
    </div>
  )
}

export default NewsItem