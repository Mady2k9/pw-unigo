import VideoCard from '@components/contents/video-card/VideoCard'
import { LoadingSection, Typography } from '@components/ui'
import useRecentWatch, { RecentWatch } from '@lib/hooks/batches/useRecentWatch'
import React from 'react'

const RecentlyWatched = () => {
  const { data, isLoading } = useRecentWatch({
    params: {
      limits: 5,
    },
  })

  if (isLoading) return <LoadingSection />
  return data?.data.length > 0 ? (
    <div className="hidden md:flex flex-col gap-8 mb-12">
      <Typography variant="heading3" weight={700}>
        Recently Watched
      </Typography>
      <div className="grid grid-cols-4 gap-6">
        {data?.data.map((video: RecentWatch) => {
          return (
            <VideoCard
              key={video.videoDetails?.id}
              id={video.videoDetails?.id}
              name={video?.videoDetails?.name}
              image={video?.videoDetails?.image}
              slug={video?.slug}
              duration={video?.videoDetails?.duration}
            />
          )
        })}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default RecentlyWatched
