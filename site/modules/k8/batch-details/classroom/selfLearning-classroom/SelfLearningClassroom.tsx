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
import useBatchTopics, { Topics } from '@lib/hooks/batches/useBatchTopics'
import React, { useMemo } from 'react'
import { BatchDetailModel, Subject } from '@lib/hooks/batches/useBatchDetails'
import Image from 'next/image'
import { getImageUrlFromObjectImageId } from '@lib/utilities'
import i18next from 'i18next'

i18next.init({
  fallbackLng: 'en-US',
  resources: {
    'en-US': {
      translation: {
        video_one: '{{count}} Video',
        video_other: '{{count}} Videos',

        chapter_one: '{{count}} Chapter',
        chapter_other: '{{count}} Chapters',
      },
    },
  },
})

const SelfLearningClassroom = ({
  batchDetails,
}: {
  batchDetails: BatchDetailModel
}) => {
  const router = useRouter()

  const [contentTabIndex, setContentTabIndex] = React.useState(0)

  const subjects = batchDetails?.subjects?.map((subject: Subject) => ({
    name: subject?.subject,
    key: subject?.slug,
    svgImage: (
      <Image
        src={getImageUrlFromObjectImageId(subject?.imageId)}
        alt="subject_icon"
        height={22}
        width={22}
      />
    ),
  }))

  const { data, isLoading, refetch } = useBatchTopics({
    batchSlug: batchDetails?.slug,
    subjectSlug: subjects[contentTabIndex]?.key,
  })

  React.useEffect(() => {
    refetch
  }, [contentTabIndex])

  const ItemsWrapper = useMemo(() => {
    if (isLoading) return <LoadingSection />
    if (data.data.length === 0)
      return (
        <div>
          <NoData />
        </div>
      )
    return (
      <section className="my-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Typography variant="subHeading" weight={700}>
            <span className="text-[#585173]">Content</span>
          </Typography>

          <Typography variant="tiny" weight={500}>
            <span className="text-gray-400">
              {+data?.paginate?.totalCount > 0 &&
                i18next.t('chapter', {
                  count: data?.paginate?.totalCount,
                })}
              {+data?.paginate?.videosCount > 0 &&
                ` | ${i18next.t('video', {
                  count: data?.paginate?.videosCount,
                })}`}
            </span>
          </Typography>
        </div>
        <div className={style.cardContainer}>
          {data &&
            data?.data?.map((topic: Topics, idx: number) => (
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
      <div className={''}>
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
