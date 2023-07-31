import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Loader, Typography } from '@components/ui'

import About from '@modules/components/About'
import { Features } from '@modules/components/Features'
import Hero from '@modules/components/Hero'
import School from '@modules/components/School/School'
import Why from '@modules/components/Why'
import TopUniversity  from './topUniversity'
import GlobalEducation from './globalEducation'
import  WhyUnigoSection  from './whyUnigoSection'
import  CountryBanner from './countryBanner'

const Home = () => {
  return (
    <>
  {/* <div>
     
      <TopUniversity />
      <GlobalEducation />
       <WhyUnigoSection />
  </div> */}

<div>
  <CountryBanner />
</div>

</>
  )
}

export default Home
