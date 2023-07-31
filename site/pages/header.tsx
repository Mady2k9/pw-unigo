import Link from 'next/link'
import Pwlogo from './assets/image 1.png'
import Image from 'next/image'
import Phn from './assets/phn_icon.svg'
import Bar from './assets/bars-3.svg'
const header = ({ handleState }: { handleState: any }) => {
  const handleClick = () => {
    handleState()
  }
  return (
    <>
      <div className=" sticky top-0 md:h-[80px] h-[60px] flex bg-white w-screen z-[10] p-[10px] md:p-0">
        <div
          className="h-[32px] w-[32px] md:hidden my-auto"
          onClick={handleClick}
        >
          <Image src={Bar} alt="hambuger menu" />
        </div>
        <div className="m-auto h-full items-center flex bg-white w-fit">
          {/*  */}
          <div className="lg:w-fit lg:h-fit my-auto h-[33px] w-[123px]">
            <Image src={Pwlogo} alt="logo" />
          </div>
          <div className=" w-fit h-full lg:px-[100px] md:flex hidden">
            <div className="h-full flex px-[10px] py-[12px]">
              <div className="m-auto text-[16px] font-[600] hover:bg-[#FEF6F7]" >
                <Link href={'#'}>Russia</Link>
              </div>
            </div>
            <div className="h-full flex px-[10px] py-[12px]">
              <div className="m-auto text-[16px] font-[600]  hover:bg-[#FEF6F7]">
                <Link href={'#'}>Armenia</Link>
              </div>
            </div>
            <div className="h-full flex px-[10px] py-[12px]">
              <div className="m-auto text-[16px] font-[600]  hover:bg-[#FEF6F7]">
                <Link href={'#'}>Georgia</Link>
              </div>
            </div>
            <div className="h-full flex px-[10px] py-[12px]">
              <div className="m-auto text-[16px] font-[600]  hover:bg-[#FEF6F7]">
                <Link href={'#'}>Kazakhstan</Link>
              </div>
            </div>
            <div className="h-full flex px-[10px] py-[12px] hover:bg-[#FEF6F7]">
              <div className="m-auto text-[16px] font-[600]  hover:bg-[#FEF6F7]">
                <Link href={'#'}>Kyrgyzstan</Link>
              </div>
            </div>
            <div className="h-full flex px-[10px] py-[12px] hover:bg-[#FEF6F7]">
              <div className="m-auto text-[16px] font-[600]  ">
                <Link href={'#'}>Uzbekistan</Link>
              </div>
            </div>
          </div>
          <div className="w-fit h-full md:flex hidden ">
            <button className="p-[12px] flex h-[48px] m-auto items-center border-[2px] rounded-[6px]">
              <Image src={Phn} alt="phone" />
              <p className="ml-[8px]">9513766500</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default header
