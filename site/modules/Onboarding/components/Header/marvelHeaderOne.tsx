import Image from 'next/image'

import Group from '@assets/images/profile_assets/Group 726.svg'
import Link from 'next/link'
import { Typography } from '@components/ui'
import { Button } from '@components/ui'

const HHeader = () => {
  function handleSubmit(e: any) {
    return alert('submitted')
  }
  const name: String = 'Step 1 : Profile Details'
  return (
    <>
      <div className="sticky top-0 h-[60px] lg:h-20 bg-white z-20 shadow-lg grid  grid-cols-12">
        <div className=" md:col-span-2  col-span-5 inline-flex items-center p-4 md:justify-center md:border-r-[1px]">
          <Link href={'#'}>
            <div className="flex w-fit items-center md:justify-center ">
              <div className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] lg:w-[45px] lg:h-[45px] ">
                <img src="/pw.png" alt="sd" />
              </div>
              <div className="h-fit w-fit text-[16px] font-semibold md:text-[18px] lg:text-[22px] ">
                Marvels
              </div>
            </div>
          </Link>
        </div>
        <div className=" md:col-span-10 col-span-7 flex justify-end p-4 md:p-0 md:justify-center">
          <div className="w-fit md:w-[90%] lg:w-[85%]  h-full flex justify-between items-center">
            <div className="h-fit w-fit hidden md:block">
              <Typography variant="heading3" weight={600}>
                {name}
              </Typography>
            </div>
            <div className="hidden md:block">
              <button
                className=" bg-[#D2CCFF] hover:bg-[#5A4BDA] md:h-[40px] text-center text-white rounded-md md:w-[90px] "
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <div className=" flex w-[142px] h-[32px] m-auto md:hidden ">
              <button className="w-[66px] h-full bg-white border-[1px] rounded-md text-[12px] font-semibold mx-1">
                Notice
              </button>
              <button className="w-[76px] h-full bg-white border-[1px] rounded-md text-[12px] p-1 font-semibold flex justify-center items-center">
                <div className="mt-1 mx-[2px]">
                  <Image src={Group} height={11} width={11} />
                </div>
                <p>Logout</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HHeader
