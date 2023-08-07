import Header from '@modules/Header'
import TopUniversity from '../modules/TopUniversity'
import GlobalEducation from '@modules/GlobalEducation'
import WhyUnigoSection from '@modules/WhyUnigoSection'
import CountryBanner from '../modules/CountryBanner'
import TalkToCounsllerHome from '@modules/TalkToCounsller/talkToCounsllerHome'
import PopularCountries from '@modules/PopularCountries/popularCountries'
import LovedByStudents from '@modules/LovedByStudents/lovedByStudents'
import Footer from '../modules/Footer'
import Faq from '../modules/Faq'
import TalkCounsellorButton from '@modules/TalkCounsellerButton'
import { useState, useEffect } from 'react'

const items = [
  {
    title: 'Who is eligible to study MBBS in medical colleges abroad?',
    description:
      'Any Indian citizen who has completed 17 years of age and passed 10+2 Level with Physics, Chemistry, and Biology as elective subjects, obtaining a minimum of 50% aggregate in PCB, along with a compulsory subject of English, is eligible to study MBBS in medical colleges abroad.',
  },
  {
    title: 'Can I practice in India upon my return?',
    description:
      'Yes, upon returning to India, you can practice as a medical practitioner. To do so, you must register with the State or Indian Medical Council and clear a screening test. After clearing the test and obtaining registration, you are eligible to practice on par with all other doctors.',
  },
  {
    title:
      'Will I be eligible for job opportunities in Government Hospitals or allied medical institutions in India?',
    description:
      'Yes, after clearing the screening test and obtaining registration with the State or Central Medical Council, you are eligible for government appointments in hospitals and allied medical institutions.',
  },
  {
    title:
      'What will be the total expenditure, including MBBS fees? Can I obtain a bank loan for my education, and to what extent?',
    description:
      'The total expenditure for MBBS studies will vary depending on the university and country. For specific fee structures, please refer to the respective institutions details. You may be eligible for educational loans from banks to support your MBBS education abroad. The loan amount and terms will be subject to the banks policies and your eligibility.',
  },
  {
    title: 'Where can I do my internship during my MBBS studies?',
    description:
      'You can complete your internship at the medical college in the country where you are studying or in your homeland. The hospital where you undertake the internship must be recognized by the respective government, and upon certification, the college will confer the final MBBS degree with the permission of the Medical Council of India (MCI).',
  },
  {
    title: 'What is the procedure for admission to study MBBS abroad?',
    description:
      'The admission procedure involves obtaining eligibility from the Medical Council of India (MCI), applying for admission to the chosen university, processing the visa application with college assistance, and finalizing travel plans after receiving the visa. A confirmed admission order will be issued upon completion of the process.',
  },
  {
    title: 'What will be the total expenditure, including MBBS fees?',
    description:
      'The total expenditure for MBBS studies will vary depending on the university and country. For specific fee structures, please refer to the respective institutions details.',
  },
  {
    title: 'Can I pursue MD/MS (Post Graduation) after completing MBBS abroad?',
    description:
      'Yes, upon successfully completing MBBS, you can pursue MD/MS (Post Graduation) courses at the same university or other institutions abroad.',
  },
  {
    title:
      'Are visa and other documentation assistance provided by the consultancy?',
    description:
      'Yes, the consultancy provides assistance for all the important documents to help students with their application and processing.',
  },
]

const Home = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const current = document.getElementById('TalkToCounsellorID')?.offsetTop
      if (current && window.scrollY > current + 55) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative">
      <Header handleState={undefined} />
      <TopUniversity />
      <WhyUnigoSection />
      <GlobalEducation />
      <TalkToCounsllerHome />
      <PopularCountries />
      <LovedByStudents />
      <Faq
        items={items}
        subheading="Check out the most commonly asked questions and their answers."
      />
      <Footer />
      {scroll && <TalkCounsellorButton />}
    </div>
  )
}

export default Home
