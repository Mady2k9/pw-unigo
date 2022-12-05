import Teacher from '@assets/images/teacher.png'
import Image from 'next/image'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { Typography } from '@components/ui'

function TeacherCard({ teacherData }: { teacherData: any }) {
  return (
    <div className="animated fadeIn duration-200">
      <div className="relative h-[136px] w-[157px]">
        <Image
          src={teacherData?.imageId?.baseUrl + teacherData?.imageId?.key}
          alt={`Banner Image`}
          layout="fill"
          objectFit="contain"
          quality={50}
        />
      </div>
      <div className="bg-[#F7F7F7] m-0 p-2 rounded-[8px] flex flex-col">
        <Typography weight={800} variant="tiny" capitalize={true}>
          <span className="text-gray-800">
            {teacherData?.firstName + ' ' + teacherData?.lastName}
          </span>
        </Typography>

        <div className={`flex items-center justify-between mt-1`}>
          {['B.Tech', '9 Year Exp.'].map((meta, i) => (
            <div
              className="bg-white px-2 py-1 rounded-[6px] text-gray-800 text-[9px] font-bold"
              key={i}
            >
              {meta}
            </div>
          ))}
          <ArrowSmallRightIcon className={`w-4 text-[#6B4FE2]`} />
        </div>
      </div>
    </div>
  )
}

export default TeacherCard
