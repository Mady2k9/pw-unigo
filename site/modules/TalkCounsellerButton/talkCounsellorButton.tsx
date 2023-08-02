import React from 'react'

function TalkCounsellorButton() {
  return (
    <div className=' bg-[#DA1F3D] left-[95%] sm:left-[90%] bottom-8 sticky sm:w-[228px] w-[177px] h-[40px] sm:h-[56px] m-[20px] sm:m-[50px] rounded-md'>
      <div className='flex sm:px-[12px] p-[8px] sm:py-[14px] gap-[5px] sm:gap-[8px] justify-center items-center'>
        <img className='h-[20px] w-[18px]' src="talk_counseller_icon.svg" alt="counsellor icon" />
        <p className='sm:text-[18px] text-[14px] sm:leading-[28px] leading-[22px] text-white'>Talk to a counsellor</p>
      </div>
    </div>
  )
}

export default TalkCounsellorButton