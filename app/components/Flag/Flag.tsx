import React from 'react'
import Image from 'next/image'
import VnFlag from '@/public/images/flags/vn1.png'
import EnFlag from '@/public/images/flags/en1.png'
import Link from 'next/link'
import { LINK } from '@/app/constants/constants'
type Props = {
  currentRoute: string
}

const Flag = ({ currentRoute }: Props) => {
  return (
    <div className='flex justify-between items-center gap-1 mb-8 md:mb-0'>
      <Link className="mx-2" href={`/${LINK.VN}/${currentRoute}`}>
        <Image
          src={VnFlag}
          alt='en'
          width={25}
          height={17}
          priority
        />
      </Link>
      <Link className="mx-2" href={`/${LINK.EN}/${currentRoute}`}>
        <Image
          src={EnFlag}
          alt='en'
          width={25}
          height={17}
          priority
        />
      </Link>
    </div>
  )
}

export default Flag