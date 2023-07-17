import NominationForm from '@modules/Screens/Onboarding/NominationForm'
import AuthLayout from '@modules/AuthLayout'
import { AUTH_PROPS } from '@modules/AuthLayout/constant'

const profileDetails = () => <AuthLayout {...AUTH_PROPS}> <NominationForm /></AuthLayout>

export default profileDetails
