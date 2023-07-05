import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@modules/Onboarding/components/Header/header'
import Sidebar from '@modules/Onboarding/components/Sidebar/sidebar'
import Content from '@modules/Onboarding/components/Content/Content'
import { updateUserProfile } from '@modules/auth/lib'
import CrossIcon from 'public/Cross-icon.svg'
export type ProfileType = {
  email: string
  class: string
  alternateNumber: string
}

const ProfileDetails = () => {
  // TODO REMOVE any for the Profile type
  const [profileData, setProfileData] = useState<ProfileType | any>({
    email: '',
    class: '',
    alternateNumber: '',
  })
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (typeof user === 'string') {
      setProfileData(JSON.parse(user))
    }
  }, [])

  const [modalShow, setModalShow] = useState(false)
  const onSubmit = () => {
    setModalShow(true)
  }
  const dataSendHandler = async () => {
    const dataToSend = {
      email: profileData.email,
      class: profileData.class,
      alternateNumber: profileData.alternateNumber,
      centerName: 'Others',
    }
    const randomId = localStorage.getItem('randomId') || ''
    const res = await updateUserProfile(dataToSend, randomId)
    //console.log(res)
    if (res) {
      router.push('/nomination-form')
    }
  }
  const backHandler = () => {
    setModalShow(false)
  }

  const name = useMemo(() => {
    return profileData?.firstName || '' + profileData?.lastName
  }, [profileData?.firstName, profileData?.lastName])

  return (
    <>
      <Header title="Step 1: Profile Details" onSubmit={onSubmit} />
      <div className=" left-0 h-[calc(100vh-80px)] bg-[#f8f8f8] z-19 sm:flex">
        <Sidebar name={name} phone={profileData?.primaryNumber} />
        <Content
          name={name}
          profileData={profileData}
          setProfileData={setProfileData}
        />
        {modalShow == true ? (
          <div className="opacity-25 fixed inset-0 z-40 bg-[#414347] "></div>
        ) : (
          ''
        )}
        {modalShow === true ? (
          <div className="absolute bg-[#FFFFFF] w-[480px] h-[218px] rounded-lg top-[30%] left-[35%] z-50 text-center ">
            <div className="flex justify-center flex-col m-4">
              <p className="font-bold text-[20px] ">
                Are you sure you want to submit
              </p>
              <p className="mb-6 font-bold text-[20px]">Profile details</p>
              <p className="text-[16px]">
                Class is not editable once filled and submitted
              </p>
            </div>
            <div className="flex justify-center mt-6 text-[16px] font-[600px]">
              <button
                onClick={backHandler}
                className="w-[208px] h-[48px] border border-[#5A4BDA] rounded text-[#5A4BDA]"
              >
                No
              </button>
              <button
                onClick={dataSendHandler}
                className="w-[208px] h-[48px] border ml-6 bg-[#5A4BDA] text-white rounded"
              >
                Yes
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default ProfileDetails
