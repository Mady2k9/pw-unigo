import Header from '@components/common/Header/Header'
import { Register } from '@modules/auth/components'
const items = [{ name: 'Register Now', url: '/' }]

const UserRegister = () => {
  return (
    <>
      <Header variant="MARVELSRegisterHeader" />
      <Register />
    </>
  )
}

export default UserRegister
