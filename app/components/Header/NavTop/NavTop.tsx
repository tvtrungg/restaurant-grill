"use client"
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { useTranslations } from 'next-intl'
import Logo from '../../Logo'

type Props = {}

const NavTop = ({ }: Props) => {
  const t = useTranslations('container')

  return (
    <div className='relative w-full max-w-screen-2xl mx-auto flex justify-center items-center gap-8 md:'>
      <div className="flex justify-between items-center gap-2">
        <p>{t('date')}</p>
      </div>

      <div className="flex justify-between items-center gap-2">
        <PhoneOutlined />
        <p>{t('phone')}</p>
      </div>

      <div className="flex justify-between items-center gap-2">
        <MailOutlined />
        <p>{t('mail')}</p>
      </div>

      <Logo
        className='absolute -top-full left-5'
        attribute={{
          width: 75,
          height: 118,
          priority: true,
        }}
      />
    </div>
  )
}

export default NavTop;