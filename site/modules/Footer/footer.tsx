import Pwlogo from '../../assets/images/image 1.png'
import Image from 'next/image'
import Fb from '../../assets/images/fb.svg'
import Insta from '../../assets/images/inta.svg'
import YT from '../../assets/images/utube.svg'
import Linnkedin from '../../assets/images/linkedin.svg'
import TW from '../../assets/images/twitter.svg'
import Tele from '../../assets/images/telegram.svg'
import TalkToCounsllerButton from '../TalkCounsellerButton'
const Footer = () => {
  return (
    <>
      <div className="w-screen bg-[#F8F8F8] px-[16px] py-[32px] mt-[40px]  md:px-[32px] lg:px-[80px] xl:px-[160px] xl:py-[40px]">
        <div className=" md:flex">
          <div className=" mb-[24px] md:mb-0 md:w-[500px] lg:w-[600px] xl:w-[700px] md:mr-[24px] lg:mr-[40px] xl:mr-[64px]">
            <div className="mb-[20px] md:mb-[24px] md:w-[214px] md:h-[60px]">
              <Image src={Pwlogo} alt="logo" />
            </div>
            <div className="text-[12px] md:text-[14px] mb-[20px] md:mb-[24px]">
              We understand that every student has different needs and
              capabilities, which is why we create such a wonderful and unique
              curriculum that is the best fit for every student.
            </div>
            <div className="text-[14px] md:text-[16px] font-[700] mb-[8px]">
              About PW Unigo
            </div>
            <div className="text-[12px] md:text-[14px]">
              PW Foundation’s core mission lies in identifying and working along
              with economically and socially deprived sections of society and
              empowering them to become increasingly educated and skilled so
              that they can be self-reliant, have a sense of holistic awareness
              and enjoy a healthy, dignified and sustainable quality of life.
            </div>
          </div>
          <div className=" md:flex">
            <div className=" mb-[24px] md:mb-0 md:mr-[24px] lg:mr-[40px] xl:mr-[64px]">
              <div className="text-[16px] md:text-[20px] font-[600]">
                Countries
              </div>
              <div className="text-[14px]  font-[600] text-[#757575]">
                Russia
              </div>
              <div className="text-[14px] font-[600] text-[#757575]">
                Armenia
              </div>
              <div className="text-[14px] font-[600] text-[#757575]">
                Georgia
              </div>
              <div className="text-[14px] font-[600] text-[#757575]">
                Kazakhstan
              </div>
              <div className="text-[14px] font-[600] text-[#757575]">
                Kyrgyzstan
              </div>
              <div className="text-[14px] font-[600] text-[#757575]">
                Uzbekistan
              </div>
            </div>
            <div className="mb-[24px] md:mb-0 w-fit">
              <div className="text-[16px] md:text-[20px] font-[600] mb-[10px]">
                Follow us on :
              </div>
              <div className="flex w-[204px] justify-between">
                <Image src={Fb} alt="faceBook" height={24} width={24} />
                <Image src={Insta} alt="Instagram" height={24} width={24} />
                <Image src={YT} alt="youtube" height={24} width={24} />
                <Image src={Linnkedin} alt="LinkedIn" height={24} width={24} />
                <Image src={TW} alt="Twitter" height={24} width={24} />
                <Image src={Tele} alt="Telegram" height={24} width={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#D9DCE1] md:flex mt-[24px] md:mt-[40px]">
          <div className="flex w-full md:w-[50%] my-[6px]">
            <div className="text-[14px] border-r-[2px] border-[#D9DCE1] pr-[12px]">
              Privacy Policy
            </div>
            <div className="pl-[12px] text-[14px]">Terms of use</div>
          </div>
          <div className="w-full md:w-[50%] md:text-right md:text-[14px] md:font-[600] my-[6px]">
            Copyright © 2023 PW Foundation Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>

<TalkToCounsllerButton />
    </>
  )
}

export default Footer
