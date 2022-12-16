import { Layout } from '@components/common'
import { Card, Container, Typography } from '@components/ui'
import Saarthi from '@assets/images/saarthi-icons.svg'
import AboutSaarthi from '@assets/images/saarthi-about.svg'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <Container>
      <Typography variant="heading2" weight={600}>
        About Us:
      </Typography>
      <div className="mt-8">
        <Typography variant="heading4" weight={500}>
          Started as a Youtube Channel by Alakh Pandey Sir in 2014, today PW is
          a family of over 6 million students. PW aims to provide quality
          educational content at an affordable price for JEE/NEET/NDA aspirants.
        </Typography>
      </div>
      <div className={'mt-10 rounded-lg bg-[#f2f8ff] p-6 flex flex-col gap-4'}>
        <Typography variant="heading4" weight={600}>
          How do we use education to assist our beloved students?
        </Typography>
        <Typography variant="heading4" weight={500}>
          Education, no matter where you are, has the power to change everything
          and grow you tremendously & moreover that’s what our founder, Alakh
          Pandey Sir, believes in “education for all children, regardless of
          their socioeconomic status”.
        </Typography>
        <Typography variant="heading4" weight={500}>
          We provide premium education to all by offering a variety of learning
          options like questions, MCQs, mock tests, et Cetra, through our
          batches to meet all of our student’s needs and capabilities.
        </Typography>
      </div>
      <div
        className={
          'mt-10 rounded-lg bg-[#eafffa] p-6 mb-10 flex flex-col gap-4'
        }
      >
        <Typography variant="heading4" weight={600}>
          Know the story behind PW:
        </Typography>
        <Typography variant="heading4" weight={500}>
          Alakh Pandey sir began his journey of teaching in 2014, and since
          2016, he has been teaching online courses, including IIT, JEE mains,
          JEE advance, NEET and NDA to his students on YouTube for free. In the
          beginning, he was so concerned and depressed with the result of low
          insights on his channel but because of his clear intention towards his
          dream of providing free knowledge to the needy, he never gave up and
          uploaded videos daily with the same enthusiasm. Soon after the
          beginning of the digital era students started to follow him and his
          easy tricks on the internet, with asking more of it. Students love the
          easy ways of communicating and solving tough problems.
        </Typography>
        <Typography variant="heading4" weight={500}>
          He proved his conscience in 2020 when institutes were pulling back
          from students amid the pandemic, he launched an app called PW, where
          he started new batches (Named as Lakshya, Arjuna, Prayas, Yakeen,
          Neev, Udaan, Shakti, Shaurya, Accelerate, et Cetra.), which were
          designed with student affordability in mind. The goal was to cover the
          entire course for Science students at the lowest possible cost so that
          they wouldn't have to give up their goals of changing the world due to
          financial constraints.
        </Typography>
        <Typography variant="heading4" weight={500}>
          The batches of PW began with the goal of offering education to the
          needy and diligent while ignoring the majority of the market, which
          was primarily concerned with money.
        </Typography>
        <Typography variant="heading4" weight={500}>
          Students' ascension began when they joined hands with PW to learn
          about the unique strategy of passing these examinations and fell in
          love with the learning method. PW aims to make students succeed in
          their goal with the minimal cost they can afford, said Alakh Pandey,
          the Founder of Physics Wallah.
        </Typography>
      </div>
      <div
        className={
          'mt-10 rounded-lg bg-[#fff9ec] p-6 mb-10 flex flex-col gap-4'
        }
      >
        <Typography variant="heading4" weight={600}>
          The advantages of PW
        </Typography>
        <Typography variant="heading4" weight={500}>
          <b>Batch Lectures & Notes from India’s best teachers:</b> PW students
          learn from the top teachers across the country with comprehensive
          study tips and tricks which clear the fundamental concepts
          permanently.
        </Typography>
        <Typography variant="heading4" weight={500}>
          <b>Specially crafted study material by PW:</b> PW understands every
          student's needs and capabilities very efficiently. The study material
          we craft is also based on their needs and the latest syllabus. It
          makes their journey special.
        </Typography>
        <Typography variant="heading4" weight={500}>
          <b>Practice in-depth learning without limits:</b> When all your doubts
          are clear then tests are more fun than anything else. PW Library
          provides unlimited questions in an interactive quiz format to improve
          your confidence and boost your speed.
        </Typography>
        <Typography variant="heading4" weight={500}>
          <b>One-to-One personalized Guidance:</b> One-to-One personalized
          Guidance:
        </Typography>
        <Typography variant="heading4" weight={500}>
          <b>Comprehensive Study Material:</b> The study material of PW gives an
          outstanding explanation and is available for the students anytime,
          anywhere. That includes books, test series, DPP’s, Et-Cetra, mapped
          with the newest syllabus of boards.
        </Typography>
      </div>
      <Card>
        <Image src={AboutSaarthi} alt="" />
      </Card>
      <div
        className={
          'mt-10 rounded-lg bg-[#faefff] p-6 mb-10 flex flex-col gap-4'
        }
      >
        <Typography variant="heading4" weight={600}>
          PW Saarthi:
        </Typography>

        <div className="flex flex-col-reverse lg:flex-row items-center">
          <Typography variant="heading4" weight={500}>
            PW Saarthi is an exclusive offering of PW, meant for JEE/NEET
            students. Here, you get a Personal Coach for every subject as well
            as Weekly Planner, access to the unique Ask Doubt & Ask Concept
            Engines and more! Like a good friend, PW Saarthi gives the student a
            Complete Handholding Experience, through academic as well as
            non-academic problems, giving them the confidence to ace the exams!
          </Typography>
          <Image src={Saarthi} alt="" />
        </div>
      </div>
      <div
        className={
          'mt-10 rounded-lg bg-[#f2f8ff] p-6 mb-10 flex flex-col gap-4'
        }
      >
        <Typography variant="heading4" weight={600}>
          Know Your Pathshala Better:
        </Typography>
        <Typography variant="heading4" weight={500}>
          Our new step PW Pathshala is an engaging blend of traditional and
          online learning, that is giving students the best e-learning platform
          in this new age. The strategy behind the Pathshala concept is simply
          to keep up with all of the demands of students in this new normal
          where students are bored and teachers are exhausted. There is only 10%
          of the ecosystem of interactive classes in online learning, which is
          significantly behind the habit of students from the beginning of their
          academics and they are forced to adopt the new ways because of
          COVID19,hence Pathshala has been launched to provide students with the
          environment of offline learning with online tempering. Pathshala
          classrooms are designed in such a way to connect both traditional and
          online classes format. These new blended classrooms are a no-limit
          learning formula in which organizations use technology to make sure of
          hearing each other interactively.
        </Typography>
      </div>
    </Container>
  )
}

AboutUs.Layout = Layout
