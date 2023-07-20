import AuthLayout from '@modules/AuthLayout'
import { AUTH_PROPS } from '@modules/AuthLayout/constant'
import ProfileView from '@modules/Screens/Onboarding/ProfileDetails'

const ProfileDetails = () => <AuthLayout {...AUTH_PROPS}><ProfileView /></AuthLayout>

export default ProfileDetails
