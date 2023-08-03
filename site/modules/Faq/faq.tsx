import React from 'react'
import cn from 'clsx'
import s from './faq.module.css'
import { FAQ, Loader, Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'

export interface FaqProps {
  items: { title: string; description: string }[]
  heading: string
  subheading: string
}

const Faq: React.FC<FaqProps> = (props) => {
  const { items, heading, subheading } = props
  const rootClassName = cn(s.root, {})

  return (
    <>
      <section className="mt-[20px]">
        <Container className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <span className={s.heading}>{heading}</span>
          </div>
          <div className="flex justify-center">
            <span className={s.heading_top}>{subheading}</span>
          </div>
          <div className="my-6 mx-auto w-full">
            <FAQ items={items} hideFAQTitle />
          </div>
        </Container>
      </section>
    </>
  )
}

export default Faq
