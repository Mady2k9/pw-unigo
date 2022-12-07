import { Typography } from '@components/ui'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'
import usePlansList from '@lib/hooks/batches/usePlansList'
import useActivePaymentKey from '@lib/hooks/orders/useActivePaymentKey'
import useGetFeeId from '@lib/hooks/orders/useGetFeeId'
import usePaymentInfo from '@lib/hooks/orders/usePaymentInfo'
import useSignature from '@lib/hooks/orders/useSignature'
import { PaymentSource } from '@modules/k8/constants'
import { useState } from 'react'
import BatchPurchaseCard from '../batch-purchase-card/BatchPurchaseCard'
import CheckoutCard from '../checkout-card/CheckoutCard'
import PlanCard from '../plan-card/PlanCard'

const SelfLearningPayment = ({
  batchDetail,
}: {
  batchDetail: BatchDetailModel
}) => {
  const [idForMapping, setIdForMapping] = useState('')

  const { data: planList, isLoading: plansLoading } = usePlansList({
    batchSlug: batchDetail?._id,
    enabled: batchDetail?.isSelfLearning,
  })

  const { data: feeid, error } = useGetFeeId({
    batchId: batchDetail?._id,
    query: {
      batchAmount: batchDetail?.fee?.amount,
      planId: idForMapping,
    },
    enabled: idForMapping.length > 0,
  })

  const { data: activePaymentKey, isLoading: paymentKeyLoading } =
    useActivePaymentKey()

  let paymentSource = ''
  for (let source in activePaymentKey) {
    switch (source) {
      case 'juspay':
        if (activePaymentKey[source]) paymentSource = PaymentSource.juspay
        break

      case 'razorpay':
        if (activePaymentKey[source]) paymentSource = PaymentSource.razorpay
        break

      case 'paytm':
        if (activePaymentKey[source]) paymentSource = PaymentSource.paytm
        break
    }
  }

  const { data: rzpKey, isLoading: rzpKeyLoading } = usePaymentInfo({
    enabled: paymentSource === PaymentSource.razorpay,
  })

  const { data, isLoading } = useSignature({
    enabled: paymentSource === PaymentSource.juspay,
  })

  let razorpayKey = ''

  if (rzpKey) {
    rzpKey.forEach((key) => {
      if (key.name === 'two') {
        razorpayKey = key.id
        return
      }

      razorpayKey = key.id
    })
  }

  const payload =
    paymentSource === PaymentSource.juspay
      ? {
          name: batchDetail?.name,
          paymentSource: paymentSource.toUpperCase(),
          client: 'web',
          returnHost: 'k8-dev.penpencil.co',
          feeMapId: feeid._id,
          type: 'BATCH',
          // wallet: '',
          // couponCode: '',
        }
      : {
          name: batchDetail?.name,
          paymentSource: 'RAZOR_PAY',
          paymentKey: razorpayKey,
          feeMapId: feeid._id,
          type: 'BATCH',
          //   wallet: '',
          //   couponCode: '',
        }

  return (
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
                You can access all the content till the expiry of your purchased
                plan
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
        <CheckoutCard batchDetail={batchDetail} payload={{}} />
      </section>
    </main>
  )
}

export default SelfLearningPayment
