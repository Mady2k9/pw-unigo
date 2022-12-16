import { Card, Typography } from '@components/ui'
import IndiaFlag from '@assets/images/profile/indiaflag.png'
import Image from 'next/image'
import Edit from '@assets/images/profile/edit.svg'
import { useState } from 'react'
import EditProfile from '@components/common/EditProfile/EditProfile'

const ProfileDetails = () => {
  const [modalState, setModalState] = useState(false)
  return (
    <>
      <div className="col-span-8 lg:col-span-6 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <Typography variant="heading4" weight={700}>
            Profile Detail
          </Typography>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setModalState(true)}
          >
            <Typography variant="tiny" weight={600}>
              Edit
            </Typography>
            <Image src={Edit} alt="edit_icon" height={35} width={35} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-20 md:gap-64 lg:gap-[150px] justify-between">
            <Typography variant="tiny" weight={600}>
              <span className="text-gray-300">Personal Details</span>
            </Typography>
            <hr className="border-t border-[text-gray-300] flex-1" />
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-between">
            <Typography variant="small" weight={600}>
              <span className="text-gray-400">Name</span>
            </Typography>
            <div className="w-1/2 lg:w-4/12">
              <Typography variant="small" weight={600}>
                Roronoa Zoro
              </Typography>
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-between">
            <Typography variant="small" weight={600}>
              <span className="text-gray-400">Gender</span>
            </Typography>
            <div className="w-1/2 lg:w-4/12">
              <Typography variant="small" weight={600}>
                Male
              </Typography>
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-between">
            <Typography variant="small" weight={600}>
              <span className="text-gray-400">Mobile No</span>
            </Typography>
            <div className="w-1/2 lg:w-4/12 flex items-center gap-2">
              <Typography variant="small" weight={600}>
                +69000000000
              </Typography>
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-between">
            <Typography variant="small" weight={600}>
              <span className="text-gray-400">Parents/ Guardian’s No</span>
            </Typography>
            <div className="w-1/2 lg:w-4/12">
              <Typography variant="small" weight={600}>
                -NA-
              </Typography>
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-between">
            <Typography variant="small" weight={600}>
              <span className="text-gray-400">Email</span>
            </Typography>
            <div className="w-1/2 lg:w-4/12">
              <Typography variant="small" weight={600}>
                roronoa.zoro@onepiece.com
              </Typography>
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-between">
            <Typography variant="small" weight={600}>
              <span className="text-gray-400">State</span>
            </Typography>
            <div className="w-1/2 lg:w-4/12">
              <Typography variant="small" weight={600}>
                Grand Line
              </Typography>
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-between">
            <Typography variant="small" weight={600}>
              <span className="text-gray-400">City</span>
            </Typography>
            <div className="w-1/2 lg:w-4/12">
              <Typography variant="small" weight={600}>
                Laughtale
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-20 md:gap-64 lg:gap-[150px] justify-between">
            <Typography variant="tiny" weight={600}>
              <span className="text-gray-300">Academic Details</span>
            </Typography>
            <hr className="border-t border-[text-gray-300] flex-1" />
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-between">
            <Typography variant="small" weight={600}>
              <span className="text-gray-400">Class</span>
            </Typography>
            <div className="w-1/2 lg:w-4/12">
              <Typography variant="small" weight={600}>
                69
              </Typography>
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-between">
            <Typography variant="small" weight={600}>
              <span className="text-gray-400">Board/State Board</span>
            </Typography>
            <div className="w-1/2 lg:w-4/12">
              <Typography variant="small" weight={600}>
                Grand Line
              </Typography>
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-between">
            <Typography variant="small" weight={600}>
              <span className="text-gray-400">Exams</span>
            </Typography>
            <div className="w-1/2 lg:w-4/12">
              <Typography variant="small" weight={600}>
                Defeat Mihawk
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {modalState && <EditProfile onClose={() => setModalState(false)} />}
    </>
  )
}

export default ProfileDetails
