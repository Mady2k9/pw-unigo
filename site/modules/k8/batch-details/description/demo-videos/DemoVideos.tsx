import { Typography } from '@components/ui'
import { BatchType } from '@lib/hooks/batches/useBatches'
import VideoCard from '@modules/k8/content/components/video-card/VideoCard'
import style from './DemoVideos.module.css'

const DemoVideos = () => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="subHeading" weight={700}>
        Demo Videos
      </Typography>
      <div className={style.videoContainer}>
        {[1, 2].map((vid: any) => (
          <VideoCard key={vid} variant={BatchType.SELF_LEARNING} />
        ))}
      </div>
    </div>
  )
}

export default DemoVideos
