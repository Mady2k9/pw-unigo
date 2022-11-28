/* eslint-disable @next/next/no-img-element */
import { Card, Typography } from '@components/ui'
import style from './BatchPurchaseCard.module.css'
import Poster from '@assets/images/batch-image.png'
import Image from 'next/image'
import { BatchType } from '@lib/hooks/batches/useBatches'
import cn from 'clsx'

const BatchPurchaseCard = () => {
  const variant = BatchType.SELF_LEARNING
  return (
    <Card>
      <div className={style.cardContainer}>
        <div
          className={cn(
            variant === BatchType.SELF_LEARNING ? style.selfBatchPoster : ''
          )}
        >
          <img src={Poster.src} alt="batch-image" />
        </div>
        <div className={style.cardDetails}>
          <Typography variant="subHeading" weight={700}>
            Little Yoddha Genius
          </Typography>
          <div className={style.priceContainer}>
            <Typography variant="heading3" weight={700}>
              <span>₹999</span>
            </Typography>
            <Typography variant="regular" weight={400}>
              <span className="text-gray-400 line-through">₹1499</span>
            </Typography>
            <Typography variant="regular" weight={700}>
              <span className="bg-[#47b586] text-white px-2 py-1 rounded-3xl">
                10% OFF
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default BatchPurchaseCard
