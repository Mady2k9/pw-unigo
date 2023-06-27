import React, { useState } from 'react'
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
          <NominateContent />
        </div>
      </div>
    </>
  )
}

export default nominateRight
