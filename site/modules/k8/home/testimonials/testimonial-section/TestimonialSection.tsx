import { LoadingSection, Typography } from '@components/ui'
import useTestimonials from '@lib/hooks/batches/useCohortTestimonials'
import TestimonialCard from '../testimonial-card/TestimonialCard'
import style from './TestimonialSection.module.css'

const TestimonialSection = () => {
  const { data, isLoading } = useTestimonials({
    cohortId: process.env.NEXT_PUBLIC_K8_COHORT_ID as string,
  })
  if (isLoading) return <LoadingSection />

  const { testimonialsData } = data
  if (testimonialsData.length === 0) return <></>
  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full mt-0 md:mt-16 ">
      <Typography variant="heading3" weight={700}>
        Parent's Voice
      </Typography>

      <div className={style.cardContainer}>
        {testimonialsData &&
          testimonialsData.map((data: any) => (
            <div key={data._id} className="min-w-[287px]">
              <TestimonialCard testimonialData={data} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default TestimonialSection
