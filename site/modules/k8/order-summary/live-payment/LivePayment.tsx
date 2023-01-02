import { Typography } from '@components/ui'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'
import useGetFeeId from '@lib/hooks/orders/useGetFeeId'
import useNotify, {
  NotificationDuration,
  NotificationEnums,
} from '@lib/useNotify'
import React, { useEffect, useState } from 'react'
import BatchPurchaseCard from '../batch-purchase-card/BatchPurchaseCard'
import CheckoutCard from '../checkout-card/CheckoutCard'

const LivePayment = ({ batchDetail }: { batchDetail: BatchDetailModel }) => {
  const { showNotification } = useNotify()
  const isFree =
    batchDetail.planCount > 0
      ? batchDetail?.startingPlan?.amount === 0
      : batchDetail?.fee?.amount === 0

  const { data: feeId, mutate: feeIdMutate } = useGetFeeId()

  useEffect(() => {
    if (!isFree) {
      feeIdMutate(
        {
          batchId: batchDetail?._id,
          query: {
            batchAmount: batchDetail?.fee?.amount,
          },
        },
        {
          onError: (err: any) => {
            if (err.status === 400) {
              showNotification({
                title: 'Batch registration has ended',
                type: NotificationEnums.ERROR,
                identifier: batchDetail?._id,
                duration: NotificationDuration.LONG,
              })
            }
          },
        }
      )
    } else {
      // console.log({
      //   enddate: new Date(batchDetail.endDate).toUTCString(),
      //   today: new Date().toUTCString(),
      //   isExpired:
      //     new Date(batchDetail.endDate).getTime() < new Date().getTime(),
      // })
      if (new Date(batchDetail.endDate).getTime() < new Date().getTime()) {
        showNotification({
          title: 'Batch registration has ended',
          type: NotificationEnums.ERROR,
          identifier: batchDetail?._id,
          duration: NotificationDuration.LONG,
        })
      }
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
