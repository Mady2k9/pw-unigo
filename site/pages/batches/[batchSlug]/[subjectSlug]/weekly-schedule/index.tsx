import { Layout } from '@components/common'
import {
  Card,
  Container,
  LoadingSection,
  NoData,
  Typography,
} from '@components/ui'
import Image from 'next/image'
import { ClassCard, WeekCard } from '@modules/k8'
import { useRouter } from 'next/router'
import useRecentSchedule, {
  RecentSchedule,
  Schedule,
} from '@lib/hooks/batches/useRecentSchedule'
import { useEffect, useState } from 'react'
import { isBefore, isAfter } from 'date-fns'
import { ClassMode } from '@modules/k8/constants'
import useBatchDetails, { Subject } from '@lib/hooks/batches/useBatchDetails'
import {getImageUrlFromObjectImageId} from "@lib/utilities";

const WeeklySchedule = () => {
  const router = useRouter()
  const { batchSlug, subjectSlug } = router.query

  const { data: batchDetail, isLoading: batchDetailLoading } = useBatchDetails({
    batchSlug: batchSlug as string,
  })

  const { data, isLoading } = useRecentSchedule({
    batchSlug: batchSlug as string,
    subjectSlug: subjectSlug as string,
  })

  if (batchDetailLoading) return <LoadingSection />

  const subjectName = batchDetail?.subjects.find(
    (subj: any) => subj.slug === subjectSlug
  ) as Subject

  return (
    <Container className="flex flex-col gap-24 w-full">
      <div className="flex items-center justify-center md:justify-start gap-4">
        <div className="relative hidden md:block h-[71px] w-[71px]">
          <Image
            src={getImageUrlFromObjectImageId(subjectName?.imageId)}
            alt="icon"
            layout="fill"
          />
        </div>
        <Typography variant="heading3" weight={700}>
          {subjectName?.subject}
        </Typography>
      </div>

      {isLoading && <LoadingSection />}

      <WeeklyScheduleCard data={data} />
    </Container>
  )
}

const WeeklyScheduleCard = ({ data }: { data: RecentSchedule[] }) => {
  const [activeDay, setActiveDay] = useState(0)
  const [upcomingClasses, setUpcomingClasses] = useState<Schedule[]>([])
  const [recordedClasses, setRecordedClasses] = useState<Schedule[]>([])

  useEffect(() => {
    const dataLength = data && data.length
    const active = data.findIndex((d) => d.isActive)
    console.log(active, 'active')
    setActiveDay(active !== -1 ? active : dataLength - 2)
  }, [data])

  useEffect(() => {
    const recorded = data[activeDay]?.schedules.filter((c: Schedule) => {
      return isBefore(new Date(c.endTime), new Date())
    })

    setRecordedClasses(recorded)

    const upcoming = data[activeDay]?.schedules.filter((c: Schedule) => {
      return isAfter(new Date(c.endTime), new Date())
    })
    setUpcomingClasses(upcoming)
  }, [activeDay])

  if (data.length === 0) return <NoData />

  return (
    <Card>
      <div className="px-8 md:px-16 relative">
        <div className="absolute left-1/2 -top-[3.5rem] -translate-x-1/2 w-[90%]">
          <WeekCard data={data} setActiveDay={setActiveDay} />
        </div>

        <div className="pt-28 md:pt-20 pb-12 flex flex-col gap-8">
          {upcomingClasses && upcomingClasses.length > 0 && (
            <div className="flex flex-col gap-4">
              <Typography variant="heading4" weight={500}>
                <span className="text-gray-700">Upcoming classes</span>
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcomingClasses.map((schedule: Schedule, idx: number) => {
                  const isLive =
                    isAfter(new Date(schedule.startTime), new Date()) &&
                    isBefore(new Date(), new Date(schedule.endTime))
                  return (
                    <div
                      key={schedule._id}
                      className={`grow ${idx > 0 ? 'hidden md:block' : ''}`}
                    >
                      <ClassCard variant={ClassMode.UPCOMING} isLive={isLive} />
                    </div>
                  )
                })}
              </div>
            </div>
          )}
          {recordedClasses && recordedClasses.length > 0 && (
            <div className="flex flex-col gap-4 ">
              <Typography variant="heading4" weight={500}>
                <span className="text-gray-700">Recorded classes</span>
              </Typography>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recordedClasses.map((schedule: Schedule, idx: number) => (
                  <div
                    key={schedule._id}
                    className={`grow ${idx > 0 ? 'hidden md:block' : ''}`}
                  >
                    <ClassCard variant={ClassMode.RECORDED} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

export default WeeklySchedule
WeeklySchedule.Layout = Layout
