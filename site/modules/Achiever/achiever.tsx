import React from 'react'
import cn from 'clsx'
import s from './achiever.module.css'
import Image from 'next/image'
import { Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'
export interface AchieverProps {
  data: any
}
const Achiever: React.FC<AchieverProps> = (props) => {
  const rootClassName = cn(s.root, {})
  return (
    <Container className="mx-auto xl:max-w-6xl w-full mt-10 flex flex-col sm:flex-row gap-4">
      <div className="lg:hidden md:hidden">
        <div className="flex justify-center">
          <Typography weight={500} variant="heading3">
            About PW Marvels
          </Typography>
        </div>
      </div>
      <div className="md:w-1/2 sm:order-1 order-2">
        <div className="sm:block hidden">
          <div>
            <Typography weight={500} variant="heading3">
              About PW Marvels
            </Typography>
          </div>
        </div>
        <div className="order-last sm:order-first md:order-none lg:order-last xl:order-last">
          <Typography weight={500} variant="regular">
            <p className="py-2">
              Pw marvels are national treasures who have achieved academic
              excellence at such a young age. It is a unique nation wide
              initiative by PW to recognise, honour and take care of Bright
              Minds of India.
            </p>
            <p className="py-2">
              Marvels will be identified based on achievements of students in
              national and international EXAM/ AWARDS/ Scholarships and that is
              Class wise. Each class has a certain set of standard Examinations
              according to which marvels will be selected.
            </p>
            <p className="py-2">
              Marvels will not only be honoured but also mentored for their
              better future endeavours.
            </p>
          </Typography>
        </div>
      </div>
      <div className="md:w-1/2 order-1">
        <img src="/frame-626471.svg" alt="Achiever" width={610} height={350} />
      </div>
    </Container>
  )
}
export default Achiever
