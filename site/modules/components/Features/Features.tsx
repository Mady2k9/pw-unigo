import {
  doubtImage,
  liveImage,
  structureImage,
  testImage,
} from '@assets/images/sip'
import FeatureCard from './FeatureCard'

const data = [
  {
    title: 'LIVE CLASSES',
    description:
      'Online classes during the regular school hours will provide the necessary time for self study. The classes will be streamed live from Physics Wallah national studios through an interactive digital board.',
    image: liveImage,
  },
  {
    title: 'DOUBT SOLVING',
    description:
      'One-on-one doubt-solving interaction program for students who can interact with the mentors. Not only the doubts, but they can also ask about other problems.',
    image: doubtImage,
  },
  {
    title: 'STRUCTURED & TARGETED STUDY MATERIAL',
    description:
      'Explore the art of concept with our structured material with intelligent question tackling and problem solving skills.',
    image: structureImage,
  },
  {
    title: 'TESTS ON REGULAR BASIS FOR PROGRESS TRACKING',
    description:
      'It is a set of test papers designed to make the student comfortable with all possible varieties of questions along with the various ways in which the same question can be put in order to make the student sweat in the exam hall. The problems involve multidimensional thinking at a time.',
    image: testImage,
  },
]

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-6 lg:pt-14" id="features">
      <div className="flex items-center justify-center mb-4 md:mb-10">
        <span className="text-[16px] md:text-2xl font-bold mx-auto text-center">
          Features of PW SIP
        </span>
      </div>
      <div className="grid grid-cols-12 gap-5  ">
        {data.map((item, idx) => (
          <div key={idx} className="col-span-12 md:col-span-6 ">
            <FeatureCard feature={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
