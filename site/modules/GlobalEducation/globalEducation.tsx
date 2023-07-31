import React from 'react'
import Image from 'next/image'
import FirstCardImage from '../../public/why_choose_icon1.svg'
import SecondCardImage from '../../public/why_choose_icon2.svg'
import ThirdCardImage from '../../public/why_choose_icon3.svg'
import FourthCardImage from '../../public/why_choose_icon4.svg'

function globalEducation() {
  return (
    <div className=" md:py-[40px] py-[24px] sm:px-[160px]">
      <div className=" text-center m-auto mb-[32px]">
        <h1 className="font-[700] sm:text-[40px] text-[24px] md:leading-[50px] leading-[32px]">
          Why Choose PW Unigo?
        </h1>
        <p className="font-[500] sm:text-[18px] sm:mt-0 mt-[6px] text-[14px] leading-[28px]">
          We at PW provide you with the best in class consultation to study
          abroad
        </p>
      </div>

      <div className="lg:flex justify-center gap-2 ">
        <div className="px-[16px] sm:p-0">
          <div className="border border-[#B7B7B7] md:p-[24px] p-[16px] flex mb-2 items-center gap-[24px] ">
              <img className='w-[56px] h-[56px]' src="why_choose_icon1.svg" alt="demo" />
            <div>
              <p className="sm:text-[20px] text-[16px] font-bold leading-[24px]">
                One to one counselling
              </p>
              <p className="sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500] leading-[22px]">
                Get personalised help from the best mentors in the country
              </p>
            </div>
          </div>
          <div className="border border-[#B7B7B7] md:p-[24px] p-[16px] flex items-center gap-[24px] mb-2">
           
              <img className='w-[56px] h-[56px]' src="why_choose_icon2.svg" alt="demo" />
        
            <div>
              <p className="sm:text-[20px] text-[16px] font-[700] leading-[24px]">
                One to one counselling
              </p>
              <p className="sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500] leading-[22px]">
                Get personalised help from the best mentors in the country
              </p>
            </div>
          </div>
        </div>
        <div className="px-[16px] sm:p-0">
          <div className="border border-[#B7B7B7] md:p-[24px] p-[16px] flex mb-2 items-center gap-[24px]">
       
              <img className='w-[56px] h-[56px]' src="why_choose_icon3.svg" alt="demo" />
         
            <div>
              <p className="sm:text-[20px] text-[16px] font-[700] leading-[24px]">
                One to one counselling
              </p>
              <p className="sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500] leading-[22px]">
                Get personalised help from the best mentors in the country
              </p>
            </div>
          </div>
          <div className="border border-[#B7B7B7] md:p-[24px] p-[16px] flex items-center gap-[24px]">
         
              <img className='w-[56px] h-[56px]' src="why_choose_icon4.svg" alt="demo" />
      
            <div>
              <p className="sm:text-[20px] text-[16px] font-[700] leading-[24px]">
                One to one counselling
              </p>
              <p className="sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500] leading-[22px]">
                Get personalised help from the best mentors in the country
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default globalEducation
