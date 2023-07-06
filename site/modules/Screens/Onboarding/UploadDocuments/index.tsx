import { Header } from '@modules/screens/Onboarding/components'
import DocumentsSection from '@modules/screens/Onboarding/UploadDocuments/DocumentsSection'
import Layout from '../Layout'
import { useState } from 'react'
import { postFormData } from '@modules/auth/lib'
import { toast } from 'react-hot-toast'

const UploadDocumentsScreen = () => {
  const [studentDocsInfo, setStudentDocsInfo] = useState<any>({})
  const [nominationDocsInfo, setNominationDocsInfo] = useState<any>([])

  console.log({
    studentDocsInfo,
    nominationDocsInfo,
  })

  const onSubmit = async () => {
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
      header={<Header title="Step 3: Upload Document" onSubmit={onSubmit} />}
    >
      <DocumentsSection
        onNominationDocumentUpload={onNominationDocumentUpload}
        onStudentDocUpload={onStudentDocUpload}
      />
    </Layout>
  )
}

export default UploadDocumentsScreen
