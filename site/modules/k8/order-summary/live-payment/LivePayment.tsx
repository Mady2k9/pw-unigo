import { Typography } from '@components/ui'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'
import useActivePaymentKey from '@lib/hooks/orders/useActivePaymentKey'
import useGetFeeId from '@lib/hooks/orders/useGetFeeId'
import usePaymentInfo from '@lib/hooks/orders/usePaymentInfo'
import useSignature from '@lib/hooks/orders/useSignature'
import { PaymentSource } from '@modules/k8/constants'
import React, { useEffect, useState } from 'react'
import BatchPurchaseCard from '../batch-purchase-card/BatchPurchaseCard'
import CheckoutCard from '../checkout-card/CheckoutCard'

const LivePayment = ({ batchDetail }: { batchDetail: BatchDetailModel }) => {
  const [razorpayKey, setRazorpayKey] = useState('')
  const { data: feeid } = useGetFeeId({
    batchId: batchDetail?._id,
    query: {
      batchAmount: batchDetail?.fee?.amount,
    },
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

  useEffect(() => {
    if (rzpKey) {
      if (rzpKey.length === 1) {
        setRazorpayKey(rzpKey[0].id)
      } else {
        const rpKey = rzpKey.filter((item) => item.name === 'two')
        setRazorpayKey(rpKey[0].id)
      }
    }
  }, [rzpKey])

  const { data, isLoading } = useSignature({
    enabled: paymentSource === PaymentSource.juspay,
  })

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
      </section>
      <section className="lg:min-w-[348px]">
        <CheckoutCard batchDetail={batchDetail} payload={payload} />
      </section>
    </main>
  )
}

export default LivePayment
