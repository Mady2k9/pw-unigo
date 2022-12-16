import { Layout } from '@components/common'
import { Container, LoadingSection } from '@components/ui'
import useBatchDetails from '@lib/hooks/batches/useBatchDetails'
import { BatchType } from '@lib/hooks/batches/useBatches'
import { LivePayment, SelfLearningPayment } from '@modules/k8'
import { useRouter } from 'next/router'

const OrderSummary = () => {
  const router = useRouter()
  const { batchSlug } = router.query

  const { data: batchDetail, isLoading: batchDetailLoading } = useBatchDetails({
    batchSlug: batchSlug as string,
  })

  if (batchDetailLoading) return <LoadingSection />

  const variant = batchDetail?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  return (
    <Layout isProtected={true}>
      <Container>
        {variant === BatchType.SELF_LEARNING ? (
            <SelfLearningPayment batchDetail={batchDetail} />
        ) : (
            <LivePayment batchDetail={batchDetail} />
        )}
      </Container>
    </Layout>
  )
}

export default OrderSummary
