import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import CountryBanner from '../modules/CountryBanner'
import MiddleNav from '../modules/MiddleNav'
import ContentCountry from '../modules/ContentCountry'

const Home = () => {
  return (
    <>
      <Header variant="SIP" />
      <CountryBanner />
      <MiddleNav />
      <ContentCountry />
      <Footer variant="SIP" />
    </>
  )
}

export default Home
