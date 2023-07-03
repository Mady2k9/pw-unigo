import Header from '@components/common/Header/Header'
import { Registration } from '@modules/screens'
const items = [{ name: 'Register Now', url: '/' }]

const UserRegister = () => {
  return (
    <>
      <Header variant="MARVELSRegisterHeader" />
      <Registration />
    </>
  )
}

export default UserRegister
