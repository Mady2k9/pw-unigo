import React from 'react'
import cn from 'clsx'
import s from './recognise.module.css'
import Card from '@components/ui/Card/MarvelCard'
import Rec from 'assets/images/marvel/group-37450.svg'
import Recog from 'assets/images/marvel/group-37449.svg'
import Container from '@components/ui/Container/Container'
import { Typography } from '@components/ui'

export interface RecogniseProps {
  data: any
}

const Recognise: React.FC<RecogniseProps> = (props) => {
  const rootClassName = cn(s.root, {})

  return (
    <Container className="mx-auto max-w-6xl w-full mt-10">
      <div className="flex justify-center">
        <span className={s.heading_top}>Why pw marvels?</span>
      </div>
      <div className="flex justify-center">
        <span className={s.heading}>We Believe in Recognising Talent</span>
      </div>
      <div className="flex sm:flex-row flex-col gap-8 w-full mb-10 mt-5">
        <div className={s.card}>
          <div className="flex flex-row">
            <img src="/vision.svg" alt="vision" />
            <span className={s.card_heading}>Vision</span>
          </div>
          <div className={s.card_sub_heading}>
            To Nurture & Transform Young Minds Into Leaders Of Change, Who
            Succeed In Everything They Do & Make Progress An Everyday Habit!
          </div>
        </div>
        <div className={s.card}>
          <div className="flex flex-row">
            <img src="/vision.svg" alt="vision" />
            <span className={s.card_heading}>Mission</span>
          </div>
          <div className={s.card_sub_heading}>
            To Encourage These Young Minds By Celebrating Their Accomplishments
            & Mentoring Them To Become Successful In Their Academic Pursuits &
            Their Career Goals!
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Recognise
