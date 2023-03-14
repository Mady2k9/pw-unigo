import SchoolCard from './SchoolCard'
import { useState } from 'react'
import { data } from './data'
import { useRouter } from 'next/router'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const School = () => {
  const [schoolData] = useState(
    data.sort((a, b) => a.schoolName.localeCompare(b.schoolName))
  )

  const router = useRouter()

  return (
    <div id="school" className="max-w-7xl mx-auto px-2 py-8 lg:py-14">
      <div className="flex items-center justify-between mb-4 md:mb-10">
        <span className="text-[16px] md:text-2xl font-bold">
          School Powered By PW
        </span>

        <div className="flex gap-2 font-bold items-center whitespace-nowrap cursor-pointer">
          <span
            className=" text-[#5A4BDA] border-none bg-none text-sm md:text-lg"
            onClick={() => router.push('/school/all')}
          >
            See All
          </span>

          <ArrowSmallRightIcon className="w-5 h-5 text-indigo-500" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4  ">
        {schoolData.slice(0, 8).map((item, idx) => (
          <div
            key={idx}
            className="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6 "
          >
            <SchoolCard school={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default School
