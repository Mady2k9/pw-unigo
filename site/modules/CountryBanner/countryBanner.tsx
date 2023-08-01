import React from 'react'
import Image from 'next/image'
import CountryBanners from '../../public/CountryImageBanner.png'

function CountryBanner() {
  return (
    <>
      <img
        className="w-full sm:block hidden"
        src="/banner-inner-web.png"
        alt="Main Banner"
      />
      <img
        className="w-full sm:hidden block"
        src="/banner-inner-mweb.png"
        alt="Main Banner"
      />
      <div className="absolute 2xl:top-[320px] xl:top-[280px] lg:top-[200px] sm:top-[160px] top-[250px] text-white sm:leading-[50px] sm:text-[40px] text-[24px] leading-[32px] font-[700] justify-center flex text-center w-full">
        Study MBBS From
        <br />
        Armenia
      </div>
    </>
  )
}

export default CountryBanner
