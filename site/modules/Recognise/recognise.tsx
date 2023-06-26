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
      <div className={s.text}>Why pw marvels?</div>
      <div className={s.text1}>We Believe in Recognising Talent</div>
      <div className="md:flex md:flex-row gap-4 w-full mb-10">
        <Card
          children={
            <>
              <div className="flex mx-4 mt-6">
                <div>
                  <img src={Rec.src} alt="Achiever" width={47} height={47} />
                </div>
                <div className="mx-4 mt-3">
                  <Typography weight={500} variant="heading3">
                    Vision
                  </Typography>
                </div>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                  <Typography weight={500} variant="regular">
                    To Nurture & Transform Young Minds Into Leaders Of Change,
                    Who Succeed In Everything They Do & Make Progress An
                    Everyday Habit!
                  </Typography>
                </p>
              </div>
            </>
          }
        />
        <Card
          children={
            <div>
              <div className="flex mx-4 mt-6">
                <div>
                  <img src={Recog.src} alt="Achiever" width={47} height={47} />
                </div>
                <div className="mx-4 mt-3">
                  <Typography weight={500} variant="heading3">
                    Mission
                  </Typography>
                </div>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                  <Typography weight={500} variant="regular">
                    To Encourage These Young Minds By Celebrating Their
                    Accomplishments & Mentoring Them To Become Successful In
                    Their Academic Pursuits & Their Career Goals!
                  </Typography>
                </p>
              </div>
            </div>
          }
        />
      </div>
    </Container>
  )
}

export default Recognise
