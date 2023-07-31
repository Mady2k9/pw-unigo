
import Header from './header'
import { Loader, Typography } from '@components/ui'
import Phn from './assets/phn_icon.svg'
import About from '@modules/components/About'
import { Features } from '@modules/components/Features'
import Hero from '@modules/components/Hero'
import School from '@modules/components/School/School'
import Why from '@modules/components/Why'
import TopUniversity from './topUniversity'
import GlobalEducation from './globalEducation'
import WhyUnigoSection from './whyUnigoSection'
import CountryBanner from './countryBanner'
import FourthComp from './fourthComp'
import FithComp from './fithComp'
import { useState } from 'react'
import Close from './assets/Close.svg'
import Image from 'next/image'
import SixthComp from './sixthComp'
import Footer from './footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }
  return (
    <>
      <div className="relative">
        {isOpen ? (
          <div className="sticky left-0 bg-white sm:w-[80%] w-full flex flex-col justify-between h-screen z-[100] top-0 p-[16px] transition-all overscroll-none">
            <div>
              <div className="py-[8px]">
                <button onClick={handleOpen}>
                  <Image
                    src={Close}
                    alt="close button"
                    height={24}
                    width={24}
                  />
                </button>
              </div>
              <div className="text-[#757575] text-[12px] font-[600] mt-[12px] mb-[14px]">
                COUNTRIES
              </div>
              <div className="h-[32px] border-b-[1px] mb-[12px] w-full text-[14px] font-[600] ">
                Russia
              </div>
              <div className="h-[32px] border-b-[1px] mb-[12px] w-full text-[14px] font-[600] ">
                Armenia
              </div>
              <div className="h-[32px] border-b-[1px] mb-[12px] w-full text-[14px] font-[600] ">
                Georgia
              </div>
              <div className="h-[32px] border-b-[1px] mb-[12px] w-full text-[14px] font-[600] ">
                Kazakhstan
              </div>
              <div className="h-[32px] border-b-[1px] mb-[12px] w-full text-[14px] font-[600] ">
                Kyrgyzstan
              </div>
              <div className="h-[32px] border-b-[1px] mb-[12px] w-full text-[14px] font-[600] ">
                Uzbekistan
              </div>
            </div>

            <button className="p-[8px] w-full flex h-[40px] border-[2px] rounded-[6px]">
              <div className=" m-auto flex">
                <Image src={Phn} alt="phone" />
                <p className="ml-[8px]">1800-252-123</p>
              </div>
            </button>
          </div>
        ) : (
          ''
        )}
        <Header handleState={handleOpen} />
        <TopUniversity />
        <GlobalEducation />
        <WhyUnigoSection />
        <FourthComp />
        <FithComp />
        <SixthComp />
        <Footer/>
      </div>
      {/* 
<div>
  <CountryBanner />
</div> */}
    </>
  )
}

export default Home
