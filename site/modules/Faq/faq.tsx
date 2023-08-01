import React from 'react'
import cn from 'clsx'
import s from './faq.module.css'
import { FAQ, Loader, Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'

export interface FaqProps {
  data: any
}
const description = 'sd'

const items = [
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
]

const Faq: React.FC<FaqProps> = (props) => {
  const rootClassName = cn(s.root, {})

  return (
    <>
      <section className="mt-[20px]">
        <Container className="mx-auto max-w-7xl">
          <div className="flex justify-center">
            <span className={s.heading}>
              You have questions. We have answers!
            </span>
          </div>
          <div className="flex justify-center">
            <span className={s.heading_top}>
              Check out the most commonly asked questions and their answers.
            </span>
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
