import { NoClasses } from '@components/lotties'
import { Container, Tabs, Typography } from '@components/ui'
import { StarIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SubjectCard from './subject-card/SubjectCard'
import TopicCard from './topic-card/TopicCard'
import style from './Classroom.module.css'
import { BatchType } from '@lib/hooks/batches/useBatches'
import { SubjectMode } from '@modules/k8/constants'

const ContentTabItems = [
  {
    name: 'Maths',
    key: 'maths',
    svgImage: <StarIcon className={'h-6 w-6'} />,
  },
  {
    name: 'Science',
    key: 'science',
    svgImage: <StarIcon className={'h-6 w-6'} />,
  },
]

const Classroom = ({ batchDetails }: { batchDetails: any }) => {
  const router = useRouter()
  const { batchSlug } = router.query
  const [contentTabIndex, setContentTabIndex] = useState(0)

  const variant = batchDetails?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  const redirectTo = () => {
    BatchType.SELF_LEARNING
      ? router.push({
          pathname: `${batchSlug}/content`,
          query: { contentType: variant },
        })
      : router.push({
          pathname: `${batchSlug}/content`,
          query: { contentType: variant },
        })
  }

  return variant === BatchType.LIVE ? (
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
          {[1, 2, 3, 4].map((subj: any) => (
            <SubjectCard
              key={subj}
              mode={SubjectMode.WEEKLY}
              batchSlug={batchSlug as string}
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
          {[1, 2, 3, 4].map((subj: any) => (
            <SubjectCard
              key={subj}
              mode={SubjectMode.ALL_CLASSES}
              handleClick={redirectTo}
            />
          ))}
        </div>
      </section>
    </Container>
  ) : (
    <Container>
      <div>
        <Tabs
          items={ContentTabItems}
          currentIndex={contentTabIndex}
          onChange={(index) => {
            setContentTabIndex(index)
          }}
        />
      </div>
      <section className="my-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Typography variant="subHeading" weight={700}>
            <span className="text-[#585173]">Content</span>
          </Typography>

          <Typography variant="tiny" weight={500}>
            <span className="text-gray-400">11 Chapters | 120 Lectures</span>
          </Typography>
        </div>
        <div className={style.cardContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((topic: any) => (
            <TopicCard
              handleClick={redirectTo}
              key={topic}
              variant={BatchType.SELF_LEARNING}
            />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Classroom
