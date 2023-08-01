import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import CountryBanner from '../modules/CountryBanner'
import MiddleNav from '../modules/MiddleNav'
import ContentCountry from '../modules/ContentCountry'
import Faq from 'modules/Faq'

const Home = () => {
  return (
    <>
      <Header variant="SIP" />
      <CountryBanner />
      <MiddleNav />
      <ContentCountry />
      <Faq data={undefined} />
      <Footer variant="SIP" />
    </>
  )
}

export default Home
