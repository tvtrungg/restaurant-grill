"use client"

import Link from "next/link"
import React, { Fragment } from "react"

type Props = {
  navItems: Array<{
    href: string
    label: string
  }>
  lang: string
  currentRoute: string
  flagComponents?: React.ReactNode
}

const Navigation = ({ navItems, lang, currentRoute, flagComponents }: Props) => {
  return (
    <Fragment>
      {navItems.map((item, index) => (
        <li key={index}
          className={
            currentRoute.split('/').slice(0)[0] === item.href.split('/').slice(-1)[0] ? 'py-3 relative active' : 'py-3 relative'
          }>
          <Link
            href={`/${lang}/${item.href}`}>
            {item.label}
          </Link>
        </li>
      ))}
      {flagComponents}
    </Fragment>
  )
}

export default Navigation