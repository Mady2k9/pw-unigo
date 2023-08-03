import { TextInput, Typography } from '@components/ui'
import { Dialog } from '@headlessui/react'
import { Cross } from '@components/icons'
import { useEffect, useState } from 'react'
import { Button } from '@components/ui'
import {
  isPhoneValid,
  isValidFullName,
  isOTPValid,
  isEmailValid,
} from '@lib/validations'
import { useAuth } from '@lib/hooks/useAuth'
import useUnigoFormSubmit from '@lib/hooks/unigo-form/useUnigoFormSubmit'

const TalkToCounsller = () => {
  const [showModal, setShowModal] = useState(false)
  const [counter, setCounter] = useState(0)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [otp, setOtp] = useState('')
  const [canResend, setCanResend] = useState(false)
  const [isPhoneValidCheck, setIsPhoneValidCheck] = useState(false)
  const [isValidFullNameCheck, setisValidFullNameCheck] = useState(false)
  const [isOTPValidCheck, setIsOTPValidCheck] = useState(false)
  const [isEmailValidCheck, setIsEmailValidCheck] = useState(false)

  const [optSent, setOptSent] = useState(false)
  const { handleGenerateOTP, handleRegister, otpSent, error, loading } =
    useAuth()

  const handleOTP = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    if (isPhoneValid(phone)) {
      setIsPhoneValidCheck(true)
      const response = await handleGenerateOTP(phone)
      console.log(response)
      if (response) {
        console.log('OTP SENT')
      }
    } else {
      setIsPhoneValidCheck(false)
    }
  }

  const reduceCounter = () => {
    if (counter === 1) {
      setCanResend(true)
    }
    setCounter(counter - 1)
  }

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => {
        reduceCounter()
      }, 1000)
    }
  }, [counter])

  useEffect(() => {
    reduceCounter()
  }, [])

  console.log(isValidFullName(name))
  console.log(isEmailValid(email))
  console.log(isPhoneValid(phone))
  console.log(isOTPValid(otp))

  const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    if (
      isValidFullName(name) &&
      isEmailValid(email) &&
      isPhoneValid(phone) &&
      isOTPValid(otp)
    ) {
      setisValidFullNameCheck(true)
      setIsEmailValidCheck(true)
      setIsPhoneValidCheck(true)
      setIsOTPValidCheck(true)
      const { data, error, mutate, isError, isSuccess, isLoading } =
        useUnigoFormSubmit()
    } else {
      if (!isValidFullName(name)) setisValidFullNameCheck(false)
      else setisValidFullNameCheck(true)
      if (!isEmailValid(email)) setIsEmailValidCheck(false)
      else setIsEmailValidCheck(true)
      if (!isPhoneValid(phone)) setIsPhoneValidCheck(false)
      else setIsPhoneValidCheck(true)
      if (!isOTPValid(otp)) setIsOTPValidCheck(false)
      else setIsOTPValidCheck(true)
    }
  }
  return (
    <>
      <div className="my-auto max-w-6xl m-auto px-3 xl:px-0">
        <div className="rounded-[8px] sm:rounded-[16px] bg-[#1B2124] sm:relative w-fit sm:w-full m-auto p-[16px] lg:p-0  overflow-hidden">
          <div className="hidden lg:block">
            <img src="/image-41.png" alt="bg" className="h-[450px]" />
          </div>
          <div className=" lg:absolute top-0 h-fit w-full lg:bg-transparent flex ">
            <div className="md:mx-[48px] md:my-[36px] md:w-full justify-between sm:flex">
              <div className="my-auto text-white font-[Gilroy] lg:mr-0 sm:p-[16px] md:p-0">
                <p className="font-bold text-[20px] lg:leadig-[48px] lg:text-[32px] ">
                  Don't let your dreams be dreams.
                </p>
                <p className="font-bold text-[20px] lg:leadig-[48px] lg:text-[32px] ">
                  Make them a reality!
                </p>
                <p className="text-[14px] lg:leading-[28px] lg:text-[18px] ">
                  Talk to our counsellors today and get all your doubts
                  resolved.
                </p>
              </div>
              <div className="bg-transparent sm:bg-white py-[12px] sm:p-[24px] sm:pt-[18px] w-full sm:w-[360px] rounded-[6px]">
                <div className="mb-[16px]">
                  <TextInput
                    action={{
                      disabled: true,
                      loading: false,
                      onAction: function noRefCheck() {},
                      text: '',
                    }}
                    invalid={!isValidFullName(name)}
                    onChange={setName}
                    value={name}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    // label="Student Name*"
                    placeholder="Student Name*"
                    preElement={[]}
                    setRef={function noRefCheck() {}}
                    spellCheck="false"
                    className="pr-2 "
                  />
                </div>
                <div className="mb-[16px]">
                  <TextInput
                    action={{
                      disabled: true,
                      loading: false,
                      onAction: function noRefCheck() {},
                      text: '',
                    }}
                    invalid={!isEmailValid(email)}
                    onChange={setEmail}
                    value={email}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    // label="Email*"
                    placeholder="Email*"
                    preElement={[]}
                    setRef={function noRefCheck() {}}
                    spellCheck="false"
                  />
                </div>
                <div className=" mb-[16px] relative">
                  <TextInput
                    action={{
                      disabled: true,
                      loading: false,
                      onAction: function noRefCheck() {},
                      text: '',
                    }}
                    invalid={!isPhoneValid(phone)}
                    onChange={setPhone}
                    value={phone}
                    maxLength={10}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    // label="Mobile Number*"
                    placeholder="Mobile Number*"
                    preElement={[]}
                    setRef={function noRefCheck() {}}
                    spellCheck="false"
                  />

                  {optSent ? (
                    <Button
                      disabled
                      className="absolute right-3 bottom-5"
                      type="button"
                      variant="naked"
                      onClick={() => {}}
                    >
                      OTP Sent
                    </Button>
                  ) : (
                    <Button
                      className="absolute right-3 bottom-5"
                      type="button"
                      variant="naked"
                      disabled={!isPhoneValid(phone)}
                      onClick={(e) => {
                        handleOTP(e)
                        setCounter(10)
                        setCanResend(false)
                        setOptSent(true)
                        setTimeout(() => {
                          reduceCounter()
                        }, 1000)
                      }}
                    >
                      Get OTP
                    </Button>
                  )}
                </div>

                <div className="mb-[16px]">
                  <TextInput
                    action={{
                      loading: false,
                      onAction: function noRefCheck() {},
                      text: '',
                    }}
                    disabled={!optSent}
                    invalid={!isOTPValid(otp)}
                    onChange={setOtp}
                    value={otp}
                    maxLength={6}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    placeholder="OTP"
                    preElement={[]}
                    setRef={function noRefCheck() {}}
                    spellCheck="false"
                  />
                </div>
                {optSent ? (
                  <>
                    {canResend ? (
                      <div className="mt-[-5px] text-right w-full">
                        <Button
                          className="mb-[10px] "
                          type="button"
                          variant="naked"
                          onClick={() => {
                            // getOTP()
                            setCounter(10)
                            setCanResend(false)
                            setOptSent(true)
                            setTimeout(() => {
                              reduceCounter()
                            }, 1000)
                          }}
                        >
                          Resend OTP
                        </Button>
                      </div>
                    ) : (
                      <div className="mt-[-10px] mb-[10px]">
                        <div className="text-[14px] leading-[22px] text-[#3D3D3D] text-right">
                          00:{String(counter).padStart(2, '0')}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  ''
                )}
                {!isValidFullName(name) ||
                !isEmailValid(email) ||
                !isPhoneValid(phone) ||
                !isOTPValid(otp) ? (
                  <button className="w-full h-[48px] bg-[#e9798b] sm:bg-[#767a7c] rounded-[6px] text-white text-[16px] cursor-not-allowed">
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="w-full h-[48px] bg-[#DA1F3D] sm:bg-[#1B2124] rounded-[6px] text-white text-[16px]"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        className={'relative z-[999999]'}
        open={showModal}
        onClose={handleSubmit}
      >
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />

        <div className="fixed inset-0 flex items-end justify-center">
          <Dialog.Panel className="m-auto  max-w-[480px] rounded-lg bg-white ring-1 transition-all px-5 pb-5 relative">
            <div
              className="cursor-pointer  flex justify-center absolute w-full top-1 right-1"
              onClick={handleSubmit}
            >
              <Cross className="h-6 w-6 absolute right-0 mt-[15px] mr-[15px]" />
            </div>

            <div className="text-center m-2 flex flex-col gap-y-[16px] pt-[24px]">
              <img
                className="h-[104px] w-[104px] m-auto"
                src="green_click.gif"
                alt="check Image"
              />
              <p className="font-bold leading-[30px] text-[20px] ">
                Thank you!
              </p>
              <p className="text-[16px] leading-[24px]">
                Your details have been recorded. Our team will contact you soon!
              </p>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
export default TalkToCounsller
