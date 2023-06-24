import Header from '@components/common/Header/Header'
import { Loader, Typography } from '@components/ui'
import RegisterNow from '../modules/RegisterNow'
import RegisterNowo from '../modules/auth/components/RegisterView'
const items = [{ name: 'Register Now', url: '/' }]

const Home = () => {
  return (
    <>
      <Header variant="MARVELSRegisterHeader" />
      <RegisterNow data={undefined} />
      <RegisterNowo onOTPGet={undefined} onCallRegister={undefined} />
    </>
  )
}

export default Home
