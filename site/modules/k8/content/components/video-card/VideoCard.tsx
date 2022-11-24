import banner from '@assets/images/banner.png'
import { Card, Typography } from '@components/ui'
import { BatchType } from '@lib/hooks/batches/useBatches'
import style from './VideoCard.module.css'

const VideoCard = ({ variant }: { variant: string }) => {
  return (
    <Card>
      <div
        className={
          variant === BatchType.SELF_LEARNING
            ? `${style.selfPacedBanner}`
            : `${style.liveBatchBanner}`
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={banner.src} alt="" />
      </div>

      {variant === BatchType.LIVE ? (
        <div className={style.videoDescriptionContainer}>
          <div className={style.liveBatchDetail}>
            <Typography variant="label" weight={700}>
              <span className="text-[#8364cb]">Physics</span>
            </Typography>
            <Typography variant="label" weight={700}>
              <span>01:40:00</span>
            </Typography>
          </div>
          <div className={`${style.videoTitle}`}>
            <Typography variant="small" weight={600}>
              LAKSHAYA BATCH: Physics for class 12 + JEEMAINS / Advanced and
              NEET
            </Typography>
          </div>
          <div className={style.timestamp}>
            <Typography variant="label" weight={700}>
              <span className="text-[#888]">12 Oct, 2022</span>
            </Typography>
          </div>
        </div>
      ) : (
        <div className={style.videoDescriptionContainer}>
          <div className={style.progressBar}></div>
          <div className={style.videoTitle}>
            <Typography variant="small" weight={600}>
              Introduction to the video with a long title
            </Typography>
          </div>
          <div className={style.timestamp}>
            <Typography variant="label" weight={700}>
              <span className="text-[#888]">01:00:00</span>
            </Typography>
            <Typography variant="label" weight={700}>
              <span className="text-[#888]">12 Oct, 2022</span>
            </Typography>
          </div>
        </div>
      )}
    </Card>
  )
}

export default VideoCard
