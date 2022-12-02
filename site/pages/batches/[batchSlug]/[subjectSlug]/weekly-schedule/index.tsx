import { Layout } from '@components/common'
import { Card, Container, Typography } from '@components/ui'
import Image from 'next/image'
import Subject from '@assets/images/subject.svg'
import { ClassCard, WeekCard } from '@modules/k8'
import { useRouter } from 'next/router'
import useRecentSchedule from '@lib/hooks/batches/useRecentSchedule'

const WeeklySchedule = () => {
  const router = useRouter()
  const { batchSlug, subjectSlug } = router.query

  const { data, isLoading } = useRecentSchedule({
    batchSlug: batchSlug as string,
    subjectSlug: subjectSlug as string,
  })

  return (
    <Container className="flex flex-col gap-28 w-full">
      <div className="flex items-center gap-4">
        <Image src={Subject} alt="icon" />
        <Typography variant="heading3" weight={700}>
          Maths Weekly Schedule
        </Typography>
      </div>

      <Card>
        <div className="px-8 md:px-16 relative">
          <div className="absolute left-1/2 -top-[3.5rem] -translate-x-1/2 w-[90%]">
            <WeekCard />
          </div>

          <div className="pt-28 md:pt-20 pb-12 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Typography variant="heading4" weight={500}>
                <span className="text-gray-700">Upcoming classes</span>
              </Typography>
              <div className="flex items-center gap-6">
                {[1, 2, 3].map((i: any, idx: number) => (
                  <div
                    key={i}
                    className={`grow ${idx > 0 ? 'hidden md:block' : ''}`}
                  >
                    <ClassCard isLive={i === 1 ? true : false} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Typography variant="heading4" weight={500}>
                <span className="text-gray-700">Recorded classes</span>
              </Typography>

              <div className="flex items-center gap-6">
                {[1, 2, 3].map((i: any, idx: number) => (
                  <div
                    key={i}
                    className={`grow ${idx > 0 ? 'hidden md:block' : ''}`}
                  >
                    <ClassCard
                      isLive={i === 1 ? true : false}
                      variant="recorded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default WeeklySchedule
WeeklySchedule.Layout = Layout
