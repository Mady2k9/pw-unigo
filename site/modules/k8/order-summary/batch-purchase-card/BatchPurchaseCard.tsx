/* eslint-disable @next/next/no-img-element */
import { Card, Typography } from '@components/ui'
import style from './BatchPurchaseCard.module.css'
import Image from 'next/image'
import { BatchType } from '@lib/hooks/batches/useBatches'
import cn from 'clsx'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'
import { priceDisplay } from '@lib/user-utility'

const BatchPurchaseCard = ({
  batchDetail,
}: {
  batchDetail: BatchDetailModel
}) => {
  const variant = batchDetail.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE
  return (
    <Card>
      <div className={style.cardContainer}>
        <div
          className={cn(
            'relative h-[59px] lg:h-[90px] rounded-xl',
            variant === BatchType.SELF_LEARNING
              ? style.selfBatchPoster
              : style.liveBatchPoster
          )}
        >
          <Image
            src={
              batchDetail?.previewImage?.baseUrl +
              batchDetail?.previewImage?.key
            }
            alt="batch-image"
            layout="fill"
            className="rounded-xl"
          />
        </div>
        <div className={style.cardDetails}>
          <div className="max-w-full truncate">
            <Typography variant="subHeading" weight={700}>
              {batchDetail?.name}
            </Typography>
          </div>
          <div className={style.priceContainer}>
            <Typography variant="heading3" weight={700}>
              <span>{priceDisplay(batchDetail?.fee?.total)}</span>
            </Typography>
            {batchDetail?.fee?.discount > 0 && (
              <Typography variant="regular" weight={400}>
                <span className="text-gray-400 line-through">
                  {priceDisplay(batchDetail?.fee?.amount)}
                </span>
              </Typography>
            )}
            {batchDetail?.fee?.discount > 0 && (
              <Typography variant="regular" weight={700}>
                <span className="bg-[#47b586] text-white px-2 py-1 rounded-3xl">
                  {batchDetail?.fee?.discount.toFixed()}% OFF
                </span>
              </Typography>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default BatchPurchaseCard
