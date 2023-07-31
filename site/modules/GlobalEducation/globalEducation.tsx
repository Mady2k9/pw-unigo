import React from 'react'
import Image from 'next/image'
import FirstCardImage from "../../public/image2.svg"
import SecondCardImage from "../../public/Group.svg"
import ThirdCardImage from "../../public/image42.svg"
import FourthCardImage from "../../public/image43.svg"

function globalEducation() {
  return (
    <div className=' sm:h-[490px] h-[622px]'>
        <div className=' py-[40px] sm:px-[160px] text-center m-auto'>
        <div className='text-center mb-[32px]'>
            <h1 className='font-[700] sm:text-[40px] text-[20px]'>Why Choose PW Unigo?</h1>
            <p className='font-[500] sm:text-[18px] sm:mt-0 mt-[9px] text-[14px]'>We at PW provide you with the best in class consultation to study abroad</p>
        </div>

        <div className='flex flex-wrap justify-around'>
        <div className='sm:w-[550px] w-[328px] sm:h-[136px] h-[104px] border-2 border-[#B7B7B7] h-[136px] mb-4 '>
                <div className='sm:p-[24px] p-[16px] flex items-center justify-between'>
                <div>
                <Image height={56} width={56} src={FirstCardImage} alt='demo'/>
                </div>
                <div className='w-[90%] text-left'>
                <p className='sm:text-[20px] text-[16px] font-[700]'> One to one counselling</p>
                <p className='sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500]'>Get personalised help from the best mentors in the country</p>
                </div>
                </div>
            </div>
            <div className='sm:w-[550px] w-[328px] sm:h-[136px] h-[104px] border-2 border-[#B7B7B7] h-[136px] mb-4'>
                <div className='p-[24px] flex items-center justify-between'>
                <div>
                <Image  height={56} width={56} src={SecondCardImage} alt='demo'/>
                </div>
                <div className='w-[80%] text-left'>
                <p className='sm:text-[20px] text-[16px] font-[700]'> Academic Program</p>
                <p className='sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500]'>PW Unigo provides preparation modules for you to ace standardized tests</p>
                </div>
                </div>
            </div>
            <div className='sm:w-[550px] w-[328px] sm:h-[136px] h-[104px] border-2 border-[#B7B7B7] h-[136px] mb-4'>
                <div className='p-[24px] flex items-center justify-between'>
                <div>
                <Image  height={56} width={56} src={ThirdCardImage} alt='demo'/>
                </div>
                <div className='w-[80%] text-left'>
                <p className='sm:text-[20px] text-[16px] font-[700]'> Student Community</p>
                <p className='sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500]'>Discover and connect with like-minded peers in your field of interest</p>
                </div>
                </div>
            </div>
            <div className='sm:w-[550px] w-[328px] sm:h-[136px] h-[104px] border-2 border-[#B7B7B7] h-[136px] mb-4'>
                <div className='p-[24px] flex items-center justify-between'>
                <div>
                <Image  height={56} width={56} src={FourthCardImage} alt='demo'/>
                </div>
                <div className='w-[80%] text-left'>
                <p className='sm:text-[20px] text-[16px] font-[700]'> Complete Support</p>
                <p className='sm:text-[16px] text-[14px] text-[#3D3D3D] font-[500]'>Get complete support and guidance throughout the entire duration of your course</p>
                </div>
                </div>
            </div>
         
        </div>
        </div>
    </div>
  )
}

export default globalEducation