import Header from '@components/common/Header/Header'
import RegisterNow from '../modules/auth/components/RegisterView'
const items = [{ name: 'Register Now', url: '/' }]

const Register = () => {
  return (
    <>
      <Header variant="MARVELSRegisterHeader" />
      <RegisterNow onOTPGet={undefined} onCallRegister={undefined} />
    </>
  )
}

export default Register
