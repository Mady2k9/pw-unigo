import { Card, Progress, Typography } from '@components/ui'
import style from './VideoCard.module.css'
import Image from 'next/image'
import Clock from '@assets/images/clock.svg'
import { Lecture } from '@lib/hooks/batches/useBatchContents'
import { DemoVideos } from '@lib/hooks/batches/useBatchDemoVideos'
import format from 'date-fns/format'
import Banner from '@assets/images/banner.png'
import { useRouter } from 'next/router'
import useBatchDetails from '@lib/hooks/batches/useBatchDetails'
import Play from '@assets/images/play.svg'
import Lock from '@assets/images/lock.svg'

const VideoCard = ({
  videoDetails,
}: {
  videoDetails: Lecture | DemoVideos
}) => {
  const router = useRouter()
  const { batchSlug } = router.query

  const { data: batchDetails, isLoading } = useBatchDetails({
    batchSlug: batchSlug as string,
  })

  const isPurchased = batchDetails?.isPurchased

  const startDate = format(new Date(videoDetails?.date), 'd LLL, yyyy')
  const videoBanner = videoDetails?.videoDetails?.image || Banner
  return (
    <Card>
      <div className="flex flex-col gap-3 animated fadeIn duration-200 p-2.5">
        <div className={style.selfPacedBanner}>
          <Image src={videoBanner} alt="video_banner" layout="fill" />
          <div className={style.icon}>
            <Image src={isPurchased ? Play : Lock} alt="" />
          </div>
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
