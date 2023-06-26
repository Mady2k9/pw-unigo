import React, { useState } from 'react'
import Image from 'next/image'
import downArrow from 'public/downArrow.svg'
import upArrow from 'public/upArrow.svg'
import NominateContent from '@modules/NominateRightContent/nominateContent'

function nominateRight() {
  const [show, setShow] = useState(false)
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
      <div className="w-[1022px] h-fit mx-auto bg-[#F8F8F8] max-[640px]:bg-white max-[640px]:w-screen ">
        <div className="p-3 bg-white m-3 rounded-lg max-[640px]:bg-[#F8F8F8] ">
          <h3>Instructions to fill registration form:</h3>
          <ul className="list-disc p-2 ml-4 ">
            <li>
              To nominate yourself, please select an exam with mentioned
              criteria.
            </li>
            <li>
              Weightage of the title is decreasing from group wise i.e. From
              Group A to Group C
            </li>
            <li>
              You can fill multiple awards that will be counted separately.
              Exact details mentioned in each category.
            </li>
            <li>
              After selecting the title of your choice, please click on submit
              button and your form will be saved.
            </li>
          </ul>
        </div>

        <div className="m-4 bg-white h-full flex max-[640px]:flex-col max-[640px]:h-screen ">
          <div className="w-[270px] p-4 max-[640px]:w-full max-[640px]:p-0 justify-end">
            <p className="text-[#1B2124] bg-[#E4E7EA] p-3 font-bold ">
              Exam Category
            </p>
            <p className="text-[#5A4BDA] p-3 max-[640px]:w-full">
              Profile Based Scholarship Award
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Language Proficiency
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Stages of Official International Olympiads
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">IJSO Stage 1&2</p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">IJSO Stage 3&4</p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Language proficiency
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Language proficiency
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Language proficiency
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Language proficiency
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Language proficiency
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Language proficiency
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Language proficiency
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Language proficiency
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Language proficiency
            </p>
            <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
              Language proficiency
            </p>
          </div>

          <div className="m-6 w-[671px] max-[640px]:m-0 max-[640px]:w-full ">
            <p className="text-[#757575] max-[640px]:mt-8">
              Selected Exam Category: Profile Based scholarship award
            </p>
            <div className="mt-6 bg-[#F8F8F8] flex justify-between p-4 max-[640px]:mt-3">
              <div>
                <p className="text-[#757575]">
                  Fill your achievements here for
                </p>
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

            {show == true ? <NominateContent /> : ''}
            <div className=" bg-[#F8F8F8] p-4 flex justify-between mt-4">
              <div>
                <p className="text-[#757575]">
                  Fill your achievements here for
                </p>
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
            {showSecond == true ? <NominateContent /> : ''}
            <div className="mt-4 bg-[#F8F8F8] p-4 flex justify-between">
              <div>
                <p className="text-[#757575]">
                  Fill your achievements here for
                </p>
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
            {showThird == true ? <NominateContent /> : ' '}
          </div>
        </div>
      </div>
    </>
  )
}

export default nominateRight
