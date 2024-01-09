'use client'
import { useTranslations } from 'next-intl';

type Props = {}

const Slogan = ({ }: Props) => {
    const t = useTranslations('container');

    return (
        <h3 className="text-sm xs:text-base 2xs:text-lg text-center mt-2">{t('home_page.section_1.slogan')}</h3>
    )
}

export default Slogan