import Header from '@modules/screens/Onboarding/components/Header'
import DocumentsSection from '@modules/screens/Onboarding/UploadDocuments/DocumentsSection'
import { useEffect, useMemo, useState } from 'react'
import Layout from '../Layout'

const UploadDocumentsScreen = () => {
  const [profileData, setProfileData] = useState<any>({
    email: '',
    class: '',
    alternateNumber: '',
  })

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (typeof user === 'string') {
      setProfileData(JSON.parse(user))
    }
  }, [])

  const name = useMemo(() => {
    return profileData?.firstName || '' + profileData?.lastName
  }, [profileData?.firstName, profileData?.lastName])

  const onSubmit = () => {
    /**
     * MAKE DRAFT API TO SAVE DATA
     */
  }

  return (
    <Layout
      header={<Header title="Step 2: Nominate Now" onSubmit={onSubmit} />}
    >
      <DocumentsSection />
    </Layout>
  )
}

export default UploadDocumentsScreen
