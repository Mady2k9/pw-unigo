import Header from '../modules/Header'
import Footer from '../modules/Footer'
import PrivacyPolicy from '../modules/PrivacyPolicy'
// import Faq from '@modules/Faq'

const Home = () => {
  // const items = [
  //   {
  //     title: 'How do I Share my Referral Code?',
  //     description:
  //       'Just Click on Refer & Earn on Menu of App, Click on the share button',
  //   },
  //   {
  //     title: 'How do I Share my Referral Code?',
  //     description:
  //       'Just Click on Refer & Earn on Menu of App, Click on the share button',
  //   },
  //   {
  //     title: 'How do I Share my Referral Code?',
  //     description:
  //       'Just Click on Refer & Earn on Menu of App, Click on the share button',
  //   },
  //   {
  //     title: 'How do I Share my Referral Code?',
  //     description:
  //       'Just Click on Refer & Earn on Menu of App, Click on the share button',
  //   },
  // ]

  return (
    <>
      <Header handleState={undefined} />
      <PrivacyPolicy />
      {/* <Faq
        items={items}
        subheading="Check out the most commonly asked questions and their answers."
      /> */}
      <Footer />
    </>
  )
}

export default Home
