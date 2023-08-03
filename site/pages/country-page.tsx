import CountryBanner from '../modules/CountryBanner'
import MiddleNav from '../modules/MiddleNav'
import ContentCountry from '../modules/ContentCountry'
import Faq from 'modules/Faq'
import Header from '@modules/Header'
import Footer from '@modules/Footer'

const items = [
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
]

const CountryPage = () => {
  return (
    <>
      <Header handleState={undefined} />
      <CountryBanner bannerItems={[]} />
      <MiddleNav items={[]} />
      <ContentCountry contentItems={[]} />
      <Faq
        items={items}
        heading="You have questions. We have answers!"
        subheading="Check out the most commonly asked questions and their answers."
      />
      <Footer />
    </>
  )
}

export default CountryPage
