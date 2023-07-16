import Footer from '@modules/SiteFooter'
import Header from '@components/common/Header/Header'
import { Banner, Faq, RewardsCard, NominationSteps } from 'modules'
import { useEffect } from 'react'
import { useUI } from '@components/ui'
import { useRouter } from 'next/router'

const Home = () => {
  const { user } = useUI()
  const router = useRouter()
  useEffect(() => {
    if (user) {
        router.replace('/profile-details')
    }
}, [user])
  return (
    <>
      <Header variant="MARVELSHeader" />
      <Banner data={undefined} />
      <RewardsCard data={undefined} />
      <NominationSteps data={undefined} />
      <Faq data={undefined} />
      <Footer />
    </>
  )
}

export default Home
