import React from 'react'

function topUnivaersity() {
  return (
    <>
      <div className="relative">
        <img
          className="w-full sm:block hidden "
          src="hero.svg"
          alt="top banner"
        />
        <img
          className="w-full sm:hidden block"
          src="hero_mweb.svg"
          alt="Top banner"
        />
        <div className="absolute top-[20px] sm:top-[10px] lg:top-[40px] xl:top-[70px] 2xl:top-[200px] justify-center text-center w-full">
          <div className="xl:w-[824px] w-[310px] sm:w-[700px] m-auto">
            <div className="mb-[12px] text-[32px] sm:text-[36px] xl:text-[64px] font-semibold leading-[38px] sm:leading-[40px] xl:leading-[80px]">
              <p>PW UniGo</p>
              <p className="text-[#DA1F3D]">The world is your classroom</p>
            </div>
            <p className=" font-[600] mb-[22px] sm:mb-[10px] text-[16px] sm:text-[16px] xl:text-[20px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
              Let PW Unigo be your guiding light as you navigate the world of
              global education. We are here to empower you, uplift you, and
              support you every step of the way. Let's begin this extraordinary
              journey together. Here, we blend academic excellence with
              heartfelt support, creating an environment where you feel nurtured
              and motivated to achieve greatness
            </p>
            <a href="#TalkToCounsellor">
              {' '}
              <button className=" bg-[#DA1F3D] text-white  px-[24px] py-[12px] sm:py-[14px] sm:text-[18px] text-[16px] rounded-md">
                Talk to a counsellor
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default topUnivaersity
