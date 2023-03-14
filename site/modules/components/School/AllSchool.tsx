import {
  locationImage,
  studentImage,
  classImage,
  schoolImage,
  symbiosisImage,
  yearImage,
} from '@assets/images/sip'
import { Typography } from '@components/ui'
import SchoolCard from './SchoolCard'
import { useState } from 'react'
import { data } from './data'

const Allschool = () => {
  const [schoolData] = useState(
    data.sort((a, b) => a.schoolName.localeCompare(b.schoolName))
  )
  return (
    <div className=" max-w-7xl mx-auto px-2 p-5 min-h-[338px] ">
      <div className="flex items-start justify-start mb-3 md:mb-10">
        <span className=" text-[16px] md:text-2xl font-bold ">
          School Powered By PW
        </span>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6"
          >
            <SchoolCard school={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Allschool
