import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Container, Loader, Typography } from '@components/ui'
import { Banner, Faq, RewardsCard, NominationSteps, WebCheck } from 'modules'
import Layout from '@components/common/Layout'
import Breadcrumb from '@modules/Breadcrumb/breadcrumb'
import Eligibility from '@modules/Eligibility/eligibility'

const items = [{ name: 'Eligibility', url: '/' }]

const Home = () => {
  return (
    <>
      <Header />
      <Breadcrumb items={items} title="Eligibility" homeLink="/" />
      <Eligibility />
      <Footer variant="SIP" />
    </>
  )
}

export default Home
