import { Header } from '@modules/Screens/Onboarding/Components'
import DocumentsSection from '@modules/Screens/Onboarding/UploadDocuments/DocumentsSection'
import Layout from '../Layout'
import { useState } from 'react'
import { postFormData } from '@modules/auth/lib'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { Dialog } from '@headlessui/react'
import { Button } from '@components/ui'

const UploadDocumentsScreen = () => {
  const [studentDocsInfo, setStudentDocsInfo] = useState<any>({})
  const [nominationDocsInfo, setNominationDocsInfo] = useState<any>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const successRedirectModal = () => {
    router.push('/rewards')
  }

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
    console.log('submitting the form')
    const randomId = localStorage.getItem('randomId') || ''
    const dataToSend = {
      studentDocsInfo,
      nominationDocsInfo,
    }

    postFormData(dataToSend, randomId).then((res: any) => {
      console.log(res)
      if (res) {
        push('/rewards')
      }
    })
  }

  const onNominationDocumentUpload = (data: any) => {
    setNominationDocsInfo([...nominationDocsInfo, data])
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
