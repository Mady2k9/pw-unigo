import React from 'react'

function TalkCounsellorButton() {
  return (
    <div className='flex md:right-6 right-4  md:bottom-6 z-10 bottom-6 fixed  rounded-md justify-center items-center  bg-[#DA1F3D] p-2 sm:py-3.5 sm:px-3'>
      <img className='h-[20px] w-[18px]' src="talk_counseller_icon.svg" alt="counsellor icon" />
      <p className='sm:text-[18px] text-[14px] sm:leading-[28px] ml-2 leading-[22px] text-white'>Talk to a counsellor</p>
    </div>


  )
}

export default TalkCounsellorButton