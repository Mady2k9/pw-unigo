import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@modules/Onboarding/components/Header/header'
import Sidebar from '@modules/Onboarding/components/Sidebar/sidebar'
import Content from '@modules/Onboarding/components/Content/Content'
import { updateUserProfile } from '@modules/auth/lib'

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

  const onSubmit = async () => {
    const dataToSend = {
      email: profileData.email,
      class: profileData.class,
      alternateNumber: profileData.alternateNumber,
      centerName: 'Others',
    }

    const randomId = localStorage.getItem('randomId') || ''
    const res = await updateUserProfile(dataToSend, randomId)
    if (res) {
      router.push('')
    }
  }

  const name = useMemo(() => {
    return profileData?.firstName || '' + profileData?.lastName
  }, [profileData?.firstName, profileData?.lastName])

  return (
    <>
      <Header title="Step 1: Profile Details" onSubmit={onSubmit} />
      <div className="sticky left-0 h-[calc(100vh-80px)] bg-[#f8f8f8] z-19 sm:flex">
        <Sidebar name={name} phone={profileData?.primaryNumber} />
        <Content
          name={name}
          profileData={profileData}
          setProfileData={setProfileData}
        />
      </div>
    </>
  )
}

export default ProfileDetails
