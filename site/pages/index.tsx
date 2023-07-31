import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Loader, Typography } from '@components/ui'

import About from '@modules/components/About'
import { Features } from '@modules/components/Features'
import Hero from '@modules/components/Hero'
import School from '@modules/components/School/School'
import Why from '@modules/components/Why'
import TopUniversity  from '../modules/TopUniversity'
import GlobalEducation from '../modules/GlobalEducation'
import  WhyUnigoSection  from '../modules/WhyUnigoSection'
import  CountryBanner from '../modules/CountryBanner'

const Home = () => {
  return (
    <>
  <div>
     
      <TopUniversity />
      <GlobalEducation />
       <WhyUnigoSection />
      
  </div>

{/* <div>
  <CountryBanner />
</div> */}

</>
  )
}

export default Home
