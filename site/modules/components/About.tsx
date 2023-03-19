import { Typography } from '@components/ui'
import { Content } from '@lib/hooks/batches/useBatchContents'
import React from 'react'

export default function About() {
  return (
    <div
      id="about"
      className="max-w-screen-7xl gap-3 flex flex-col justify-center items-center px-4 md:px-0 py-8 lg:py-14"
    >
      <div className="mb-8">
        <span className="text-[#1B2124] md:text-2xl text-[16px] font-bold">
          Know About SIP
        </span>
      </div>
      <div className="text-md md:text-xl max-w-7xl text-left ">
        <div className="font-semibold">
          <span className="text-[#757575] ">
            PW offers School Integrated Learning Center for
            <span className="text-[#1B2124]"> IIT-JEE & NEET </span>
            preparation for class
            <span className="text-[#1B2124]"> 11th and 12th</span> students
            within the school campus. It delivers quality education with
            cutting-edge technological support with a combination of
            <span className="text-[#1B2124]">
              &nbsp;online interactive classes, doubts solving app and
              comprehensive study material.
            </span>
          </span>
        </div>
        <div className="font-semibold  mt-9">
          <span className="text-[#757575] ">
            We can proudly say that PW has changed the way of teaching and has
            emerged as a market disruptor. We aim to collaborate with
            Progressive Schools across the country by setting up
            <span className="text-[#1B2124]"> “PW Learning Hub”</span> , the
            new-age Hi-Tech classrooms designed to train students for academic
            and competitive success. It will be
            <span className="text-[#1B2124]">
              &nbsp;a blend of both online teaching and offline learning&nbsp;
            </span>
            where students will avail the benefit of getting tutored in a
            secured and comfortable environment within the school premises.
          </span>
        </div>
      </div>
    </div>
  )
}
