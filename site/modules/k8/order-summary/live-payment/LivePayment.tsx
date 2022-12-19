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
  const isFree = batchDetail?.fee?.amount === 0

  const { data: feeId, mutate: feeIdMutate } = useGetFeeId()

  useEffect(() => {
    if (!isFree) {
      feeIdMutate({
        batchId: batchDetail?._id,
        query: {
          batchAmount: batchDetail?.fee?.amount,
        },
      })
    }
  }, [])

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
        <CheckoutCard batchDetail={batchDetail} feeId={feeId._id} />
      </section>
    </main>
  )
}

export default LivePayment
