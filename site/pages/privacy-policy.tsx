import Header from '@modules/Header'
import Footer from '@modules/Footer'
import PrivacyPolicy from '../modules/PrivacyPolicy'
import Faq from '@modules/Faq'

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
    <>
      <Header handleState={undefined} />
      <PrivacyPolicy />
      <Faq
        items={items}
        heading="You have questions. We have answers!"
        subheading="Check out the most commonly asked questions and their answers."
      />
      <Footer />
    </>
  )
}

export default Home
