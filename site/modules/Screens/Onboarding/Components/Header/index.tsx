import { Button } from '@components/ui'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

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
  return (
    <>
      <div className="sm:sticky fixed w-full top-0 sm:h-[80px] h-[60px] items-center justify-between bg-white z-10 shadow-md flex">
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
              <button className="w-[66px] h-full bg-white border-[1px] rounded-md text-[12px] mr-2">
                Notices
              </button>
              <button className="w-[76px] h-full bg-white border-[1px] rounded-md text-[12px] flex justify-center items-center">
                <div className="mr-1">
                  <img src="/log_out.svg" height={11} width={11} />
                </div>
                <p>Logout</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden fixed top-[90%] w-full z-50 p-3">
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
    </>
  )
}

export default Header
