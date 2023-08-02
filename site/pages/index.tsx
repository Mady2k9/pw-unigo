import Header from '../modules/Header'
import TopUniversity from '../modules/TopUniversity'
import GlobalEducation from '../modules/GlobalEducation'
import WhyUnigoSection from '../modules/WhyUnigoSection'
import FourthComp from '../modules/TalkToCounsller/talkToCounsller'
import FithComp from '../modules/PopularCountries/popularCountries'
import SixthComp from '../modules/LovedByStudents/lovedByStudents'
import Footer from '../modules/Footer'
import Faq from '../modules/Faq'

const Home = () => {
  return (
    <>
      <Header handleState={undefined} />
      <TopUniversity />
      <WhyUnigoSection />
      <GlobalEducation />
      <FourthComp />
      <FithComp />
      <SixthComp />
      <Faq data={'hello'} />
      <Footer />
    </>
  )
}

export default Home
