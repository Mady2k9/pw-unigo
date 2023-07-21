import Footer from '@modules/SiteFooter'
import Header from '@components/common/Header/Header'
import Breadcrumb from '@modules/Breadcrumb/breadcrumb'
import Reward from '@modules/Rewards/rewards'
import { useEffect } from 'react'

const items = [{ name: 'Rewards', url: '/' }]
/* const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // for smoothly scrolling
  })
} */

const Rewards = () => {
  /*  useEffect(scrollToTop, []) */
  return (
    <>
      <Header variant="MARVELSHeader" />
      <Breadcrumb items={items} title="Rewards" homeLink="/" />
      <Reward />
      <Footer />
    </>
  )
}

export default Rewards
