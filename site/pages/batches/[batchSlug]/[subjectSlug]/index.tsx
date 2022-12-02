import Layout from '@components/common/Layout'
import { Container, Typography } from '@components/ui'
import { BatchType } from '@lib/hooks/batches/useBatches'
import useBatchTopics from '@lib/hooks/batches/useBatchTopics'
import { TopicCard } from '@modules/k8'
import { useRouter } from 'next/router'

const Topic = () => {
  const router = useRouter()
  const { batchSlug, subjectSlug } = router.query

  const { data, isLoading } = useBatchTopics({
    batchSlug: batchSlug as string,
    subjectSlug: subjectSlug as string,
  })

  const redirectToContent = (topicSlug: string) => {
    router.push(`/batches/${batchSlug}/${subjectSlug}/${topicSlug}/content`)
  }

  return (
    <Layout>
      <Container className="flex flex-col gap-6">
        <Typography variant="heading3" weight={700}>
          Maths
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TopicCard
              key={"12345"}
              handleClick={() => redirectToContent('all-contents')}
              variant={BatchType.LIVE}
          />
          {data &&
            data.map((topic: any) => (
              <TopicCard
                key={topic}
                handleClick={() => redirectToContent(topic.slug)}
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
