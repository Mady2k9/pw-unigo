import { LoadingSection, Typography } from '@components/ui'
import useBatchDemoVideos from '@lib/hooks/batches/useBatchDemoVideos'
import VideoCard from '@components/contents/video-card/VideoCard'
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
          <VideoCard
            key={vid._id}
            id={vid._id}
            name={vid?.topic || vid?.videoDetails?.name}
            duration={vid?.videoDetails?.duration}
            slug={vid?.slug}
            date={vid?.date}
            image={vid?.videoDetails?.image}
          />
        ))}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default DemoVideos
