import { NoClasses } from '@components/lotties'
import { Container, LoadingSection, NoData, Typography } from '@components/ui'
import style from './LiveClassroom.module.css'
import SubjectCard from '../subject-card/SubjectCard'
import { useRouter } from 'next/router'
import { BatchDetailModel, Subject } from '@lib/hooks/batches/useBatchDetails'
import useTodaySchedule from '@lib/hooks/batches/useTodaySchedule'
import VideoCard from '@components/contents/video-card/VideoCard'
import { SubjectMode } from '@lib/content-constants'
import Carousel from '@components/common/Carousel'
import { getVideoUrl } from '@lib/video-utility'
import { format, formatDistance, isBefore } from 'date-fns'
import useNotify, {
  NotificationDuration,
  NotificationEnums,
} from '@lib/useNotify'

const LiveClassroom = ({
  batchDetails,
}: {
  batchDetails: BatchDetailModel
}) => {
  const router = useRouter()
  const { showNotification } = useNotify()
  const { batchSlug } = router.query

  const { data: todaySchedule, isLoading } = useTodaySchedule({
    batchSlug: batchSlug as string,
  })

  const redirectToWeeklySchedule = (slug: string, subject: string) => {
    router.push(`${batchSlug}/${slug}/weekly-schedule`)
  }

  const redirectToTopic = (slug: string, subject: string) => {
    router.push(`${batchSlug}/${slug}`)
  }

  const redirectToPlayer = (video: any) => {
    if (!batchDetails?.isPurchased) {
      showNotification({
        type: NotificationEnums.ERROR,
        title: 'Batch not purchased!!!',
        description: 'Please purchase the batch to unlock all the contents',
        identifier: video._id,
        duration: NotificationDuration.SHORT,
      })
      return
    }

    if (isBefore(new Date(), new Date(video.startTime))) {
      const willStartAter = formatDistance(
        new Date(video.startTime),
        new Date(),
        { addSuffix: true }
      )
      showNotification({
        type: NotificationEnums.INFO,
        identifier: video._id,
        title: `Class will start  ${willStartAter}`,
        duration: NotificationDuration.SHORT,
      })
      return
    }

    router.push(
      getVideoUrl({
        scheduleId: video._id as string,
        topicSlug: 'all-contents',
        batchSubjectSlug: video?.batchSubjectId as string,
        batchSlug: batchSlug as string,
      })
    )
  }

  return (
    <Container className="flex flex-col gap-11">
      <section>
        <Typography weight={700} variant="heading4">
          Today's Classes
        </Typography>
        {isLoading && <LoadingSection />}
        {todaySchedule && todaySchedule.length > 0 ? (
          <Carousel showControlBtn={todaySchedule.length > 4}>
            <div className="grid grid-flow-col auto-cols-[calc(50%-10px)] md:auto-cols-[calc(33%-10px)] lg:auto-cols-[calc(25%-10px)] gap-4 lg:gap-6 py-4">
              {todaySchedule.map((ts) => {
                return (
                  <VideoCard
                    key={ts._id}
                    id={ts._id}
                    name={ts?.topic || ts?.videoDetails?.name}
                    duration={ts?.videoDetails?.duration}
                    slug={ts?.slug}
                    image={ts?.videoDetails?.image}
                    isTodaysScheduled={true}
                    date={ts?.startTime}
                    subjectSlug={ts?.subjectId?.slug}
                    subject={ts?.subjectId?.name}
                    handleClick={() => redirectToPlayer(ts)}
                    endDate={ts?.endTime}
                  />
                )
              })}
            </div>
          </Carousel>
        ) : (
          !isLoading && (
            <div className="flex flex-col items-center justify-center">
              <NoClasses />
              <Typography variant="small" weight={700}>
                <span className="text-gray-700">
                  No Today’s Classes Scheduled Yet
                </span>
              </Typography>
            </div>
          )
        )}
      </section>
      <section className="flex flex-col gap-1">
        <Typography variant="heading4" weight={700}>
          Weekly Schedule
        </Typography>
        <Typography variant="small" weight={500}>
          <span className="text-gray-500">Classes for current week</span>
        </Typography>

        <div className={'flex flex-1 overflow-x-auto pb-4 px-2 -mx-2'}>
          {batchDetails?.subjects.length > 0 ? (
            <div className={style.liveBatchCardContainer}>
              {batchDetails?.subjects?.map((subject: Subject) => (
                <SubjectCard
                  key={subject._id}
                  mode={SubjectMode.WEEKLY}
                  subject={subject}
                  handleClick={() =>
                    redirectToWeeklySchedule(subject.slug, subject.subject)
                  }
                />
              ))}
            </div>
          ) : (
            <div>
              <NoData />
            </div>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-1">
        <Typography variant="heading4" weight={700}>
          All Classes
        </Typography>
        <Typography variant="small" weight={500}>
          <span className="text-gray-500">Explore all your classes</span>
        </Typography>

        <div className={'flex flex-1 overflow-x-auto pb-4  px-2 -mx-2'}>
          {batchDetails?.subjects.length > 0 ? (
            <div className={style.liveBatchCardContainer}>
              {batchDetails?.subjects.map((subject: any) => (
                <SubjectCard
                  key={subject._id}
                  mode={SubjectMode.ALL_CLASSES}
                  subject={subject}
                  handleClick={() =>
                    redirectToTopic(subject.slug, subject.subject)
                  }
                />
              ))}
            </div>
          ) : (
            <div>
              <NoData />
            </div>
          )}
        </div>
      </section>
    </Container>
  )
}

export default LiveClassroom
