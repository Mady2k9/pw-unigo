/* eslint-disable @next/next/no-img-element */
import { Typography } from '@components/ui'
import { useEffect, useState } from 'react'
import styles from './ReferAndEarn.module.css'

interface Data {
  _id: string
  createdAt: Date
  updatedAt: Date
  organizationId: string
  key: string
  type: string
  value: Value
  __v: number
}

interface Value {
  BATCH: Batch
}

interface Batch {
  coinReferralStatus: boolean
  batchCoinReferAndEarnMessage: string
  offerTypeReferrer: string
  offerTypeReferee: string
  offerValueReferee: number
  offerValueReferrer: number
  maxCoinLimit: number
  images: Image[]
}

interface Image {
  baseUrl: string
  _id: string
  name: string
  key: string
  organization: string
  createdAt: Date
  __v: number
}

const Hero = ({ orgData }: { orgData: Data }) => {
  const [bannerImg, setBannerImg] = useState('')
  useEffect(() => {
    setBannerImg(
      orgData?.value?.BATCH?.images[1].baseUrl +
        orgData?.value?.BATCH?.images[1].key
    )
  }, [orgData])
  return (
    <section className={`${styles.heroSection} my-10`}>
      <div className="flex items-center justify-center h-full">
        <div>
          <img src={bannerImg} alt="hero_banner" className={styles.bannerImg} />
        </div>
        <div
          className={`flex flex-col items-center justify-center gap-2 bg-[#f7f5ff] h-full pl-1 pr-5 rounded-r-2xl ${styles.videoContainer}`}
        >
          <Typography variant="heading3" weight={700}>
            How It Works ?
          </Typography>
          <div className={styles.videoDiv}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
