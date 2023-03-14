/* eslint-disable @next/next/no-img-element */
import { SchoolPlaceholder } from '@assets/images/schools'
import {
  classImage,
  locationImage,
  studentImage,
  yearImage,
} from '@assets/images/sip'
import React from 'react'

const SchoolCard = ({
  school,
}: {
  school: {
    schoolName: string
    city: string
    state: string
    establishmentYear: number
    uptoClass: string
    strength: number
    image?: {
      height?: number
      src?: string
      width?: number
    }
  }
}) => {
  const style = {
    background: 'linear-gradient(360deg, #000000 -9.25%, rgba(0, 0, 0, 0) 55%)',
  }

  return (
    <div className="flex flex-col items-start  space-x-1 rounded-md mx-auto  bg-white border overflow-hidden h-full">
      <div className="flex-1 w-full">
        <div className="relative w-full">
          <div
            className="absolute w-full h-full md:h-[208px]"
            style={style}
          ></div>
          {school?.image && (
            <img
              src={school.image?.src || SchoolPlaceholder.src}
              className="object-cover md:h-[200px] md:w-[305px] mx-auto"
              alt=""
            />
          )}

          <span className="absolute bottom-1 p-1 ml-2 text-white  text-sm font-semibold w-full before:content-none before:bg-image">
            {school.schoolName}
          </span>
        </div>
      </div>
      <div className=" flex flex-col gap-2 px-2 pt-[15px] pb-[10px]">
        <div className="flex items-center gap-2">
          <img
            src={locationImage.src}
            className=" object-contain w-[20px]"
            alt=""
          />
          <span className="text-base font-semibold text-[#757575]">
            {school?.city}, {school.state}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={yearImage.src}
            className=" object-contain w-[20px] "
            alt=""
          />
          <span className="text-small font-semibold  text-[#757575] ">
            Established {school?.establishmentYear}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img src={classImage.src} className=" object-contain w-[20px] " />
          <span className="text-small font-semibold text-[#757575] ">
            {school?.uptoClass}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={studentImage.src}
            className=" object-contain w-[20px]  "
            alt=""
          />
          <span className="text-small font-semibold text-[#757575] ">
            No. of Student - {school?.strength}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SchoolCard
