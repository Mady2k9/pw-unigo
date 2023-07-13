import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@modules/Screens/Onboarding/Components/Header'
import ProfileForm from '@modules/Screens/Onboarding/ProfileDetails/ProfileForm'
import { getAlternateMobile, updateUserProfile } from '@modules/auth/lib'
import Layout from '../Layout'
import { Dialog } from '@headlessui/react'
import { Cross } from '@components/icons'
import { localStorageHelper } from '@utils/helps'
import { StudentDataProps } from './types'

const ProfileDetails = () => {
  const [profileData, setProfileData] = useState<StudentDataProps>({
    email: '',
    class: '',
    alternateNumber: '',
    name: '',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [navBarText, setNavBarText] = useState('Submit')
  const router = useRouter()

  // to fetch and update student data
  useEffect(() => {
    const studentData = localStorageHelper.getItem('user')
    async function fetchAlternateNumber() {
      const randomId = localStorage.getItem('randomId') || ''
      const { data } = await getAlternateMobile(randomId)
      const studentProfile = {
        email: studentData?.email,
        class: studentData?.profileId?.class,
        name: studentData.firstName + ' ' + studentData.lastName,
        alternateNumber: data.data.alternateNumber,
      }
      setProfileData({
        ...profileData,
        ...studentProfile,
      })
    }
    fetchAlternateNumber()
    if (studentData?.profileId?.class) {
      setNavBarText('Edit')
    }
  }, [])

  // onSubmit Function for first time student onboarding
  const onSubmit = async () => {
    const dataToSend = {
      email: profileData.email,
      class: '', //profileData.class,
      alternateNumber: profileData.alternateNumber,
    }
    const randomId = localStorage.getItem('randomId') ?? ''
    const res = await updateUserProfile(dataToSend, randomId)
    if (res) {
      router.push('/nomination-form')
    }
  }

  //to toggle state of is edit form and navbar text
  const enableEditForm = (navBarText: string) => {
    setIsEdit(!isEdit)
    if (navBarText === 'Edit') {
      setNavBarText('Submit')
    } else {
      setNavBarText('Edit')
    }
  }

  //to toggle modal for agreement accept or reject
  const toggleModal = () => {
    if (profileData.class) {
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
          profileData={profileData}
          handleEditForm={enableEditForm}
          handleSubmitForm={toggleModal}
          isEditEnabled={isEdit}
          navBarText={navBarText}
        />
      }
    >
      <ProfileForm
        studentData={profileData}
        setProfileData={setProfileData}
        isEditEnabled={isEdit}
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
