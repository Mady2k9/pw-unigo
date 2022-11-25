import Teacher from '@assets/images/teacher.png'
import Image from 'next/image'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'

function TeacherCard() {
  return (
    <div className="max-w-[150px] animated fadeIn duration-200">
      <Image src={Teacher} alt={`Banner Image`} placeholder="blur" />
      <div className="bg-[#F7F7F7] m-0 p-2 rounded-[8px]">
        <span className="#464646 font-extrabold text-[12px]">
          Sachin Jakhar
        </span>

        <div className={`flex items-center justify-between mt-1`}>
          {['B.Tech', '9 Year Exp.'].map((meta, i) => (
            <div
              className="bg-white px-2 py-1 rounded-[6px] text-[#464646] text-[9px] font-bold"
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
