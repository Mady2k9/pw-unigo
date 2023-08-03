import { TextInput, Typography } from '@components/ui'
import { Dialog } from '@headlessui/react'
import { Cross } from '@components/icons'
import { useEffect, useState } from 'react'
import { Button } from '@components/ui'
import OtpInput from 'react-otp-input'
import { isPhoneValid, isNameValid } from '@lib/validations'
import { useAuth } from '@lib/hooks/useAuth'

const TalkToCounsller = () => {
  const [showModal, setShowModal] = useState(false)
  const [counter, setCounter] = useState(0)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [canResend, setCanResend] = useState(false)
  const [optSent, setOptSent] = useState(false)
  const { handleGenerateOTP, handleRegister, otpSent, error, loading } =
    useAuth()

  const handleOTP = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    const response = await handleGenerateOTP(phone)
    console.log(response)
    if (response.success) {
      console.log('ho gaya')
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

  const handleSubmit = () => {
    // setShowModal(!showModal)
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
                  What are you waiting for?
                </p>
                <p className="font-bold text-[20px] lg:leadig-[48px] lg:text-[32px] ">
                  Make your dream come true today!
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
                    invalid={!isNameValid(name)}
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
                    className="pr-2"
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
                      disabled: true,
                      loading: false,
                      onAction: function noRefCheck() {},
                      text: '',
                    }}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    onChange={function noRefCheck() {}}
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
                {!isNameValid(name) || !isPhoneValid(phone) ? (
                  <button
                    onClick={handleSubmit}
                    className="w-full h-[48px] bg-[#e9798b] sm:bg-[#767a7c] rounded-[6px] text-white text-[16px] cursor-not-allowed"
                  >
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
