import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Loader, Typography } from '@components/ui'
import { Banner, Faq, RewardsCard, NominationSteps } from 'modules'
import Layout from '@components/common/Layout'
import TermsCon from './terms-and-conditions'


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
