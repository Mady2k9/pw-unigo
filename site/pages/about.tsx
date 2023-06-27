import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import { Loader, Typography } from '@components/ui'
import Breadcrumb from '../modules/Breadcrumb'
import Achiever from '../modules/Achiever'
import Recognise from '../modules/Recognise'
const items = [{ name: 'About Us', url: '/' }]

const About = () => {
  return (
    <>
      <Header variant="MARVELSHeader" />
      <Breadcrumb items={items} title={'About us'} homeLink={''} />
      <Achiever data={undefined} />
      <Recognise data={undefined} />
      <Footer variant={'MARVELSFooter'} />
    </>
  )
}

export default About
