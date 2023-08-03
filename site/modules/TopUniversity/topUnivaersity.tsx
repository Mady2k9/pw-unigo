import React from 'react'

function topUnivaersity() {
  return (
    <>


      <div className='relative'>
        <img className='w-full sm:block hidden ' src="hero.svg" alt="top banner" />
        <img className='w-full sm:hidden block' src="hero_mweb.svg" alt="Top banner" />
        <div className="absolute top-[20%] md:top-[4%] lg:top-[3%] xl:top-[20%] 2xl:top-[35%] font-[700] justify-center text-center w-full">
          <div className='lg:w-[824px] md:w-[500px] w-[310px] m-auto'>
            <p className='lg:text-[64px] md:text-[30px] text-[32px] font-[600] leading-[48px] sm:leading-[24px] lg:leading-[80px]'>Study Abroad from</p>
            <p className='lg:text-[64px] md:text-[28px] text-[32px] font-[600] leading-[48px] lg:leading-[80px] text-[#DA1F3D]'>Top Universities</p>
            <p className='lg:text-[20px] sm:text-[14px] text-[16px] font-[600] lg:leading-[30px] leading-[24px] mt-[12px] mb-[32px]'>PW Unigo is a comprehensive solution for consultation services dedicated to guiding students through the intricate process of pursuing higher education abroad.
              Our mission is to open doors to the world's most prestigious universities</p>
            <button className=' bg-[#DA1F3D] text-white  p-[14px] text-[18px] leading-[28px] rounded-md'>Talk to a counsellor</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default topUnivaersity
