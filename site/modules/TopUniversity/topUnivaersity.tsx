import React from 'react'
import Image from 'next/image'
import TopBannerImage from '../../public/Hero.png'

function topUnivaersity() {
  return (
    <div className="w-screen">
      <Image src={TopBannerImage} alt="Top-banner" />
    </div>
  )
}

export default topUnivaersity
