/* eslint-disable @next/next/no-img-element */
import { Button, Card, Typography } from '@components/ui'
import Image from 'next/image'
import CardBanner from '@assets/images/card-banner.png'
import style from './BatchDetailCard.module.css'
import PlayButton from '@assets/images/play-button.svg'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'
import { priceDisplay } from '@lib/user-utility'

const BatchDetailCard = ({
  batchDetails,
}: {
  batchDetails: BatchDetailModel
}) => {
  const imgUrl =
    batchDetails?.previewImage?.baseUrl && batchDetails?.previewImage?.key
      ? batchDetails?.previewImage?.baseUrl + batchDetails?.previewImage?.key
      : CardBanner

  return (
    <Card>
      <div className="flex flex-col gap-4 p-5 animated fadeIn duration-200">
        <div className={style.bannerContainer}>
          <div className="min-w-[290px] lg:w-full h-[143px] relative">
            <Image
              src={imgUrl}
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
                    {batchDetails?.fee?.discount}% OFF
                  </span>
                </Typography>
              </div>
            )}
          </div>
          <Typography variant="regular" weight={600}>
            (Maths + Science)
          </Typography>
          <Button>Buy Now</Button>
        </div>
      </div>
    </Card>
  )
}

export default BatchDetailCard
