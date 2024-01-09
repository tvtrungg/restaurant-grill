import useGetPath from '@/lib/useGetPath';
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import React from 'react'

type Props = {
    href: string;
    content: string;
    className?: string;
}

const CustomButton = ({ href, content, className }: Props) => {
    const lang = useGetPath()[1]
    const t = useTranslations('container');

    return (
        <button className={className}><Link href={`${lang}/${href}`}>{t(`button.${content}`)}</Link></button>
    )
}

export default CustomButton