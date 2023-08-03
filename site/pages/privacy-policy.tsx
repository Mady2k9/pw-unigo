import Header from '../modules/Header'
import Footer from '../modules/Footer'
import PrivacyPolicy from '../modules/PrivacyPolicy'
import Faq from '@modules/Faq'

const Home = () => {
  return (
    <>
      <Header handleState={undefined} />
      <PrivacyPolicy />
      <Faq items={[]} heading={''} subheading={''} />
      <Footer />
    </>
  )
}

export default Home
