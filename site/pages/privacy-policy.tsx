import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Loader, Typography } from '@components/ui'
import Breadcrumb from '../modules/Breadcrumb'
import PrivatePolicy from '../modules/PrivatePolicy'
const items = [{ name: 'Private Policy', url: '/' }]

const PrivacyPolicy = () => {
  return (
    <>
      <Header variant="MARVELSHeader" />
      <Breadcrumb items={items} title={'Private & Policy'} homeLink={''} />
      <PrivatePolicy data={undefined} />
      <Footer variant={'MARVELSFooter'} />
    </>
  )
}

export default PrivacyPolicy
