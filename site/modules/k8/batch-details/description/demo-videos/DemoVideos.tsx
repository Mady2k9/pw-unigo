import { LoadingSection, Typography } from '@components/ui'
import useBatchDemoVideos from '@lib/hooks/batches/useBatchDemoVideos'
import VideoCard from '@modules/k8/content/components/video-card/VideoCard'
import style from './DemoVideos.module.css'
// import { DemoVideos } from '@lib/hooks/batches/useBatchDemoVideos'

const DemoVideos = ({ batchSlug }: { batchSlug: string }) => {
  const { data, isLoading } = useBatchDemoVideos({ batchSlug })

  if (isLoading) return <LoadingSection />

  return data.length > 0 ? (
    <div className="flex flex-col gap-2">
      <Typography variant="subHeading" weight={700}>
        Demo Videos
      </Typography>
      <div className={style.videoContainer}>
        {data.slice(0, 2).map((vid: any) => (
          <VideoCard videoDetails={vid} key={vid._id} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default DemoVideos
