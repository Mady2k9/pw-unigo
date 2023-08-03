import React from 'react'
import Image from 'next/image'
import CountryBanners from '../../public/CountryImageBanner.png'

export interface CountryBannerProps {
  bannerItems: { image: string; title: string }[]
}

//function CountryBanner() {
const countryBannerPropsNav: React.FC<CountryBannerProps> = (props) => {
  const { bannerItems } = props
  //console.log('banner', bannerItems)
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
<<<<<<< HEAD
        {bannerItems[0]?.title}
=======
        Study MBBS From
        <br />
        Armenia
>>>>>>> 2d57d401d80d2332431c12d35439435a2b062fea
      </div>
    </>
  )
}

<<<<<<< HEAD
export default countryBannerPropsNav
=======
export default CountryBanner
>>>>>>> 2d57d401d80d2332431c12d35439435a2b062fea
