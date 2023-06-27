import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Banner, Faq, RewardsCard, NominationSteps } from 'modules'

const Home = () => {
  return (
    <>
      <Header variant="MARVELSHeader" />
      <Banner data={undefined} />
      <RewardsCard data={undefined} />
      <NominationSteps data={undefined} />
      <Faq data={undefined} />
      <Footer variant={'MARVELSFooter'} />
    </>
  )
}

export default Home
