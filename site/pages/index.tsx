import Header from '../modules/Header'
import TopUniversity from '../modules/TopUniversity'
import GlobalEducation from '../modules/GlobalEducation'
import WhyUnigoSection from '../modules/WhyUnigoSection'
import CountryBanner from '../modules/CountryBanner'
import FourthComp from '../modules/TalkToCounsller/talkToCounsller'
import PopularCountries from '../modules/PopularCountries/popularCountries'
import LovedByStudents from '../modules/LovedByStudents/lovedByStudents'
import Footer from '../modules/Footer'
import Faq from '../modules/Faq'
import TalkCounsellorButton from '@modules/TalkCounsellerButton'

const Home = () => {
  return (
    <div className="relative">
      <Header handleState={undefined} />
      <TopUniversity />
      <WhyUnigoSection />
      <GlobalEducation />
      <FourthComp />
      <PopularCountries />
      <LovedByStudents />
      <Faq data={undefined} />
      <TalkCounsellorButton />
      <Footer />
    </div>
  )
}

export default Home
