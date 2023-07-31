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

        <div className='flex px-[160px] justify-start h-[48px]' >

        <div >
        <p className='text-[#1B2124] px-[24px] py-[12px]'>Why study in Armenia</p>
        <span className='w-[100px]'><hr /> </span>
        </div>

        <div className='flex w-[60%] ml-4 justify-between '>
        <p className='px-[24px]'>Colleges</p>
        <p className='px-[24px]'>Cost</p>
        <p className='px-[24px]'>Requirements</p>
        <p className='px-[24px]'>FAQs</p>
        </div>

        </div>
    </div>
    <WhyStudyCountry />
    <CountryColleges />
    </div>
  )
}

export default CountryBanner