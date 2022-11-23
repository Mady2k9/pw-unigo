import banner from '@assets/images/banner.png'
import { Card } from '@components/ui'
import style from './VideoCard.module.css'

const VideoCard = ({ variant }: { variant: string }) => {
  return (
    <Card>
      <div
        className={
          variant === 'selfLearning'
            ? `${style.selfPacedBanner}`
            : `${style.liveBatchBanner}`
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={banner.src} alt="" />
      </div>

      {variant === 'live' ? (
        <div className={style.videoDescriptionContainer}>
          <div className={style.liveBatchDetail}>
            <span>Physics</span>
            <span>01:40:00</span>
          </div>
          <div className={`${style.videoTitle}`}>
            LAKSHAYA BATCH: Physics for class 12 + JEEMAINS / Advanced and NEET
          </div>
          <div className={style.timestamp}>12 Oct, 2022</div>
        </div>
      ) : (
        <div className={style.videoDescriptionContainer}>
          <div className={style.progressBar}></div>
          <div className={style.videoTitle}>
            Introduction to the video with very long title.
          </div>
          <div className={style.timestamp}>
            <span>01:00:00</span>
            <span>23 Oct, 2022</span>
          </div>
        </div>
      )}
    </Card>
  )
}

export default VideoCard
