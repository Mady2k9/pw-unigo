import {
  Card1Image,
  card2Image,
  card3Image,
  card4Image,
  card5Image,
  card6Image,
} from '@assets/images/sip'
import { Typography } from '@components/ui'

const images = [
  Card1Image,
  card2Image,
  card3Image,
  card4Image,
  card5Image,
  card6Image,
]

export default function Why() {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 py-14" id="sip">
      <div className="flex items-center justify-center mb-4 md:mb-10">
        <span className="text-[#1B2124] md:text-2xl text-[16px] font-bold ">
          Why SIP?
        </span>
      </div>
      <div className="grid grid-cols-12 gap-5 ">
        {images?.map((item, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img src={item.src} alt="" />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-8 bg-white py-5">
        <span className="text-lg md:text-2xl font-bold text-center">
          Most Loved ❤️, Affordable, and Quality Learning Programme
        </span>
      </div>
    </div>
  )
}
