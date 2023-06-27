import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Faq, NominationSteps } from 'modules'

const Home = () => {
  return (
    <>
      <Header variant="MARVELSHeader" />
      <NominationSteps data={undefined} />
      <Faq data={undefined} />
      <Footer variant={'MARVELSFooter'} />
    </>
  )
}

export default Home
