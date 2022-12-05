import { Layout } from '@components/common'
import { Container, LoadingSection, Typography } from '@components/ui'
import useBatchDetails from '@lib/hooks/batches/useBatchDetails'
import { BatchType } from '@lib/hooks/batches/useBatches'
import useGetFeeId from '@lib/hooks/orders/useGetFeeId'
import usePlansList from '@lib/hooks/batches/usePlansList'
import { BatchPurchaseCard, PlanCard } from '@modules/k8'
import { useRouter } from 'next/router'
import { useState } from 'react'

const OrderSummary = () => {
  const router = useRouter()
  const { batchSlug } = router.query

  const [idForMapping, setIdForMapping] = useState('')

  const { data: batchDetail, isLoading: batchDetailLoading } = useBatchDetails({
    batchSlug: batchSlug as string,
  })

  const variant = batchDetail?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  const { data: planList, isLoading: plansLoading } = usePlansList({
    batchSlug: batchDetail?._id,
    enabled: batchDetail?.isSelfLearning,
  })

  const { data: feeid } = useGetFeeId({
    batchId: batchDetail?._id,
    batchAmount: batchDetail?.fee?.amount,
    enabled:
      variant === BatchType.SELF_LEARNING ? idForMapping.length > 0 : true,
  })

  if (batchDetailLoading) return <LoadingSection />

  return (
    <Container>
      <main className="w-full flex flex-col md:flex-row gap-5 lg:gap-16 justify-start">
        <section className="flex flex-col gap-9 flex-1">
          <div className="flex flex-col gap-6">
            <Typography variant="heading4" weight={700}>
              Order Summary
            </Typography>

            <BatchPurchaseCard batchDetail={batchDetail} />
          </div>

          {planList.length > 0 && (
            <div className="flex flex-col">
              <Typography variant="heading4" weight={700}>
                Choose your plan
              </Typography>
              <Typography variant="small" weight={500}>
                <span className="text-gray-500">
                  You can access all the content till the expiry of your
                  purchased plan
                </span>
              </Typography>

              <div className="flex flex-col gap-4 mt-4">
                {planList.map((plan) => (
                  <PlanCard
                    plan={plan}
                    key={plan._id}
                    recommended={plan.isRecommended}
                    idForMapping={idForMapping}
                    setIdForMapping={setIdForMapping}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
        <section className="lg:min-w-[348px]">
          {/* <CheckoutCard batchDetail={batchDetail} feeId={feeid._id} /> */}
        </section>
      </main>
    </Container>
  )
}

export default OrderSummary
OrderSummary.Layout = Layout
