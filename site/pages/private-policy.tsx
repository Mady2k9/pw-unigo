import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Loader, Typography } from '@components/ui'
import Breadcrumb from '../modules/Breadcrumb'
import PrivatePolicy from '../modules/PrivatePolicy'
const items = [{ name: 'Private Policy', url: '/' }]

const Home = () => {
  return (
    <>
      <Header />
      <Breadcrumb items={items} title={'Private & Policy'} homeLink={''} />
      <PrivatePolicy data={undefined} />
      <Footer variant={'SIP'} />
    </>
  )
}

export default Home
