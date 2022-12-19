import Layout from '@components/common/Layout'
import { Container, LoadingSection, Typography } from '@components/ui'
import useBatchDetails from '@lib/hooks/batches/useBatchDetails'
import { BatchType } from '@lib/hooks/batches/useBatches'
import useBatchTopics from '@lib/hooks/batches/useBatchTopics'
import { TopicCard } from '@modules/k8'
import { useRouter } from 'next/router'
import {ALL_CONTENTS} from "@lib/content-constants";

const Topic = () => {
  const router = useRouter()
  const { batchSlug, subjectSlug } = router.query

  const { data: batchDetail, isLoading: batchDetailLoading } = useBatchDetails({
    batchSlug: batchSlug as string,
  })

  const { data, isLoading } = useBatchTopics({
    batchSlug: batchSlug as string,
    subjectSlug: subjectSlug as string,
  })

  const redirectToContent = (topicSlug: string, topicName: string) => {
    router.push({
      pathname: `/batches/${batchSlug}/${subjectSlug}/${topicSlug}/content`,
      query: { topic: topicName },
    })
  }

  const subjectName = batchDetail?.subjects.find(
    (subj: any) => subj.slug === subjectSlug
  )?.subject

  if (batchDetailLoading) return <LoadingSection />

  return (
    <Layout>
      <Container className="flex flex-col gap-6">
        <Typography variant="heading3" weight={700} capitalize={true}>
          {subjectName}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TopicCard
            key={'12345'}
            handleClick={() => redirectToContent(ALL_CONTENTS, 'All Content')}
            variant={BatchType.LIVE}
          />
          {data &&

            data?.data?.map((topic: any) => (
              <TopicCard
                key={topic}
                handleClick={() => redirectToContent(topic.slug, topic.name)}
                variant={BatchType.LIVE}
                topicData={topic}
              />
            ))}
        </div>
      </Container>
    </Layout>
  )
}

export default Topic
