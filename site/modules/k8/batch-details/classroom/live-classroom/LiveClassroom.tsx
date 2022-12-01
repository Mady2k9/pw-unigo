import { NoClasses } from '@components/lotties'
import { Container, Typography } from '@components/ui'
import { SubjectMode } from '@modules/k8/constants'
import style from './LiveClassroom.module.css'
import SubjectCard from '../subject-card/SubjectCard'
import { useRouter } from 'next/router'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'

const LiveClassroom = ({
  batchDetails,
}: {
  batchDetails: BatchDetailModel
}) => {
  const router = useRouter()
  const { batchSlug } = router.query

  const redirectToWeeklySchedule = (slug: string, subject: string) => {
    router.push(`${batchSlug}/${slug}/weekly-schedule`)
  }

  const redirectToTopic = (slug: string, subject: string) => {
    router.push(`${batchSlug}/${slug}`)
  }

  return (
    <Container className="flex flex-col gap-11">
      <section>
        <Typography weight={700} variant="heading4">
          Today's Classes
        </Typography>
        <div className="flex flex-col items-center justify-center">
          <NoClasses />
          <Typography variant="small" weight={700}>
            <span className="text-gray-700">
              No Today’s Classes Scheduled Yet
            </span>
          </Typography>
        </div>
      </section>
      <section className="flex flex-col gap-1">
        <Typography variant="heading4" weight={700}>
          Weekly Schedule
        </Typography>
        <Typography variant="small" weight={500}>
          <span className="text-gray-500">Classes for current week</span>
        </Typography>

        <div className={style.liveBatchCardContainer}>
          {batchDetails?.subjects.map((subject: any) => (
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
      </section>

      <section className="flex flex-col gap-1">
        <Typography variant="heading4" weight={700}>
          All Classes
        </Typography>
        <Typography variant="small" weight={500}>
          <span className="text-gray-500">Explore all your classes</span>
        </Typography>

        <div className={style.liveBatchCardContainer}>
          {batchDetails?.subjects.map((subject: any) => (
            <SubjectCard
              key={subject._id}
              mode={SubjectMode.ALL_CLASSES}
              subject={subject}
              handleClick={() => redirectToTopic(subject.slug, subject.subject)}
            />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default LiveClassroom
