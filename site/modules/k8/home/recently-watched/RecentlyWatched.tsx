import Carousel from '@components/common/Carousel'
import VideoCard from '@components/contents/video-card/VideoCard'
import { LoadingSection, Typography } from '@components/ui'
import useRecentWatch, { RecentWatch } from '@lib/hooks/batches/useRecentWatch'
import { getVideoUrl } from '@lib/video-utility'
import { useRouter } from 'next/router'
import React from 'react'

const RecentlyWatched = () => {
  const router = useRouter()
  const { data, isLoading } = useRecentWatch({
    params: {
      limits: 5,
    },
  })

  const redirectToPlayer = (video: any) => {
    router.push(
      getVideoUrl({
        scheduleId: video.scheduleId as string,
        topicSlug: 'all-contents',
        batchSubjectSlug: video?.batchSubjectId as string,
        batchSlug: video.batchId as string,
      })
    )
  }

  if (isLoading) return <LoadingSection />
  return data?.data.length > 0 ? (
    <div className="hidden md:flex flex-col gap-4 mb-12">
      <Typography variant="heading3" weight={700}>
        Recently Watched
      </Typography>

      <Carousel showControlBtn={data?.data?.length > 4}>
        <div className="grid grid-flow-col auto-cols-[calc(25%-10px)] gap-6 py-4">
          {data?.data.map((video: RecentWatch) => {
            return (
              <VideoCard
                key={video.videoDetails?.id}
                id={video.videoDetails?.id}
                name={video?.topic || video?.videoDetails?.name}
                image={video?.videoDetails?.image}
                slug={video?.slug}
                duration={video?.videoDetails?.duration}
                lastWatchedTimeInSec={video?.lastWatchedPointInSec}
                isLocked={false}
                handleClick={() => redirectToPlayer(video)}
              />
            )
          })}
        </div>
      </Carousel>
    </div>
  ) : (
    <></>
  )
}

export default RecentlyWatched
