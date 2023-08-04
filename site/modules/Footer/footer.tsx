import Pwlogo from '../../assets/images/image 1.png'
import Link from 'next/link'
import Image from 'next/image'
import Fb from '../../assets/images/fb.svg'
import Insta from '../../assets/images/inta.svg'
import YT from '../../assets/images/utube.svg'
import Linnkedin from '../../assets/images/linkedin.svg'
import TW from '../../assets/images/twitter.svg'
import Tele from '../../assets/images/telegram.svg'

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#F8F8F8] py-[32px] mt-[40px] xl:px-0 px-[10px]">
        <div className="lg:flex mx-auto max-w-6xl xl:px-0 px-3 justify-between">
          <div className="lg:w-7/12 w-full">
            <div className="mb-[20px] md:mb-[24px] md:w-[214px] md:h-[60px]">
              <Image src={Pwlogo} alt="logo" />
            </div>
            {/* <div className="text-[12px] md:text-[14px] mb-[20px] md:mb-[24px]">
              We understand that every student has different needs and
              capabilities, which is why we create such a wonderful and unique
              curriculum that is the best fit for every student.
            </div> */}
            <div className="text-[14px] md:text-[16px] font-[700] mb-[8px]">
              About PW Unigo
            </div>
            <div className="text-[12px] md:text-[14px]">
              At PW, we believe that knowledge knows no boundaries. Our journey
              began with a commitment to supporting students in their
              educational pursuits, transcending geographical limitations. Now,
              we proudly present PW Unigo, an end-to-end student recruitment
              program dedicated to opening pathways to global education. We
              understand the challenges faced by Indian students seeking
              overseas education. The fear of being misled or cheated is all too
              real. At PW Unigo, we stand as a beacon of trust, ensuring that
              every step you take towards global education is a step towards a
              brighter future. We leave no stone unturned when it comes to
              ensuring the authenticity of universities abroad. Our team
              personally visits and verifies the institutions, ensuring that
              your educational dreams rest on a solid foundation.
            </div>
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full sm:flex sm:justify-between">
            <div className="">
              <div className="text-[16px] lg:mt-0 mt-[20px] md:text-[20px] font-[600]">
                Countries
              </div>
              <ul className="text-[14px]  font-[600] text-[#757575]">
                <li className="mt-3">
                  <Link href={'/countries/russia'}>Russia</Link>
                </li>
                <li className="mt-3">
                  <Link href={'/countries/armenia'}>Armenia</Link>
                </li>
                <li className="mt-3">
                  <Link href={'/countries/georgia'}>Georgia</Link>
                </li>
                <li className="mt-3">
                  <Link href={'/countries/kazakhstan'}>Kazakhstan</Link>
                </li>
                <li className="mt-3">
                  <Link href={'/countries/kyrgyzstan'}>Kyrgyzstan</Link>
                </li>
                <li className="mt-3">
                  <Link href={'/countries/uzbekistan'}>Uzbekistan</Link>
                </li>
              </ul>
            </div>
            <div className="mb-[24px] md:mb-0 lg:mt-0 mt-[20px] ">
              <div className="text-[16px] md:text-[20px] font-[600] mb-[10px]">
                Follow us on :
              </div>
              <div className="flex w-[204px] justify-between ">
                <Link href={'https://www.facebook.com/physicswallah'}>
                  <Image
                    src={Fb}
                    alt="faceBook"
                    height={24}
                    width={24}
                    className="cursor-pointer"
                  />
                </Link>
                <Link href={'https://www.instagram.com/physicswallah/'}>
                  <Image
                    src={Insta}
                    alt="Instagram"
                    height={24}
                    width={24}
                    className="cursor-pointer"
                  />
                </Link>
                <Link href={'https://www.youtube.com/c/PhysicsWallah'}>
                  <Image
                    src={YT}
                    alt="youtube"
                    height={24}
                    width={24}
                    className="cursor-pointer"
                  />
                </Link>
                <Link href={'https://www.linkedin.com/company/physicswallah/'}>
                  <Image
                    src={Linnkedin}
                    alt="LinkedIn"
                    height={24}
                    width={24}
                    className="cursor-pointer"
                  />
                </Link>
                <Link href={'https://twitter.com/physicswallahap?lang=en'}>
                  <Image
                    src={TW}
                    alt="Twitter"
                    height={24}
                    width={24}
                    className="cursor-pointer"
                  />
                </Link>
                <Link href={'https://t.me/Physics_Wallah_Official_Channel'}>
                  <Image
                    src={Tele}
                    alt="Telegram"
                    height={24}
                    width={24}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex mt-[24px]  mx-auto max-w-6xl xl:px-0 px-3">
          <div className="text-[16px] md:text-[16px] font-[600] mb-[10px]">
            For Support & Enquiries:{' '}
            <a className="text-[#757575]" href="mailto:support@pwunigo.com">
              support@pwunigo.com
            </a>
          </div>
        </div>
        <div className="sm:flex mt-[24px] mx-auto max-w-6xl xl:px-0 px-3">
          <div className="border-t-[1px] border-[#D9DCE1] w-full sm:flex justify-between">
            <div className="flex my-3">
              <div className="text-[14px] pr-[12px]">
                <Link href={'/privacy-policy'}>Privacy Policy</Link>
              </div>
              {/* <div className="pl-[12px] text-[14px]">
                <a href="javascript:void(0)">Terms of use</a>
              </div> */}
            </div>
            <div className="sm:text-[14px] sm:font-[600] my-3">
              Copyright © 2023 PW Foundation Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
