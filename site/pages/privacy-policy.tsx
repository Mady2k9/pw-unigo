import Header from '../modules/Header'
import Footer from '../modules/Footer'
import PrivacyPolicy from '../modules/PrivacyPolicy'

const Home = () => {
  return (
    <>
      <Header handleState={undefined} />
      <PrivacyPolicy />
      <Footer />
    </>
  )
}

export default Home
