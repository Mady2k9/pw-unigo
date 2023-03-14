import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Loader, Typography } from '@components/ui'

import About from '@modules/components/About'
import { Features } from '@modules/components/Features'
import Hero from '@modules/components/Hero'
import School from '@modules/components/School/School'
import Why from '@modules/components/Why'

const Home = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="mb-3 sticky top-0 bg-white z-50">
        <Header variant="SIP" />
      </div>
      <Hero />
      <div className="bg-white">
        <About />
      </div>
      <School />
      <Features />
      <Why />
      <Footer variant="LIVE" />
    </div>
  )
}

export default Home
