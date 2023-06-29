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
    title: 'Who all can apply for PW Marvels?',
    description:
      'Any student studying in Class 8th to 10th can apply for the PW Marvels. In order to nominate he/she must have proved himself/herself on National and International level examination/scholarships/awards mentioned in our eligibility criteria.',
  },
  {
    title: 'How will PW decide who all should be rewarded?',
    description:
      ' PW will decide the ranks based on a two stage process. Stage 1: Profile Selection and Stage 2: Interactive activity  Round with a panel of PW Experts.',
  },
  {
    title: 'How will the Student Profile be created?',
    description:
      'Student”s Profile is a collection of his/her achievements mentioned during the nomination process. Each Exam and Rank/Awards/Scholarship associated with it will be given unique marks, based on that, total marks of the student will be calculated.',
  },
  {
    title: 'How will the Overall Rank of a student be decided by PW?',
    description:
      'Total marks of students will be calculated by addition of Profile marks and Interactive activity Marks. Thus, based on Total Marks, Ranks will be declared class-wise.',
  },
  {
    title: 'How many students will be rewarded in each class?',
    description:
      'In each class, students will be rewarded till 10th rank, whereas Rank will be declared for all Qualified students for Stage 2 Interactive activity',
  },
  {
    title:
      'Is the presence of students essential for getting rewards during the PW Marvels function?',
    description:
      'YES , In case a student fails to present himself/herself, the reward will not be given to the parents or guardian.',
  },
]

const Faq: React.FC<FaqProps> = (props) => {
  const rootClassName = cn(s.root, {})

  return (
    <>
      <section className="mt-[80px]">
        <Container className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <span className={s.heading_top}>Ask us</span>
          </div>
          <div className="flex justify-center">
            <span className={s.heading}>Frequently asked questions</span>
          </div>
          <div className="my-14 w-3/4	 mx-auto ">
            <FAQ items={items} hideFAQTitle />
          </div>
        </Container>
      </section>
    </>
  )
}

export default Faq
