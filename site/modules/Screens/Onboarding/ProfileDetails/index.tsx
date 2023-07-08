import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@modules/Screens/Onboarding/Components/Header'
import ProfileForm from '@modules/Screens/Onboarding/ProfileDetails/ProfileForm'
import { updateUserProfile } from '@modules/auth/lib'
import Layout from '../Layout'
import { Dialog } from '@headlessui/react'
import { Cross } from '@components/icons'

const ProfileDetails = () => {
  // TODO REMOVE any for the Profile type
  // HOOKS
  const [profileData, setProfileData] = useState<any>({
    email: '',
    class: '',
    alternateNumber: '',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (typeof user === 'string') {
      setProfileData(JSON.parse(user))
    }
  }, [])

  const name = useMemo(() => {
    return profileData?.firstName || '' + profileData?.lastName
  }, [profileData?.firstName, profileData?.lastName])

  // FUNCTIONS
  const onSubmit = async () => {
    const dataToSend = {
      email: profileData.email,
      class: profileData.class,
      alternateNumber: profileData.alternateNumber,
      //centerName: 'Others',
    }
    const randomId = localStorage.getItem('randomId') || ''
    const res = await updateUserProfile(dataToSend, randomId)
    if (res) {
      router.push('/nomination-form')
    }
  }

  const enableEditForm = () => {
    setEditForm(true)
  }

  const toggleModal = () => {
    if (profileData.profileId.class) {
      onSubmit()
    } else {
      setIsModalOpen(!isModalOpen)
    }
  }

  return (
    <Layout
      header={
        <Header
          title="Step 1: Profile Details"
          onSubmit={toggleModal}
          profileData={profileData}
          editForm={enableEditForm}
        />
      }
    >
      <ProfileForm
        name={name}
        profileData={profileData}
        setProfileData={setProfileData}
        editForm={editForm}
        registrationDate="12th May[DUMMY_DATA]"
      />
      <Dialog
        className={'relative z-[999999]'}
        open={isModalOpen}
        onClose={toggleModal}
      >
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 ">
          <Dialog.Panel className="mx-auto w-full max-w-md rounded-xl bg-white ring-1 transition-all p-5 relative">
            <div
              className="cursor-pointer absolute top-4 right-4"
              onClick={toggleModal}
            >
              <Cross className="h-6 w-6" />
            </div>
            <div className="text-center m-2">
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
                onClick={toggleModal}
                className="w-[208px] h-[48px] border border-[#5A4BDA] rounded-md text-[#5A4BDA]"
              >
                No
              </button>
              <button
                onClick={onSubmit}
                className="w-[208px] h-[48px] border ml-6 bg-[#5A4BDA] text-white rounded-md"
              >
                Yes
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Layout>
  )
}

export default ProfileDetails
