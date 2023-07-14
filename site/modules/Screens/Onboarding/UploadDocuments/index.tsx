import { Header } from '@modules/Screens/Onboarding/Components'
import DocumentsSection from '@modules/Screens/Onboarding/UploadDocuments/DocumentsSection'
import Layout from '../Layout'
import { useState } from 'react'
import { postFormData } from '@modules/auth/lib'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

const UploadDocumentsScreen = () => {
  const [studentDocsInfo, setStudentDocsInfo] = useState<any>({})
  const [nominationDocsInfo, setNominationDocsInfo] = useState<any>([])

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
    </Layout>
  )
}

export default UploadDocumentsScreen
