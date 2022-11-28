import Layout from '@components/common/Layout'
import { Container, Typography } from '@components/ui'
import { BatchType } from '@lib/hooks/batches/useBatches'
import { TopicCard } from '@modules/k8'
import { useRouter } from 'next/router'
import React from 'react'

const Topic = () => {
  const router = useRouter()

  // const redirectTo = () => {
  //   console.log(123)
  //   router.push(`${'vineet-testing'}/:topicSlug/content`)
  // }
  return (
    <Container className="flex flex-col gap-6">
      <Typography variant="heading3" weight={700}>
        Maths
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((topic: any) => (
          <TopicCard
            key={topic}
            handleClick={() => console.log('clicked')}
            variant={BatchType.LIVE}
          />
        ))}
      </div>
    </Container>
  )
}

export default Topic
Topic.Layout = Layout
