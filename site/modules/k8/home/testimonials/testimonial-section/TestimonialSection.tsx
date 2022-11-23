import { Typography } from '@components/ui'
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
  return (
    <div className="flex flex-col gap-2 md:gap-4 w-full">
      <Typography >Parent's Voice</Typography>

      <div className={style.cardContainer}>
        {TESTIMONIAL_DATA.map((data: any, idx: number) => (
          <TestimonialCard key={data._id} testimonialData={data} />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSection

{
  /* <div className={`${style.cardContainer} pt-6 pb-2 px-2`}>
          {[1, 2, 3].map((i: any) => (
            <TestimonialCard key={i} />
          ))}
        </div> */
}
