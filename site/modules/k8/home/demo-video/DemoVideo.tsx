/* eslint-disable @next/next/no-img-element */
import {LoadingSection, Typography} from '@components/ui'
import useCohortDetails from '@lib/hooks/batches/useCohortDetails'
import Image from 'next/image'
import React from 'react'
import style from './DemoVideo.module.css'

const DemoVideo = () => {
    const {data, isLoading} = useCohortDetails()
    if (isLoading) return <LoadingSection/>

    return (
        <div className={style.demoVideoContainer}>
            <div className={style.textContainer}>
                <div className={style.textHeading}>
                    <Typography weight={700}>
            <span className="text-base md:text-[30px]">
              {data?.previewTextTitle}
            </span>
                    </Typography>
                </div>

                <Typography variant="small" weight={500}>
                    <span className="text-[#464646]">{data?.previewTextDescription}</span>
                </Typography>
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
