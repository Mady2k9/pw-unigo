import React from 'react'
import Image from 'next/image'
import CountryBanners from "../../public/CountryImageBanner.png"
import CountryColleges  from '../CountryColleges'
import  WhyStudyCountry  from '../WhyStudyCountry'

function CountryBanner() {
  return (
    <div className='bg-[#F8F8F8]'>
    <div>
        <div className='relative '> <Image  src={CountryBanners} alt='Main Banner'/>
        </div>
        <div className='absolute  top-[25%] left-0 right-0 text-white text-[40px] justify-center flex '>Study MBBS From Armenia </div>
    </div>

    <div className=' px-[160px] bg-white h-[48px] mb-[24px]'>
        <div className='flex justify-between w-[60%] text-[#757575] py-[10px]' >
        <p className='text-[#1B2124]'>Why study in Armenia</p>
        <div>Colleges</div>
        <p>Cost</p>
        <p>Requirements</p>
        <p>FAQs</p>
        </div>
    </div>
    <WhyStudyCountry />
    <CountryColleges />
    </div>
  )
}

export default CountryBanner