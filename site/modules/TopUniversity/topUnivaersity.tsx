import React from 'react'
import Image from 'next/image'
import TopBannerImage from '../../public/hero.svg'

function topUnivaersity() {
  return (
    <>
<div className='relative mb-[200px] mx-auto'>
<div className=' container text-center w-[824px]'>
  <div className='mb-[32px]'>
  <p className='text-[64px] font-[600] leading-[80px]'>Study Abroad from</p>
    <p className='text-[64px] font-[600] leading-[80px] text-[#DA1F3D]'>Top Universities</p>
    <p className='text-[20px] font-[600]'>PW Unigo is a comprehensive solution for consultation services dedicated to guiding students through the intricate process of pursuing higher education abroad.
      Our mission is to open doors to the world's most prestigious universities</p>
</div>
<button className='w-[208px] h-[56px] bg-[#DA1F3D] text-white px-[14px] text-[18px] leading-[28px]'>Talk to a counsellor</button>
</div>
<div className='absolute mb-[12px] z-0'>

<img  src='hero.svg' alt='Top-banner'/>
</div>
</div>
</>
  )
}

export default topUnivaersity