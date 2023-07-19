import { Button, Typography } from '@components/ui'
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { deleteAllCookies } from '@lib/user-utility'
import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { Dialog } from '@headlessui/react'
import { Cross } from '@components/icons'
import { useUI } from '@components/ui'

export interface HeaderProps {
  title: string
  handleSubmitForm?: () => void // TODO - remove optional chaining
  handleEditForm: (navBarText: string) => void
  profileData: any
  isEditEnabled: boolean
  navBarText: string
  shouldDisabled: boolean
  hideSubmitButton?: boolean
}

const Header: React.FC<HeaderProps> = ({
  title,
  handleSubmitForm,
  handleEditForm,
  isEditEnabled,
  navBarText,
  shouldDisabled,
  hideSubmitButton = false,
}: HeaderProps) => {
  const router = useRouter()
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false)
  const { handleUserUpdated } = useUI()
  const toggleModal = () => {
    setIsLogoutModalOpen(false)
    setIsNoticeModalOpen(false)
  }

  const logoutHandler = () => {
    setIsLogoutModalOpen(true)
  }
  const noticeHandler = () => {
    setIsNoticeModalOpen(true)
  }
  const logOutComplete = () => {
    localStorage.clear()
    deleteAllCookies()
    handleUserUpdated()
    router.push('/')
  }
  return (
    <>
      <div className="sticky top-0 sm:h-[80px] h-[60px] items-center justify-between bg-white z-10 shadow-md flex">
        <div className="sm:w-[235px] sm:h-[80px] h-[60px] flex py-2 sm:justify-center sm:border-r">
          <a href="" className="my-auto sm:ps-0 ps-2">
            <div className="flex items-center">
              <div className="sm:w-[45px] w-[24px]">
                <img src="/logo.svg" alt="PW Logo" />
              </div>
              <div className="ml-2 sm:ms-0 text-[16px] md:text-[18px] lg:text-[22px] font-[600]">
                Marvels
              </div>
            </div>
          </a>
        </div>
        <div className="w-[calc(100vw-235px)] ">
          <div className="flex py-4 sm:w-10/12 w-full sm:justify-between sm:mx-auto justify-end sm:pe-0 pr-[16px]">
            <div className="text-[24px] font-[600] my-auto leading-[32px] hidden sm:block">
              {title}
            </div>
            <div className="hidden sm:block md:w-[113px]">
              {!hideSubmitButton && (
                <Button
                  onClick={
                    navBarText === 'Edit'
                      ? () => handleEditForm(navBarText)
                      : handleSubmitForm
                  }
                  stretch
                  variant={navBarText === 'Edit' ? 'outline' : 'primary'}
                  preIcon={
                    navBarText === 'Edit' ? (
                      <PencilSquareIcon className="text-primary" width={20} />
                    ) : null
                  }
                  disabled={shouldDisabled}
                >
                  {navBarText === 'Edit' ? ' Edit Form' : 'Submit'}
                </Button>
              )}
              {/* <button
              className=" bg-[#5A4BDA] md:h-[40px] text-center text-white rounded-md md:w-[90px] "
              onClick={handleSubmitForm}
              onClick={
                bg-[#D2CCFF] hover:
                navBarText === 'Edit'
                  ? () => handleEditForm(navBarText)
                  : handleSubmitForm
              } 
            >
              {navBarText === 'Edit' ? 'Edit Form' : 'Submit'}
            </button> */}
            </div>
            <div className="flex w-[142px] h-[32px] sm:hidden ">
              <button
                onClick={noticeHandler}
                className="w-[66px] h-full bg-white border-[1px] rounded-md text-[12px] mr-2"
              >
                Notices
              </button>
              <button
                onClick={logoutHandler}
                className="w-[76px] h-full bg-white border-[1px] rounded-md text-[12px] flex justify-center items-center"
              >
                <div className="mr-1">
                  <img src="/log_out.svg" height={11} width={11} />
                </div>
                <p>Logout</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLogoutModalOpen ? (
        <>
          <div className="opacity-25 fixed inset-0 z-40 bg-[#414347] "></div>
          <Dialog
            className={'relative z-[999999]'}
            open={isLogoutModalOpen}
            onClose={toggleModal}
          >
            <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
            <div
              className="cursor-pointer  flex justify-center absolute w-full bottom-32"
              onClick={toggleModal}
            >
              <span className=" bg-slate-100 p-1 rounded-full">
                <Cross className="h-6 w-6 " />
              </span>
            </div>
            <div className="fixed inset-0 flex items-end justify-center">
              <Dialog.Panel className="mx-auto w-full max-w-[480px] max-h-[212px] rounded-t-2xl bg-white ring-1 transition-all px-5 pb-5 relative">
                <div className="flex justify-center pt-2">
                  <span className=" bg-slate-300 h-1 w-9 rounded-xl"></span>
                </div>
                <div className="text-center m-2">
                  <p className="font-bold text-[20px] ">
                    Are you sure you want to Logout?
                  </p>
                </div>
                <div className="flex justify-center mt-6 text-[16px] font-[600px]">
                  <button
                    onClick={logOutComplete}
                    className="w-[208px] h-[48px] border border-[#5A4BDA] rounded-md text-[#5A4BDA]"
                  >
                    Yes
                  </button>
                  <button
                    onClick={toggleModal}
                    className="w-[208px] h-[48px] border ml-6 bg-[#5A4BDA] text-white rounded-md"
                  >
                    No
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </>
      ) : (
        ''
      )}
      {isNoticeModalOpen ? (
        <>
          <div className="opacity-25 fixed inset-0 z-40 bg-[#414347] "></div>
          <Dialog
            className={'relative z-[999999]'}
            open={isNoticeModalOpen}
            onClose={toggleModal}
          >
            <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
            <div
              className="cursor-pointer  flex justify-center absolute w-full bottom-[26.5rem]"
              onClick={toggleModal}
            >
              <span className=" bg-slate-100 p-1 rounded-full">
                <Cross className="h-6 w-6 " />
              </span>
            </div>
            <div className="fixed inset-0 flex items-end justify-center">
              <Dialog.Panel className="mx-auto w-full max-w-[480px]  rounded-t-2xl bg-white ring-1 transition-all px-5 pb-5 relative">
                <div className="flex justify-center pt-2">
                  <span className=" bg-slate-300 h-1 w-9 rounded-xl"></span>
                </div>
                <div className=" p-4  items-center text-center">
                  <Typography variant="heading4" weight={700}>
                    Important Notices
                  </Typography>
                </div>
                {/*body*/}
                <div className="relative pl-4 flex-auto">
                  <Typography variant="small" weight={500}>
                    <ol className="list-decimal">
                      <li className="py-3">
                        Announcement for Registration- 1st JUNE 2023
                      </li>
                      <li className="py-3">
                        LAST date for Nomination- 31st November 2023
                      </li>
                      <li className="py-3">
                        Announcement of stage 1 qualified students- 10th
                        december 2023
                      </li>
                      <li className="py-3">
                        Interview round for Qualified students- In month of
                        December to january
                      </li>
                      <li className="py-3">
                        Final Result declaration- last week of January or 1st
                        week of february
                      </li>
                      <li className="py-3">
                        PW marvels felicitation- Last week of February or 1 week
                        of march
                      </li>
                    </ol>
                  </Typography>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default Header
