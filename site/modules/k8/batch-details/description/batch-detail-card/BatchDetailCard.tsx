import { Button, Card, Typography } from '@components/ui'
import Image from 'next/image'
import CardBanner from '@assets/images/card-banner.png'
import style from './BatchDetailCard.module.css'
import PlayButton from '@assets/images/play-button.svg'

const BatchDetailCard = () => {
  return (
    <Card>
      <div className="flex flex-col gap-4 p-2 lg:p-4">
        <div
          className={style.bannerContainer + ' animated fadeIn duration-200'}
        >
          <Image src={CardBanner} alt="card-banner" />
          <div className="flex items-center justify-center gap-2 w-full cursor-pointer">
            <Image src={PlayButton} alt="play_icon" />
            <Typography variant="small" weight={600}>
              <span className="text-indigo-500">Watch Batch Preview</span>
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="regular" weight={500}>
            Starting at
          </Typography>
          <div className="flex items-center gap-4">
            <Typography variant="heading2" weight={700}>
              <span className="text-indigo-500">₹299</span>
            </Typography>
            <Typography variant="regular" weight={400}>
              <span className="line-through text-[#888888]">329</span>
            </Typography>
            <div className={style.discountContainer}>
              <Typography variant="regular" weight={700}>
                <span className="text-white">10% OFF</span>
              </Typography>
            </div>
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
