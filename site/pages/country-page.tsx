import CountryBanner from '../modules/CountryBanner'
import MiddleNav from '../modules/MiddleNav'
import ContentCountry from '../modules/ContentCountry'
import Faq from 'modules/Faq'
import Header from '@modules/Header'
import Footer from '@modules/Footer'

const CountryPage = () => {
  return (
    <>
      <Header handleState={undefined} />
      <CountryBanner />
      <MiddleNav />
      <ContentCountry />
      <Faq data={undefined} />
      <Footer />
    </>
  )
}

export default CountryPage
