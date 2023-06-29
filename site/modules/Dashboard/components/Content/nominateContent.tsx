import React, { useState } from 'react'
import Image from 'next/image'
import downArrow from 'public/downArrow.svg'
import upArrow from 'public/upArrow.svg'
import NominateRightData from './nominateRightData'

function nominateContent() {
  const [show, setShow] = useState(true)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)

  const showContentFirst = () => {
    setShow(!show)
  }
  const showContentSecond = () => {
    setShowSecond(!showSecond)
  }
  const showContentThird = () => {
    setShowThird(!showThird)
  }
  return (
    <>
      <div className="p-4 w-full ">
        <p className="text-[#757575] max-[640px]:mt-8">
          Selected Exam Category: Profile Based scholarship award
        </p>
        <div className="mt-6 bg-[#F8F8F8] flex justify-between p-4 max-[640px]:mt-3">
          <div>
            <p className="text-[#757575]">Fill your achievements here for</p>
            <p className="text-[#1B2124] text-base">Current Year (2023)</p>
          </div>
          <div className="self-center">
            {show == false ? (
              <Image onClick={showContentFirst} src={downArrow} />
            ) : (
              <Image onClick={showContentFirst} src={upArrow} />
            )}
          </div>
        </div>
        <hr />

        {show == true ? <NominateRightData /> : ''}
        <div className=" bg-[#F8F8F8] p-4 flex justify-between mt-4">
          <div>
            <p className="text-[#757575]">Fill your achievements here for</p>
            <p className="text-[#1B2124]">Previous Year (2022)</p>
          </div>
          <div className="self-center">
            {showSecond == false ? (
              <Image onClick={showContentSecond} src={downArrow} />
            ) : (
              <Image src={upArrow} onClick={showContentSecond} />
            )}
          </div>
        </div>
        <hr />
        {showSecond == true ? <NominateRightData /> : ''}
        <div className="mt-4 bg-[#F8F8F8] p-4 flex justify-between">
          <div>
            <p className="text-[#757575]">Fill your achievements here for</p>
            <p className="text-[#1B2124]">Year (2021)</p>
          </div>
          <div className="self-center">
            {showThird == false ? (
              <Image onClick={showContentThird} src={downArrow} />
            ) : (
              <Image src={upArrow} onClick={showContentThird} />
            )}
          </div>
        </div>
        <hr />
        {showThird == true ? <NominateRightData /> : ' '}
      </div>
    </>
  )
}

export default nominateContent
