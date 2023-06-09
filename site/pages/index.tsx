import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Loader, Typography } from '@components/ui'

const Home = () => {
  return (
    <>
    <Header />
    <div className="flex items-center justify-center">
      <h1>PW MARVEL</h1>
    </div>
    <Footer variant={'SIP'} />
    </>
  )
}

export default Home
