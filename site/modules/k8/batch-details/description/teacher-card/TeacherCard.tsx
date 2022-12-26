import TeacherPlaceholder from '@assets/images/default_teacher.svg'
import Image from 'next/image'
import { Typography } from '@components/ui'
import { useState } from 'react'
import TeacherModal from '../teacher-modal/TeacherModal'

interface TeacherData {
  firstName: string
  lastName: string
  _id: string
  qualification: string
  imageId: { baseUrl: string; key: string; _id: string }
  experience: number
}

function TeacherCard({ teacherData }: { teacherData: TeacherData }) {
  const [modalOpen, setModalOpen] = useState(false)
  const teacherImg =
    (teacherData?.imageId?.baseUrl &&
      teacherData?.imageId?.key &&
      teacherData?.imageId?.baseUrl + teacherData?.imageId?.key) ||
    TeacherPlaceholder

  return (
    <>
      <div
        className="animated fadeIn duration-200 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <div className="relative h-[136px] w-[157px] mx-auto">
          <Image
            src={teacherImg}
            alt={`Banner Image`}
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className="bg-[#F7F7F7] m-0 py-2 px-3 rounded-[8px] flex flex-col">
          <div className="text-gray-800 flex items-center gap-1">
            {teacherData?.firstName && (
              <Typography weight={800} variant="tiny" capitalize={true}>
                {teacherData?.firstName}
              </Typography>
            )}
            {teacherData?.lastName && (
              <Typography weight={800} variant="tiny" capitalize={true}>
                {teacherData?.lastName}
              </Typography>
            )}
          </div>

          <div className={`flex items-center gap-2 mt-1`}>
            <div className="bg-white rounded-md px-2 py-1">
              <Typography variant="label" weight={700}>
                {teacherData?.qualification}
              </Typography>
            </div>
            <div className="bg-white rounded-md px-2 py-1">
              <Typography variant="label" weight={700}>
                {teacherData?.experience} years of Exp.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <TeacherModal
          teacherId={teacherData?._id}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}

export default TeacherCard
