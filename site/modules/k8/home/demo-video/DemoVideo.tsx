/* eslint-disable @next/next/no-img-element */
import useCohortDetails from '@lib/hooks/batches/useCohortDetails'
import Image from 'next/image'
import React from 'react'
import style from './DemoVideo.module.css'

const DemoVideo = () => {
  const { data, isLoading } = useCohortDetails({
    cohortId: process.env.NEXT_PUBLIC_K8_COHORT_ID,
  })
  if (isLoading) return <div>loading...</div>
  return (
    <div className={style.demoVideoContainer}>
      <div className={style.textContainer}>
        <span className={style.textHeading}>{data?.previewTextTitle}</span>
        <span className={style.textDescription}>
          {data?.previewTextDescription}
        </span>
      </div>
      <div className={style.videoContainer}>
        <img
          src={data?.previewVideoId?.baseUrl + data?.previewVideoId?.key}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  )
}

export default DemoVideo
