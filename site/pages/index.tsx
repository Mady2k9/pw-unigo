import Header from '../modules/Header'
import { Loader, Typography } from '@components/ui'
import Phn from '../assets/images/phn_icon.svg'
import About from '@modules/components/About'
import { Features } from '@modules/components/Features'
import Hero from '@modules/components/Hero'
import School from '@modules/components/School/School'
import Why from '@modules/components/Why'
import TopUniversity from '../modules/TopUniversity'
import GlobalEducation from '../modules/GlobalEducation'
import WhyUnigoSection from '../modules/WhyUnigoSection'
import CountryBanner from '../modules/CountryBanner'
import TalkToCounsller from '../modules/TalkToCounsller/talkToCounsller'
import FithComp from '../modules/PopularCountries/popularCountries'
import { useState } from 'react'
import Close from '../assets/images/Close.svg'
import Image from 'next/image'
import SixthComp from '../modules/LovedByStudents/lovedByStudents'
import Footer from '../modules/Footer'
import PrivacyPolicy from '../modules/PrivacyPolicy'
import Faq from '../modules/Faq'

const Home = () => {
  return (
    <>
      <Header handleState={undefined} />
      <TopUniversity />
      <GlobalEducation />
      <WhyUnigoSection />
      <TalkToCounsller />
      <FithComp />
      <SixthComp />
      <Faq data={'hello'} />
      <Footer />
    </>
  )
}

export default Home
