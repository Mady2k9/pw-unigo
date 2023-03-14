import { StudentImage } from '@assets/images'
import {
  HeroImage,
  HeroSmall1,
  cardsImage,
  heroSmall2,
} from '@assets/images/sip'
import { Card, Typography } from '@components/ui'

const GFOROM =
  'https://docs.google.com/forms/d/13HRv7VcRsJ42NtsgQbaw8Vc-0DXCYIvz5xaxTNDQwJs/edit?ts=640b18ed'

export default function Hero() {
  return (
    <div className="md:pt-[30px] md:pb-[100px] md:px-3 px-4  bg-[#f8f8f8] pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="">
          <span className="font-bold text-[16px] md:text-2xl">
            SCHOOL INTEGRATED PROGRAMME (SIP)
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-5 lg:left-20 mt-5 ">
          <div className="hidden md:block">
            <img
              className="object-contain"
              src={HeroImage.src}
              alt="Hero Image"
            />
          </div>
          <div className="block md:hidden">
            <img
              className="object-contain"
              src={HeroSmall1.src}
              alt="Hero Image"
            />
          </div>

          <div className="hidden md:block">
            <img
              onClick={() => window.open(GFOROM, '_blank')}
              src={cardsImage.src}
              alt="Cards Image"
              className="cursor-pointer object-contain"
            />
          </div>
          <div className="block md:hidden mt-3">
            <img
              onClick={() => window.open(GFOROM, '_self')}
              src={heroSmall2.src}
              alt="Cards Image"
              className="cursor-pointer object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// {/* <div className="items-start">
//         <Typography weight={700} variant="heading3">
//           <span className=" left-20 text-[#1B2124;] mt-4">
//             SCHOOL INTEGRATED PROGRAMME (SIP)
//           </span>
//         </Typography>
//       </div>

//       <div className=" max-w-4xl mt-9 bg-slate-500">
//         <div className=" row-span-4 text-[#827775] absolute max-w-lg ml-7">
//           <Typography weight={600} variant="heading1">
//             Take your school to
//             <span className="text-[#1B2124]"> Next Level</span> presenting
//             flagship{' '}
//             <span className="text-[#1B2124]">School Integrated Program</span>
//           </Typography>
//         {/* </div> */}
//       </div> */}
