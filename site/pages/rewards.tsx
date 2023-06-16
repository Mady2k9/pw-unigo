import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Container, Loader, Typography } from '@components/ui'
import { Banner, Faq, RewardsCard, NominationSteps, WebCheck } from 'modules'
import Layout from '@components/common/Layout'
import Breadcrumb from '@modules/Breadcrumb/breadcrumb'
import Rewards from '@modules/Rewards/rewards'

const items = [{ name: 'Rewards', url: '/' }]

const Home = () => {
  return (
    <>
      <Header variant="MARVELSHeader" />
      <Breadcrumb items={items} title="Rewards" homeLink="/" />
      <Rewards />
      <Footer variant={'MARVELSFooter'} />
    </>
  )
}

export default Home
