import { Typography } from '@components/ui'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'
import usePlansList, { Plans } from '@lib/hooks/batches/usePlansList'
import useGetFeeId from '@lib/hooks/orders/useGetFeeId'
import { useEffect, useState } from 'react'
import BatchPurchaseCard from '../batch-purchase-card/BatchPurchaseCard'
import CheckoutCard from '../checkout-card/CheckoutCard'
import PlanCard from '../plan-card/PlanCard'

const SelfLearningPayment = ({
  batchDetail,
}: {
  batchDetail: BatchDetailModel
}) => {
  const [idForMapping, setIdForMapping] = useState<string>('')
  const [activePlan, setActivePlan] = useState<Plans>()

  const { data: planList, isLoading: plansLoading } = usePlansList({
    batchSlug: batchDetail?._id,
    enabled: true,
  })

  useEffect(() => {
    const recommendedPlan = planList.find((plan: any) => plan.isRecommended)
    if (recommendedPlan) {
      setActivePlan(recommendedPlan)
    } else {
      setActivePlan(planList[0])
    }

    setIdForMapping(recommendedPlan?._id as string)
  }, [plansLoading])

  const { data: feeId, mutate: getFeeId } = useGetFeeId()

  useEffect(() => {
    if (!idForMapping) return
    getFeeId({
      batchId: batchDetail?._id,
      query: {
        batchAmount: batchDetail?.fee?.amount,
        planId: idForMapping,
      },
    })
  }, [idForMapping])

  return (
    <main className="w-full flex flex-col md:flex-row gap-5 lg:gap-16 justify-start">
      <section className="flex flex-col gap-9 flex-1">
        <div className="flex flex-col gap-6">
          <Typography variant="heading4" weight={700}>
            Order Summary
          </Typography>

          <BatchPurchaseCard batchDetail={batchDetail} />
        </div>

        {planList?.length > 0 && (
          <div className="flex flex-col">
            <Typography variant="heading4" weight={700}>
              Choose your plan
            </Typography>
            <Typography variant="small" weight={500}>
              <span className="text-gray-500">
                You can access all the content till the expiry of your purchased
                plan
              </span>
            </Typography>

            <div className="flex flex-col gap-4 mt-4 ">
              {planList.map((plan) => (
                <PlanCard
                  plan={plan}
                  key={plan._id}
                  recommended={plan.isRecommended}
                  setIdForMapping={setIdForMapping}
                  setActivePlan={setActivePlan}
                  activePlan={activePlan as Plans}
                />
              ))}
            </div>
          </div>
        )}
      </section>
      <section className="lg:w-[348px]">
        <CheckoutCard
          batchDetail={batchDetail}
          feeId={feeId._id}
          activePlan={activePlan}
          planId={idForMapping}
        />
      </section>
    </main>
  )
}

export default SelfLearningPayment
