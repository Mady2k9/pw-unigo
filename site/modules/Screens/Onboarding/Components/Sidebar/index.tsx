import React, { useState } from 'react'
import s from './sidebar.module.css'
import { useRouter } from 'next/router'
import { Dialog } from '@headlessui/react'
import { Cross } from '@components/icons'
import ImportantNoticeData from '@modules/ImportantNotices/importantNoticeData'

export interface sidebarProps {
  name: string
  phone: string
}

const sidebar: React.FC<sidebarProps> = (props) => {
  const { name, phone } = props
  const [show, setShow] = useState(false)
  const router = useRouter()
  const [isProfilePageOpened, setIsProfilePageOpened] = useState(false)
  const [nominateAgain, setNominateAgain] = useState(false)
  var profileLink = '/profile-details'
  var nominateLink = '/nomination-form'

  const openImportantNotices = () => {
    setShow(!show)
  }
  const toggleModal = () => {
    setIsProfilePageOpened(false)
    setNominateAgain(false)
  }
  const onSubmitProfile = () => {
    router.push(profileLink)
  }
  const onSubmitNominate = () => {
    router.push(nominateLink)
  }
  const goToProfilePage = () => {
    setIsProfilePageOpened(true)
  }
  const goToNominatePage = () => {
    setNominateAgain(true)
  }

  return (
    <>
      <div className="sm:w-[235px] z-40 flex pt-4 sm:justify-center w-full">
        <div className={s.mainContainer}>
          <div className={s.container}>
            <img
              className="mx-auto"
              src="/user_profile.svg"
              alt="user profile"
            />
            <p className="text-[16px] ">{name}</p>
            <div className="flex justify-center items-center">
              <span className="stroke-black">
                <img className="mr-2" src="/phone.svg" alt="phone" />
              </span>
              <p className="text-[12px] text-[#757575]">{phone}</p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center sm:pb-0 pb-4">
            <div className="flex sm:flex-col flex-row sm:order-2 sm:gap-0 gap-3">
              <div
                className="mb-2 sm:text-left text-center"
                onClick={goToProfilePage}
              >
                <span className={s.step_text_active}>Step 1</span>
                <div className={s.icon_container}>
                  <img className={s.step_img} src="/step_1c.svg" alt="step1" />
                  <span className={s.step_icon_text}>Profile Details</span>
                </div>
              </div>

              <div
                className="mb-2 sm:text-left text-center"
                onClick={goToNominatePage}
              >
                <span className={s.step_text}>Step 2</span>
                <div className={s.icon_container}>
                  <img className={s.step_img} src="/step_2c.svg" alt="step2" />
                  <p className={s.step_icon_text}>Nomination Form</p>
                </div>
              </div>

              <div className="mb-2 sm:text-left text-center">
                <span className={s.step_text}>Step 3</span>
                <div className={s.icon_container}>
                  <img className={s.step_img} src="/step_3c.svg" alt="step3" />
                  <p className={s.step_icon_text}>Upload Documents</p>
                </div>
              </div>
            </div>
            <div className="mx-2 sm:order-1">
              <div className="flex sm:flex-col flex-row items-center">
                <img src="/dot-a.svg" alt="dot" />
                <div className="sm:w-[2px]  sm:h-[60px] h-[2px]  w-[98px] bg-[#C1C6CE]  inline-block"></div>
                <img src="/dot-g.svg" alt="dot" />
                <div className="sm:w-[2px]  sm:h-[60px] h-[2px]  w-[98px] bg-[#C1C6CE]  inline-block"></div>
                <img src="/dot-g.svg" alt="dot" />
              </div>
            </div>
          </div>
          <div className="mt-[30%] w-[235px] sm:block hidden">
            <div className=" ml-8 flex  ">
              <img
                className="w-[48px] "
                src="/profile_ani.gif"
                alt="animated"
              />
              <p
                onClick={openImportantNotices}
                className=" text-[#3D3D3D] self-center cursor-pointer"
              >
                Important Notices
              </p>
            </div>
            <hr className={s.linecss} />
            <div className="flex justify-center">
              <span className={s.logoutHidden}>
                <img
                  className="mt-1 mr-2 w-[20px]"
                  src="/log_outp.svg"
                  alt="log out"
                />
              </span>
              <p className={s.logout_text}>Log Out</p>
            </div>
          </div>
        </div>
        {isProfilePageOpened === true ? (
          <div className="opacity-25 fixed inset-0 z-40 bg-[#414347] "></div>
        ) : (
          ''
        )}
        {isProfilePageOpened === true ? (
          <Dialog
            className={'relative z-[999999]'}
            open={isProfilePageOpened}
            onClose={toggleModal}
          >
            <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4 ">
              <Dialog.Panel className="mx-auto w-full max-w-[480px] max-h-[212px] rounded-xl bg-white ring-1 transition-all p-5 relative">
                <div
                  className="cursor-pointer absolute top-4 right-4"
                  onClick={toggleModal}
                >
                  <Cross className="h-6 w-6" />
                </div>
                <div className="text-center m-2">
                  <p className="font-bold text-[20px] ">
                    Going to previous step?
                  </p>
                  <p className="text-[16px] mt-[20px]">
                    Are you sure you want to go back without completing this
                    step?{' '}
                  </p>
                </div>
                <div className="flex justify-center mt-6 text-[16px] font-[600px]">
                  <button
                    onClick={onSubmitProfile}
                    className="w-[208px] h-[48px] border border-[#5A4BDA] rounded-md text-[#5A4BDA]"
                  >
                    Go to Profile details
                  </button>
                  <button
                    onClick={toggleModal}
                    className="w-[208px] h-[48px] border ml-6 bg-[#5A4BDA] text-white rounded-md"
                  >
                    Complete it first
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        ) : (
          <Dialog
            className={'relative z-[999999]'}
            open={nominateAgain}
            onClose={toggleModal}
          >
            <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4 ">
              <Dialog.Panel className="mx-auto w-full max-w-[480px] max-h-[212px] rounded-xl bg-white ring-1 transition-all p-5 relative">
                <div
                  className="cursor-pointer absolute top-4 right-4"
                  onClick={toggleModal}
                >
                  <Cross className="h-6 w-6" />
                </div>
                <div className="text-center m-2">
                  <p className="font-bold text-[20px] ">
                    Going to previous step?
                  </p>
                  <p className="text-[16px] mt-[20px]">
                    Are you sure you want to go back without completing this
                    step?{' '}
                  </p>
                </div>
                <div className="flex justify-center mt-6 text-[16px] font-[600px]">
                  <button
                    onClick={onSubmitNominate}
                    className="w-[208px] h-[48px] border border-[#5A4BDA] rounded-md text-[#5A4BDA]"
                  >
                    Go to nomination form
                  </button>
                  <button
                    onClick={toggleModal}
                    className="w-[208px] h-[48px] border ml-6 bg-[#5A4BDA] text-white rounded-md"
                  >
                    Complete it first
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </div>
      {show === true ? <ImportantNoticeData /> : ''}
    </>
  )
}

export default sidebar
