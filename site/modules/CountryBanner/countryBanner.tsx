import React from 'react'
import Image from 'next/image'
import CountryBanners from '../../public/CountryImageBanner.png'

function CountryBanner() {
  return (
    <>
      <img className="w-full" src="/banner-inner-web.png" alt="Main Banner" />
      <div className="absolute top-[30%] text-white text-[40px] font-[700] justify-center flex text-center w-full">
        Study MBBS From
        <br />
        Armenia
      </div>
    </>
  )
}

export default CountryBanner
