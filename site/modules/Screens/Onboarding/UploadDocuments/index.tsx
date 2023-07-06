import { Header } from '@modules/screens/Onboarding/components'
import DocumentsSection from '@modules/screens/Onboarding/UploadDocuments/DocumentsSection'
import Layout from '../Layout'

const UploadDocumentsScreen = () => {
  const onSubmit = () => {
    /**
     * MAKE DRAFT API TO SAVE DATA
     */
  }

  return (
    <Layout
      header={<Header title="Step 3: Upload Document" onSubmit={onSubmit} />}
    >
      <DocumentsSection />
    </Layout>
  )
}

export default UploadDocumentsScreen
