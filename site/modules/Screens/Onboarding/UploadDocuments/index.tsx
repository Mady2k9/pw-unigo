import { Header } from '@modules/Screens/Onboarding/Components'
import DocumentsSection from '@modules/Screens/Onboarding/UploadDocuments/DocumentsSection'
import Layout from '../Layout'
import { useEffect, useState } from 'react'
import { postFormData } from '@modules/auth/lib'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useGetDraftData } from '@lib/hooks/marvel/useGetDraftData'
import { useMarvelContext } from '@modules/MarvelContext'

const UploadDocumentsScreen = () => {
  const [studentDocsInfo, setStudentDocsInfo] = useState<any>({})
  const [nominationDocsInfo, setNominationDocsInfo] = useState<any>([])
  const { draftData } = useGetDraftData()
  const { completedStepTill, updateCompletedSteps } = useMarvelContext()

  useEffect(() => {
      const nominationDocsInfo= draftData?.pwMarvelData?.nominationDocsInfo
      const uploadDocsInfo = draftData?.pwMarvelData?.uploadDocsInfo
      const studentDocsInfo = draftData?.pwMarvelData?.studentDocsInfo
      const step = uploadDocsInfo ? 3 : nominationDocsInfo ? 2 : 1
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
    const updatedDocInfo = nominationDocsInfo?.map((el: any) => {
      if (
        (el?.exam === data?.exam) && (el?.year == data?.year) && el?.criteria === data?.criteria
      ) {
        el.achivementId = data?.achivementId
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

    const checkForNominationDocs = draftData?.nominationDocsInfo?.every((el: any) => el?.achivementId)
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
    </Layout>
  )
}

export default UploadDocumentsScreen
