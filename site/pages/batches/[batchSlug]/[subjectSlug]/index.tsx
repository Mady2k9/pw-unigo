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

  const redirectToContent = (slug: string) => {
    // router.push(`${subjectSlug}/${slug}/content`)
  }

  return (
    <Container className="flex flex-col gap-6">
      <Typography variant="heading3" weight={700}>
        Maths
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  )
}

export default Topic
Topic.Layout = Layout
