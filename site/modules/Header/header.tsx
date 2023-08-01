import Link from 'next/link'
import Pwlogo from '../../assets/images/image 1.png'
import Image from 'next/image'
import Phn from '../../assets/images/phn_icon.svg'
import Bar from '../../assets/images/bars-3.svg'
import { Button, Typography } from '@components/ui'
import { useRouter } from 'next/router'
import { Fragment, useRef, useState, useEffect } from 'react'
import MenuIcon from '@heroicons/react/20/solid/Bars3BottomLeftIcon'
// import Link from 'next/link'
// import { LogoMarvels } from '@components/assets/icons/LogoMarvels'
import { Menu, Transition, Dialog } from '@headlessui/react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid'
// import { Accordian } from '../MobileNavAccordian'
// import { registrationClose } from '@config/types/registrationDate'
import { Cross } from '@components/icons'

const header = ({ handleState }: { handleState: any }) => {
  const handleClick = () => {
    handleState()
  }
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const toggleMenu = () => {
    setOpen(!open)
  }

  const handleLogin = () => {
    window.open('login', '_self')
  }
  const handleRegister = () => {
    window.open('register', '_self')
  }

  const toggleModal = () => {}
  return (
    <>
      <div className=" sticky top-0 md:h-[80px] h-[60px] flex bg-white  border-b-[1px] w-screen z-[10] p-[10px] md:p-0">
        <div
          className="h-[32px] w-[32px] md:hidden my-auto"
          onClick={toggleMenu}
        >
          <Image src={Bar} alt="hambuger menu" />
        </div>
        <div className="m-auto h-full items-center flex bg-white w-fit">
          {/*  */}
          <div className="lg:w-fit lg:h-fit my-auto h-[33px] w-[123px]">
            <Image src={Pwlogo} alt="logo" />
          </div>
          <div className=" w-fit h-full lg:px-[100px] md:flex hidden">
            <div className="h-full flex px-[10px] py-[12px] hover:bg-[#FEF6F7]">
              <div className="m-auto text-[16px] font-[600] ">
                <Link href={'#'}>Russia</Link>
              </div>
            </div>
            <div className="h-full flex px-[10px] py-[12px] hover:bg-[#FEF6F7]">
              <div className="m-auto text-[16px] font-[600]  ">
                <Link href={'#'}>Armenia</Link>
              </div>
            </div>
            <div className="h-full flex px-[10px] py-[12px] hover:bg-[#FEF6F7]">
              <div className="m-auto text-[16px] font-[600]  ">
                <Link href={'#'}>Georgia</Link>
              </div>
            </div>
            <div className="h-full flex px-[10px] py-[12px] hover:bg-[#FEF6F7]">
              <div className="m-auto text-[16px] font-[600]  ">
                <Link href={'#'}>Kazakhstan</Link>
              </div>
            </div>
            <div className="h-full flex px-[10px] py-[12px] hover:bg-[#FEF6F7]">
              <div className="m-auto text-[16px] font-[600]  ">
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
        <div className="w-[32] h-[32px] bg-transparent md:hidden text-white">
          <Transition appear show={open} as={Fragment}>
            <Dialog onClose={toggleMenu} as="div">
              <div className="fixed inset-0 overflow-y-auto z-20">
                <div className="flex items-center justify-center text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-600"
                    enterFrom="translate-x-0"
                    enterTo="translate-x-full"
                    leave="ease-in duration-600"
                    leaveFrom="translate-x-12"
                    leaveTo="translate-x-0"
                  >
                    <Dialog.Panel className="w-[100vw] h-[100vh] transform overflow-hidden  bg-white text-left align-middle shadow-xl transition-all ">
                      <div className="flex justify-between px-3   border-b-[1px] border-slate-200 h-16 items-center z-20">
                        <div className="flex items-center">
                          {/* <Link href="/">
                            <img
                              src={Pwlogo.src}
                              alt="LogoMarvels"
                              draggable={false}
                              className={`${
                                open
                                  ? 'opacity-1 duration-700 ease-out'
                                  : 'opacity-1'
                              } md:cursor-pointer `}
                            />
                          </Link> */}
                          <span
                            className="w-7 h-7 cursor-pointer"
                            onClick={toggleMenu}
                          >
                            <XMarkIcon />
                          </span>
                        </div>
                      </div>
                      <div className="h-[92vh] grid content-between ">
                        <div>
                          {/* <Accordian data={data.data} toggleMenu={toggleMenu} />{' '} */}
                        </div>

                        <div className="h-24  border-t-[1px] border-[#F6CD7A] grid content-center">
                          <div className="flex justify-center">
                            <div className="inline-flex gap-3">
                              <Button
                                variant="secondary"
                                onClick={handleLogin}
                                size={'small'}
                                className="h-10 w-[68px]"
                              >
                                <Typography weight={600}>Login</Typography>
                              </Button>
                              {/* {registrationClose && (
                                <Button
                                  variant="primary"
                                  onClick={handleRegister}
                                  size={'small'}
                                  className="h-10 w-[125px]"
                                >
                                  <Typography weight={600}>
                                    Register Now
                                  </Typography>
                                </Button>
                              )} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  )
}

export default header
