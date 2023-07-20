import Footer from '@modules/SiteFooter'
import Header from '@components/common/Header/Header'
import Breadcrumb from '../modules/Breadcrumb'
import PrivatePolicy from '../modules/PrivatePolicy'
const items = [{ name: 'Private Policy', url: '/' }]

const PrivacyPolicy = () => {
  return (
    <>
      <Header variant="MARVELSHeader" />
      <Breadcrumb items={items} title={'Private & Policy'} homeLink={''} />
      <PrivatePolicy data={undefined} />
      <Footer />
    </>
  )
}

export default PrivacyPolicy
