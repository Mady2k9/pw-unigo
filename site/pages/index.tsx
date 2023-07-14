import Footer from '@modules/SiteFooter'
import Header from '@components/common/Header/Header'
import {
  Banner,
  Faq,
  RewardsCard,
  NominationSteps,
  Announcement,
} from 'modules'

const Home = () => {
  return (
    <>
      <Header variant="MARVELSHeader" />
      <Announcement title="Hi sdsfsdfsf" />
      <Banner data={undefined} />
      <RewardsCard data={undefined} />
      <NominationSteps data={undefined} />
      <Faq data={undefined} />
      <Footer />
    </>
  )
}

export default Home
