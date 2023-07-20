import AuthLayout from '@modules/AuthLayout'
import { AUTH_PROPS } from '@modules/AuthLayout/constant'
import UploadDocumentsScreen from '@modules/Screens/Onboarding/UploadDocuments'

const UploadDocuments = () => <AuthLayout {...AUTH_PROPS}><UploadDocumentsScreen /></AuthLayout>

export default UploadDocuments
