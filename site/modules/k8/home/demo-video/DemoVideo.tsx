/* eslint-disable @next/next/no-img-element */
import { LoadingSection, Typography } from '@components/ui'
import useCohortDetails from '@lib/hooks/batches/useCohortDetails'
import Image from 'next/image'
import React from 'react'
import style from './DemoVideo.module.css'
import { getImageUrlFromObjectImageId } from '@lib/utilities'

const DemoVideo = () => {
  const { data, isLoading } = useCohortDetails()
  if (isLoading) return <LoadingSection />

  return (
    <div className={style.demoVideoContainer}>
      <div className={style.textContainer}>
        <div className={style.textHeading}>
          <span className="text-base md:text-[30px]">
            <Typography weight={700} capitalize={true}>
              {data?.previewTextTitle}
            </Typography>
          </span>
        </div>
        <span className="text-[#464646]">
          <Typography variant="small" weight={500} capitalize={true}>
            {data?.previewTextDescription}
          </Typography>
        </span>
      </div>
      <div className={style.videoContainer}>
        <img
          src={getImageUrlFromObjectImageId(data?.previewVideoThumbnail)}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  )
}

export default DemoVideo
