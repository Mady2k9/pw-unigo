import banner from '@assets/images/banner.png'
import { Card, Typography } from '@components/ui'
import style from './VideoCard.module.css'
import cn from 'clsx'
import Image from 'next/image'
import Clock from '@assets/images/clock.svg'

const VideoCard = () => {
  return (
    <Card>
      <div className="flex flex-col animated fadeIn duration-200">
        <div className={style.selfPacedBanner}>
          <Image src={banner} alt="" objectFit="contain" />
        </div>
        <div className={style.videoDescriptionContainer}>
          <div className={style.progressBar}></div>
          <div className={style.videoTitle}>
            <Typography variant="small" weight={600}>
              LAKSHAYA BATCH: Physics for class 12 + JEEMAINS / Advanced and
              NEET
            </Typography>
          </div>
          <div className={style.timestamp}>
            <div className="flex items-center gap-1">
              <Image src={Clock} alt="clock_icon" objectFit="contain" />
              <Typography variant="label" weight={700}>
                <span className="text-gray-400">01:00:00</span>
              </Typography>
            </div>
            <Typography variant="label" weight={700}>
              <span className="text-gray-400">12 Oct, 2022</span>
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default VideoCard
