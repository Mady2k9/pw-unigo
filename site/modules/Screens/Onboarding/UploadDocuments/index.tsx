import { Header } from '@modules/Screens/Onboarding/Components'
import DocumentsSection from '@modules/Screens/Onboarding/UploadDocuments/DocumentsSection'
import Layout from '../Layout'
import { useEffect, useState } from 'react'
import { postFormData } from '@modules/auth/lib'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useMarvelContext } from '@modules/MarvelContext'
import { Dialog } from '@headlessui/react'
import { Button } from '@components/ui'
import { useGetDraftData } from '@lib/hooks/marvel/useGetDraftData'

const UploadDocumentsScreen = () => {
  const [studentDocsInfo, setStudentDocsInfo] = useState<any>({})
  const [nominationDocsInfo, setNominationDocsInfo] = useState<any>([])
  const { draftData } = useGetDraftData()
  const { completedStepTill, updateCompletedSteps } = useMarvelContext()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const successRedirectModal = () => {
    router.push('/rewards')
  }

  useEffect(() => {
      const nominationDocsInfo= draftData?.pwMarvelData?.nominationDocsInfo
      const studentDocsInfo = draftData?.pwMarvelData?.studentDocsInfo
      const step = studentDocsInfo ? 3 : nominationDocsInfo ? 2 : 1
      updateCompletedSteps(Math.max(completedStepTill, step))

      if (studentDocsInfo) {
        setStudentDocsInfo(studentDocsInfo)
      } 

      if (nominationDocsInfo) {
        setNominationDocsInfo(nominationDocsInfo)
      }
  }, [draftData, completedStepTill, updateCompletedSteps])

  const { push } = useRouter()

  console.log({
    studentDocsInfo,
    nominationDocsInfo,
  })

  /* const onSubmit = async () => {
    const randomId = localStorage.getItem('randomId') || ''
    const dataToSend = {
      studentDocsInfo,
      nominationDocsInfo,
    }
    const { data } = await postFormData(dataToSend, randomId)
    if (data.success) {
      toast.success('Data Submitted Succesfully', {
        position: 'top-right',
        duration: 100,
      })
    }
  } */

  const onSubmit = () => {
    const randomId = localStorage.getItem('randomId') || ''
    const dataToSend = {
      studentDocsInfo: {
        passportPhoto: studentDocsInfo?.passportPhoto?._id || studentDocsInfo?.passportPhoto,
        reportCard: studentDocsInfo?.reportCard?._id || studentDocsInfo?.reportCard,
        adhaarInfo: {
          adhaarBackPage: studentDocsInfo?.adhaarInfo?.adhaarBackPage?._id ||  studentDocsInfo?.adhaarInfo?.adhaarBackPage,
          adhaarFrontPage: studentDocsInfo?.adhaarInfo?.adhaarFrontPage?._id ||  studentDocsInfo?.adhaarInfo?.adhaarFrontPage,

        }
      },
      nominationDocsInfo: nominationDocsInfo?.map((el: any) => {
        if(el?.achievementId?._id) {
          el.achievementId = el?.achievementId?._id
        }
        return el
      })
    }

    postFormData(dataToSend, randomId).then((res: any) => {
      if (res) {
        push('/rewards')
      }
    })
  }

  const onNominationDocumentUpload = (data: any) => {
    const updatedDocInfo = nominationDocsInfo?.map((el: any) => {
      if (
        (el?.exam === data?.exam) && (el?.year == data?.year) && el?.criteria === data?.criteria
      ) {
        el.achievementId = data?.achievementId
      }

      return el
    })
    setNominationDocsInfo([...updatedDocInfo])
  }

  const onStudentDocUpload = (key: string, id: string) => {
    const objectKeys = key.split('.')
    if (objectKeys.length === 1) {
      setStudentDocsInfo({ ...studentDocsInfo, [key]: id })
    } else {
      setStudentDocsInfo({
        ...studentDocsInfo,
        adhaarInfo: { ...studentDocsInfo.adhaarInfo, [objectKeys[1]]: id },
      })
    }
  }
  const shouldSubmitDisable = () => {
    const checkStudentDoc = (studentDocsInfo?.adhaarInfo?.adhaarFrontPage)
                            && (studentDocsInfo?.adhaarInfo?.adhaarBackPage)
                            && (studentDocsInfo?.passportPhoto)
                            && (studentDocsInfo?.reportCard)

    const checkForNominationDocs = nominationDocsInfo?.every((el: any) => el?.achievementId)
    return !(checkStudentDoc && checkForNominationDocs)
  }

  return (
    <Layout
      header={
        <Header
          title="Step 3: Upload Document"
          handleSubmitForm={onSubmit}
          handleEditForm={function (navBarText: string): void {
            throw new Error('Function not implemented.')
          }}
          profileData={undefined}
          isEditEnabled={false}
          navBarText={''}
          shouldDisabled={shouldSubmitDisable()}
          hideSubmitButton={draftData?.isRegistrationEnded}
        />
      }
    >
      <DocumentsSection
        onNominationDocumentUpload={onNominationDocumentUpload}
        onStudentDocUpload={onStudentDocUpload}
      />
      <Dialog
        className={'relative z-[999999]'}
        open={isModalOpen}
        onClose={toggleModal}
      >
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
        <div className="fixed inset-0  p-4  mt-[7%]">
          <Dialog.Panel className="mx-auto w-full max-w-[480px] rounded-xl shadow-xl bg-white ring-1 transition-all p-5  relative">
            <img
              src="/success.gif"
              alt="success"
              className="w-[174px] mx-auto"
            />
            <div className="text-center font-semibold text-[18px] mx-1">
              Form Saved
            </div>
            <div className="text-center text-[16px] mt-4">
              You can edit the form till
              <span className="font-semibold text-[18px] mx-1">
                25th June, 2023
              </span>
              <br />
              After this form will be auto-submitted
            </div>
            <div className="flex justify-center mt-6 items-center gap-8">
              <Button
                variant="secondary"
                onClick={toggleModal}
                className="w-[100px] bg-red-600"
              >
                Edit form
              </Button>
              <Button onClick={successRedirectModal} className="w-[100px]">
                Done
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Layout>
  )
}

export default UploadDocumentsScreen
