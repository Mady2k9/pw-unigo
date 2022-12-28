/* eslint-disable @next/next/no-img-element */
import { Button, Card, Typography } from '@components/ui'
import Image from 'next/image'
import CardBanner from '@assets/images/card-banner.png'
import style from './BatchDetailCard.module.css'
import PlayButton from '@assets/images/play-button.svg'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'
import { priceDisplay } from '@lib/user-utility'
import { useRouter } from 'next/router'
import { Arrow } from '@components/lotties'
import { getImageUrlFromObjectImageId } from '@lib/utilities'
import eventTracker from '@lib/eventTracker/eventTracker'

const BatchDetailCard = ({
  batchDetails,
}: {
  batchDetails: BatchDetailModel
}) => {
  const router = useRouter()

  const redirectToOrderSummary = () => {
    eventTracker.batchBuyNow(batchDetails, 'batch_description')
    router.push(`${batchDetails?.slug}/order-summary`)
  }

  const playPreviewVideo = () => {
    eventTracker.batchPreviewVideo(batchDetails)
  }

  return (
    <Card>
      <div className="flex flex-col gap-4 p-5 animated fadeIn duration-200">
        <div className={style.bannerContainer} onClick={playPreviewVideo}>
          <div className="min-w-[290px] lg:w-full h-[143px] relative">
            <Image
              src={getImageUrlFromObjectImageId(batchDetails?.previewImage)}
              alt="card-banner"
              layout="fill"
              className="rounded-xl"
            />
          </div>
          <div className="flex items-center justify-center gap-2 w-full cursor-pointer">
            <Image src={PlayButton} alt="play_icon" />
            <Typography variant="small" weight={600}>
              <span className="text-indigo-500">Watch Batch Preview</span>
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="regular" weight={500}>
            Starting at
          </Typography>
          <div className="flex items-center gap-4">
            <Typography variant="heading2" weight={700}>
              <span className="text-indigo-500">
                {priceDisplay(batchDetails?.fee?.total)}
              </span>
            </Typography>
            {batchDetails?.fee?.discount > 0 && (
              <Typography variant="regular" weight={400}>
                <span className="line-through text-[#888888]">
                  {batchDetails?.fee?.amount}
                </span>
              </Typography>
            )}
            {batchDetails?.fee?.discount > 0 && (
              <div className={style.discountContainer}>
                <Typography variant="regular" weight={700}>
                  <span className="text-white">
                    {+(batchDetails?.fee?.discount).toFixed()}% OFF
                  </span>
                </Typography>
              </div>
            )}
          </div>
          <Typography variant="regular" weight={600}>
            {batchDetails?.priceLabel}
          </Typography>

          <Button
            onClick={redirectToOrderSummary}
            postIcon={
              <div className="-rotate-90">
                <Arrow />
              </div>
            }
          >
            Buy Now
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default BatchDetailCard
