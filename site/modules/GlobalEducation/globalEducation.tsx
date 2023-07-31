import React from 'react'
import Image from 'next/image'
import FirstCardImage from '../../public/why_choose_icon1.svg'
import SecondCardImage from '../../public/why_choose_icon2.svg'
import ThirdCardImage from '../../public/why_choose_icon3.svg'
import FourthCardImage from '../../public/why_choose_icon4.svg'

function globalEducation() {
  return (
    <div className="sm:h-[490px] h-[622px] py-[40px] sm:px-[160px]">
      <div className=" text-center m-auto mb-[32px]">
        <h1 className="font-[700] sm:text-[40px] text-[20px] leading-[50px]">
          Why Choose PW Unigo?
        </h1>
        <p className="font-[500] sm:text-[18px] sm:mt-0 mt-[9px] text-[14px] leading-[28px]">
          We at PW provide you with the best in class consultation to study
          abroad
        </p>
      </div>

      <div className="flex justify-center px-[160px] gap-2 ">
        <div className="">
          <div className="border border-red-400 p-[24px] flex mb-2 items-center gap-[24px]">
            <div>
              <Image height={56} width={56} src={FirstCardImage} alt="demo" />
            </div>
            <div>
              <p className="sm:text-[20px] text-[16px] font-[700]">
                {' '}
                One to one counselling
              </p>
              <p className="sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500]">
                Get personalised help from the best mentors in the country
              </p>
            </div>
          </div>
          <div className="border border-red-400 p-[24px] flex items-center gap-[24px]">
            <div>
              <Image height={56} width={56} src={SecondCardImage} alt="demo" />
            </div>
            <div>
              <p className="sm:text-[20px] text-[16px] font-[700]">
                {' '}
                One to one counselling
              </p>
              <p className="sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500]">
                Get personalised help from the best mentors in the country
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-red-400 p-[24px] flex mb-2 items-center gap-[24px]">
            <div>
              <Image height={56} width={56} src={FirstCardImage} alt="demo" />
            </div>
            <div>
              <p className="sm:text-[20px] text-[16px] font-[700]">
                {' '}
                One to one counselling
              </p>
              <p className="sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500]">
                Get personalised help from the best mentors in the country
              </p>
            </div>
          </div>
          <div className="border border-red-400 p-[24px] flex items-center gap-[24px]">
            <div>
              <Image height={56} width={56} src={SecondCardImage} alt="demo" />
            </div>
            <div>
              <p className="sm:text-[20px] text-[16px] font-[700]">
                {' '}
                One to one counselling
              </p>
              <p className="sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500]">
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
