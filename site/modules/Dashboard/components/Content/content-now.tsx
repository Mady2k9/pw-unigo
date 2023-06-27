import React, { useState } from 'react'
import s from './content-now.module.css'
import Image from 'next/image'
import { Button, Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'
import { Select } from '@components/ui'
import { TextInput } from '@components/ui'
import NominateContent from './nominateContent'

export interface contentNowProps {}

function contentNow() {
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
    <div className="w-full bg-white overflow-y-scroll">
      <div className=" flex justify-center">
        <div className="md:bg-[#F8F8F8] w-full md:w-[90%] lg:w-[85%] h-fit  rounded-b-xl lg:p-3 items-center relative">
          <div className="">
            <div className="bg-white rounded-[8px] px-[8px] sm:px-[24px] py-[12px]">
              <div className="text-[16px] font-semibold mb-2">
                Instructions for Upload Document:
              </div>
              <ol className="bg-white list-disc px-[12px]">
                <li>
                  For report card please upload the PDF with all the pages
                  including front section of your report card .
                </li>
                <li>
                  Passport size photo file size should not exceed more than 20
                  KB
                </li>
                <li>
                  Upload front and back side of Adhar card and the file size
                  should not exceed more than 20 KB each
                </li>
                <li>
                  Upload supporting documents i.e. certificate in front of exams
                  selected.
                </li>
              </ol>
            </div>

            <div className="mt-4 bg-white h-full flex max-[640px]:flex-col max-[640px]:h-screen ">
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
                <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
                  IJSO Stage 1&2
                </p>
                <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
                  IJSO Stage 3&4
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
                <p className="text-[#1B2124] bg-[#F8F8F8] p-3">
                  Language proficiency
                </p>
              </div>
              <NominateContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contentNow
