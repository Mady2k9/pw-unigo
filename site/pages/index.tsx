import Header from '../modules/Header'
import TopUniversity from '../modules/TopUniversity'
import GlobalEducation from '../modules/GlobalEducation'
import WhyUnigoSection from '../modules/WhyUnigoSection'
import CountryBanner from '../modules/CountryBanner'
import TalkToCounsellor from '../modules/TalkToCounsller/talkToCounsller'
import PopularCountries from '../modules/PopularCountries/popularCountries'
import LovedByStudents from '../modules/LovedByStudents/lovedByStudents'
import Footer from '../modules/Footer'
import Faq from '../modules/Faq'
import TalkCounsellorButton from '@modules/TalkCounsellerButton'

const items = [
  {
    title: 'Who is eligible to study MBBS in medical colleges abroad?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'Can I practice in India upon my return?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title:
      'Will I be eligible for job opportunities in Government Hospitals or allied medical institutions in India?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title:
      'What will be the total expenditure, including MBBS fees? Can I obtain a bank loan for my education, and to what extent?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'Where can I do my internship during my MBBS studies?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'What is the procedure for admission to study MBBS abroad?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'What will be the total expenditure, including MBBS fees?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
]

const Home = () => {
  return (
    <div className="relative">
      <Header handleState={undefined} />
      <TopUniversity />
      <WhyUnigoSection />
      <GlobalEducation />
      <TalkToCounsellor />
      <PopularCountries />
      <LovedByStudents />
      <Faq
        items={items}
        heading="You have questions. We have answers!"
        subheading="Check out the most commonly asked questions and their answers."
      />
      <TalkCounsellorButton />
      <Footer />
    </div>
  )
}

export default Home
