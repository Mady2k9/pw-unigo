import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import Breadcrumb from '@modules/Breadcrumb/breadcrumb'
import Reward from '@modules/Rewards/rewards'

const items = [{ name: 'Rewards', url: '/' }]

const Rewards = () => {
  return (
    <>
      <Header variant="MARVELSHeader" />
      <Breadcrumb items={items} title="Rewards" homeLink="/" />
      <Reward />
      <Footer variant={'MARVELSFooter'} />
    </>
  )
}

export default Rewards
