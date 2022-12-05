import {
  Container,
  LoadingSection,
  NoData,
  Tabs,
  Typography,
} from '@components/ui'
import style from './SelfLearningClassroom.module.css'
import TopicCard from '../topic-card/TopicCard'
import { useRouter } from 'next/router'
import { BatchType } from '@lib/hooks/batches/useBatches'
import useBatchTopics from '@lib/hooks/batches/useBatchTopics'
import React, { useMemo } from 'react'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'

const SelfLearningClassroom = ({
  batchDetails,
}: {
  batchDetails: BatchDetailModel
}) => {
  const router = useRouter()

  const [contentTabIndex, setContentTabIndex] = React.useState(0)

  const variant = batchDetails?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  const subjects = batchDetails?.subjects.map((subject: any) => ({
    name: subject.subject,
    key: subject.slug,
  }))

  const { data, isLoading, refetch } = useBatchTopics({
    batchSlug: batchDetails?.slug,
    subjectSlug: subjects[contentTabIndex].key,
  })
  console.log(data)

  React.useEffect(() => {
    refetch
  }, [contentTabIndex])

  const ItemsWrapper = useMemo(() => {
    if (isLoading) return <LoadingSection />
    if (data.length === 0) return <NoData />
    return (
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
          {data &&
            data.map((topic: any, idx: number) => (
              <TopicCard
                handleClick={() => redirectTo(topic)}
                key={topic._id}
                variant={BatchType.SELF_LEARNING}
                topicData={topic}
                index={idx}
              />
            ))}
        </div>
      </section>
    )
  }, [data])
  const redirectTo = (topic: any) => {
    router.push({
      pathname: `${batchDetails?.slug}/${subjects[contentTabIndex].key}/${topic.slug}/content`,
      query: { topic: topic.name },
    })
  }

  return (
    <Container className="flex flex-col gap-4">
      <div>
        <Tabs
          items={subjects}
          currentIndex={contentTabIndex}
          onChange={(index) => {
            setContentTabIndex(index)
          }}
        />
      </div>
      <div>{ItemsWrapper}</div>
    </Container>
  )
}

export default SelfLearningClassroom
