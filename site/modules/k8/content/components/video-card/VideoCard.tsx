import banner from '@assets/images/banner.png'
import { Card, Progress, Typography } from '@components/ui'
import style from './VideoCard.module.css'
import cn from 'clsx'
import Image from 'next/image'
import Clock from '@assets/images/clock.svg'
import { Lecture } from '@lib/hooks/batches/useBatchContents'
import { DemoVideos } from '@lib/hooks/batches/useBatchDemoVideos'

const VideoCard = ({
  videoDetails,
}: {
  videoDetails: Lecture | DemoVideos
}) => {
  const startDate = new Date(videoDetails?.date).toDateString()
  return (
    <Card>
      <div className="flex flex-col gap-2 animated fadeIn duration-200 p-2.5">
        <div className={style.selfPacedBanner}>
          <Image
            src={videoDetails?.videoDetails?.image}
            alt="video_banner"
            layout="fill"
          />
        </div>
        <div className={style.videoDescriptionContainer}>
          <div className={style.progressBar}>
            <Progress progress={20} />
          </div>
          <div className={style.videoTitle}>
            <Typography variant="small" weight={600}>
              {videoDetails?.videoDetails?.name}
            </Typography>
          </div>
          <div className={style.timestamp}>
            {videoDetails?.videoDetails?.duration && (
              <div className="flex items-center gap-1">
                <Image src={Clock} alt="clock_icon" objectFit="contain" />
                <Typography variant="label" weight={700}>
                  <span className="text-gray-400">
                    {videoDetails?.videoDetails?.duration}
                  </span>
                </Typography>
              </div>
            )}
            <Typography variant="label" weight={700}>
              <span className="text-gray-400">{startDate}</span>
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default VideoCard
