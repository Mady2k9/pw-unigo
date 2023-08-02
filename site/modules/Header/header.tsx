import Link from 'next/link'
import Pwlogo from '../../assets/images/image 1.png'
import Image from 'next/image'
import Phn from '../../assets/images/phn_icon.svg'
import Bar from '../../assets/images/bars-3.svg'
import { Typography } from '@components/ui'
import { Fragment, useRef, useState, useEffect } from 'react'
import { Menu, Transition, Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'

const header = ({ handleState }: { handleState: any }) => {
  const handleClick = () => {
    handleState()
  }
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const toggleMenu = () => {
    setOpen(!open)
  }

  const items = [
    {
      name: 'Russia',
      url: '#',
    },
    {
      name: 'Armenia',
      url: '#',
    },
    {
      name: 'Georgia',
      url: '#',
    },
    {
      name: 'Kazakhstan',
      url: '#',
    },
    {
      name: 'Kyrgyzstan',
      url: '#',
    },
    {
      name: 'Uzbekistan',
      url: '#',
    },
  ]

  const toggleModal = () => {}
  return (
    <>
      <div className=" sticky top-0 md:h-[80px] h-[60px] flex bg-white  border-b-[1px] w-screen z-[10] px-[10px] ">
        <div className="sticky flex justify-between w-screen items-center lg:hidden">
          <div className="h-[32px] w-[32px]  my-auto" onClick={toggleMenu}>
            <Image src={Bar} alt="hambuger menu" />
          </div>
          <div className="h-[33px] w-[123px] cursor-pointer">
            <Link href={'/'}>
              <Image src={Pwlogo} alt="logo" />
            </Link>
          </div>
          <div className="w-[32px]"></div>
        </div>
        <div className=" w-screen lg:block hidden ">
          <div className="  h-full items-center bg-white max-w-7xl sm:px-6 px-3 mx-auto flex justify-between ">
            <div className="lg:h-fit my-auto h-[33px] w-[123px] cursor-pointer">
              <Link href={'/'}>
                <Image src={Pwlogo} alt="logo" />
              </Link>
            </div>
            <div className="h-full flex">
              {items?.map((item, index) => (
                <Link href={item.url}>
                  <div className="h-full flex px-[10px] py-[12px] hover:bg-[#FEF6F7] cursor-pointer">
                    <div key={index} className="m-auto text-[16px] font-[600] ">
                      {item.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-fit h-full flex items-center ">
              <button className="p-3  flex h-[48px] m-auto items-center border-[1px] border-[#414347] rounded-[6px]">
                <Image src={Phn} alt="phone" />
                <p className="ml-[8px]">9513766500</p>
              </button>
            </div>
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
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="ease-in duration-600"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="w-[100vw] h-[100vh] transform overflow-hidden  bg-white text-left align-middle shadow-xl transition-all ">
                      <div className="flex justify-between px-3 h-16 items-center z-20">
                        <div className="flex items-center">
                          <span
                            className="w-7 h-7 cursor-pointer"
                            onClick={toggleMenu}
                          >
                            <XMarkIcon />
                          </span>
                        </div>
                      </div>
                      <div className="h-[88vh] grid content-between ">
                        <div className="px-4">
                          <div className="pb-2 text-[#757575]">
                            <Typography variant="small" weight={600}>
                              COUNTRIES
                            </Typography>
                          </div>

                          {items?.map((item, index) => (
                            <div className=" border-[#D9DCE1] border-b-[1px] py-3 ">
                              <Link href={item.url}>
                                <span className="text-sm font-semibold">
                                  <Typography variant="small" weight={600}>
                                    {item.name}
                                  </Typography>
                                </span>
                              </Link>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-center">
                          <div className="p-4">
                            <button className="p-3 flex h-[48px] w-[92vw] items-center justify-center border-[1px] border-[#414347] rounded-[6px]">
                              <Image src={Phn} alt="phone" />
                              <p className="ml-[8px]">9513766500</p>
                            </button>
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
