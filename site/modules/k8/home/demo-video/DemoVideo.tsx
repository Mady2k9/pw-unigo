/* eslint-disable @next/next/no-img-element */
import { LoadingSection, Typography, useUI } from '@components/ui'
import useCohortDetails from '@lib/hooks/batches/useCohortDetails'
import Play from '@assets/images/play-btn.svg'
import React, { useState } from 'react'
import style from './DemoVideo.module.css'
import { getImageUrlFromObjectImageId } from '@lib/utilities'
import Image from 'next/image'
import eventTracker from '@lib/eventTracker/eventTracker'
import VideoPlayerComponentWrapper from '@components/video/Player/VideoPlayerComponentWrapper'

const DemoVideo = () => {
  const { data, isLoading } = useCohortDetails()
  const [play, setPlay] = useState(false)
  if (isLoading) return <LoadingSection />

  const playVideo = () => {
    eventTracker.interactiveVideoClick(data?.previewVideoId?._id)
  }

  return (
    <div className={style.demoVideoContainer}>
      <div className={style.textContainer}>
        <div className={style.textHeading}>
          <Typography weight={700} capitalize={true}>
            <span className="text-base md:text-[30px]">
              {data?.previewTextTitle}
            </span>
          </Typography>
        </div>
        <span className="text-[#464646]">
          <Typography
            variant="small"
            weight={500}
            capitalize={true}
            html={data?.previewTextDescription}
          />
        </span>
      </div>
      <div className={style.videoContainer} onClick={playVideo}>
        <img
          src={getImageUrlFromObjectImageId(data?.previewVideoThumbnail)}
          alt=""
          className="h-full w-full object-contain"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => setPlay(true)}
        >
          <Image src={Play} alt="play_btn" />
        </div>
        {play && (
          <div className="absolute inset-0 w-full h-full">
            <VideoPlayerComponentWrapper
              type="MP4"
              src={data?.previewVideoId?.baseUrl + data?.previewVideoId?.key}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default DemoVideo
