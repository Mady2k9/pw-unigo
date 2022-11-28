import { LoadingSection, Typography } from '@components/ui'
import useTestimonials from '@lib/hooks/batches/useCohortTestimonials'
import { useEffect } from 'react'
import { useState } from 'react'
import TestimonialCard from '../testimonial-card/TestimonialCard'
import style from './TestimonialSection.module.css'

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: 'Father of Ayush',
    desc: 'This PW App is really Nice. Really Helping My Son Soo Much. Actually Childrens rather than Simply studying, They like to visualize the things',
  },
  {
    id: 2,
    name: 'Father of Amir',
    desc: 'This PW App is really Nice. Really Helping My Son Soo Much. Actually Childrens rather than Simply studying, They like to visualize the things',
  },
  {
    id: 3,
    name: 'Father of Vikash',
    desc: 'This PW App is really Nice. Really Helping My Son Soo Much. Actually Childrens rather than Simply studying, They like to visualize the things',
  },
]

const TestimonialSection = () => {
  const { data, isLoading } = useTestimonials({
    cohortId: '637cb2ad8dcf800025f2fe68',
  })
  console.log(data)
  if (isLoading) return <LoadingSection />

  const { testimonialsData } = data
  if (testimonialsData.length === 0) return <></>
  return (
    <div className="flex flex-col gap-9 md:gap-11 w-full">
      <Typography variant="heading3" weight={700}>
        Parent's Voice
      </Typography>

      <div className={style.cardContainer}>
        {testimonialsData &&
          testimonialsData.map((data: any, idx: number) => (
            <TestimonialCard key={data._id} testimonialData={data} />
          ))}
      </div>
    </div>
  )
}

export default TestimonialSection
