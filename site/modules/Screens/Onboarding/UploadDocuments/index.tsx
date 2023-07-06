import { Header } from '@modules/Screens/Onboarding/Components'
import DocumentsSection from '@modules/Screens/Onboarding/UploadDocuments/DocumentsSection'
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
