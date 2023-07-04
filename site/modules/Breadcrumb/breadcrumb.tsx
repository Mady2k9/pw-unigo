import React from 'react'
import cn from 'clsx'
import s from './breadcrumb.module.css'
import { Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'

export interface BreadcrumbProps {
  items: { name: string; url: string }[]
  title: string
  homeLink: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { items, title, homeLink } = props
  const rootClassName = cn(s.root, {})

  return (
    <div className="bg-[#F8F8F8] w-full">
      <Container className="w-full max-w-6xl py-4">
        <div className={s.text}>
          <Typography weight={500} variant="small">
            <a href={homeLink}>Home</a>
          </Typography>

          {items.map((item, index) => {
            return (
              <Typography weight={500} variant="small">
                &nbsp; &gt; <a href={item.url}>{item.name}</a>
              </Typography>
            )
          })}
        </div>
        <div className="mx-auto max-w-6xl mt-2">
          <Typography weight={500} variant="heading3">
            <div className={s.tex1}>{title}</div>
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default Breadcrumb
