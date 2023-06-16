import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Loader, Typography } from '@components/ui'
import { Banner, Faq, RewardsCard, NominationSteps, WebCheck } from 'modules'
import Layout from '@components/common/Layout'

const Home = () => {
  return (
    <>
      <Header />
      <WebCheck data={undefined} />
      <NominationSteps data={undefined} />
      <Faq data={undefined} />
      <Footer variant="SIP" />
    </>
  )
}

export default Home
