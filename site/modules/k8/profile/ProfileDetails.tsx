import { Card, Typography, useUI } from '@components/ui'
import IndiaFlag from '@assets/images/profile/indiaflag.png'
import Image from 'next/image'
import Edit from '@assets/images/profile/edit.svg'
import { useEffect, useState } from 'react'
import EditProfile from '@components/common/EditProfile/EditProfile'

const ProfileDetails = () => {
  const { user } = useUI()

  const [modalState, setModalState] = useState(false)
  return (
    user && (
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
            <div className="grid grid-cols-6 items-center">
              <div className="col-span-3 md:col-span-2">
                <Typography variant="tiny" weight={600}>
                  <span className="text-gray-300">Personal Details</span>
                </Typography>
              </div>
              <hr className="border-t border-[text-gray-300] col-span-3 md:col-span-4" />
            </div>

            <div className="grid grid-cols-6">
              <div className="col-span-3 md:col-span-2">
                <Typography variant="small" weight={600}>
                  <span className="text-gray-400">Name</span>
                </Typography>
              </div>
              <div className="col-span-3 md:col-span-4">
                <Typography variant="small" weight={600} capitalize={true}>
                  {user?.firstName || '' + ' ' + user?.lastName}
                </Typography>
              </div>
            </div>
            <div className="grid grid-cols-6">
              <div className="col-span-3 md:col-span-2">
                <Typography variant="small" weight={600}>
                  <span className="text-gray-400">Gender</span>
                </Typography>
              </div>
              <div className="col-span-3 md:col-span-4">
                <Typography variant="small" weight={600} capitalize={true}>
                  {user?.profileId?.gender}
                </Typography>
              </div>
            </div>
            <div className="grid grid-cols-6">
              <div className="col-span-3 md:col-span-2">
                <Typography variant="small" weight={600}>
                  <span className="text-gray-400">Mobile No</span>
                </Typography>
              </div>
              <div className="col-span-3 md:col-span-4">
                <Typography variant="small" weight={600}>
                  {user?.countryCode + ' ' + user?.primaryNumber}
                </Typography>
              </div>
            </div>
            <div className="grid grid-cols-6">
              <div className="col-span-3 md:col-span-2">
                <Typography variant="small" weight={600}>
                  <span className="text-gray-400">Parents/ Guardian’s No</span>
                </Typography>
              </div>
              <div className="col-span-3 md:col-span-4">
                <Typography variant="small" weight={600}>
                  -NA-
                </Typography>
              </div>
            </div>
            <div className="grid grid-cols-6">
              <div className="col-span-3 md:col-span-2">
                <Typography variant="small" weight={600}>
                  <span className="text-gray-400">Email</span>
                </Typography>
              </div>
              <div className="col-span-3 md:col-span-4">
                <Typography variant="small" weight={600}>
                  {user?.email}
                </Typography>
              </div>
            </div>
            <div className="grid grid-cols-6">
              <div className="col-span-3 md:col-span-2">
                <Typography variant="small" weight={600}>
                  <span className="text-gray-400">State</span>
                </Typography>
              </div>
              <div className="col-span-3 md:col-span-4">
                <Typography variant="small" weight={600} capitalize={true}>
                  {user?.profileId?.address?.state}
                </Typography>
              </div>
            </div>
            <div className="grid grid-cols-6">
              <div className="col-span-3 md:col-span-2">
                <Typography variant="small" weight={600}>
                  <span className="text-gray-400">City</span>
                </Typography>
              </div>
              <div className="col-span-3 md:col-span-4">
                <Typography variant="small" weight={600} capitalize={true}>
                  {user?.profileId?.address?.city}
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-6 items-center">
              <div className="col-span-3 md:col-span-2">
                <Typography variant="tiny" weight={600}>
                  <span className="text-gray-300">Academic Details</span>
                </Typography>
              </div>
              <hr className="border-t border-[text-gray-300] col-span-3 md:col-span-4" />
            </div>
            {user?.class && (
              <div className="grid grid-cols-6">
                <div className="col-span-3 md:col-span-2">
                  <Typography variant="small" weight={600}>
                    <span className="text-gray-400">Class</span>
                  </Typography>
                </div>
                <div className="col-span-3 md:col-span-4">
                  <Typography variant="small" weight={600}>
                    {user?.profileId?.classes}
                  </Typography>
                </div>
              </div>
            )}
            {user?.profileId?.exams[0].toLowerCase() === 'gate' &&
              user?.profileId?.stream && (
                <div className="grid grid-cols-6">
                  <div className="col-span-3 md:col-span-2">
                    <Typography variant="small" weight={600}>
                      <span className="text-gray-400">Stream</span>
                    </Typography>
                  </div>
                  <div className="col-span-3 md:col-span-4">
                    <Typography variant="small" weight={600} capitalize={true}>
                      {user?.profileId?.stream}
                    </Typography>
                  </div>
                </div>
              )}
            {user?.profileId?.board && (
              <div className="grid grid-cols-6">
                <div className="col-span-3 md:col-span-2">
                  <Typography variant="small" weight={600}>
                    <span className="text-gray-400">Board/State Board</span>
                  </Typography>
                </div>
                <div className="col-span-3 md:col-span-4">
                  <Typography variant="small" weight={600} capitalize={true}>
                    {user?.profileId?.board}
                  </Typography>
                </div>
              </div>
            )}
            <div className="grid grid-cols-6">
              <div className="col-span-3 md:col-span-2">
                <Typography variant="small" weight={600}>
                  <span className="text-gray-400">Exams</span>
                </Typography>
              </div>
              <div className="col-span-3 md:col-span-4">
                <Typography variant="small" weight={600} capitalize={true}>
                  {user?.profileId?.exams[0]}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {modalState && <EditProfile onClose={() => setModalState(false)} />}
      </>
    )
  )
}

export default ProfileDetails
