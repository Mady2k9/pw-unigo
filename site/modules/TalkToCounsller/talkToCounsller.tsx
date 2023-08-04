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
import { submitUnigoFormFetcher } from '@lib/api/fetchers/unigo-fetecher'
import { router } from 'next/client'

const TalkToCounsller = () => {
  const [showModal, setShowModal] = useState(false)
  const [counter, setCounter] = useState(0)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [otp, setOtp] = useState('')
  const [canResend, setCanResend] = useState(false)
  const [otpError, setOtpError] = useState(false)

  const [isPhoneValidCheck, setIsPhoneValidCheck] = useState(true)
  const [isValidFullNameCheck, setisValidFullNameCheck] = useState(true)
  const [isOTPValidCheck, setIsOTPValidCheck] = useState(true)
  const [isEmailValidCheck, setIsEmailValidCheck] = useState(true)

  const [optSent, setOptSent] = useState(false)
  const { handleGenerateOTP, handleRegister, otpSent, error, loading } =
    useAuth()

  const handleModalClose = () => {
    setShowModal(false)
    setPhone('')
    setEmail('')
    setName('')
    setOtp('')
    setOptSent(false)
    setCanResend(false)
    setIsPhoneValidCheck(true)
  }

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

  const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    // useUnigoFormSubmit()
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

      submitUnigoFormFetcher({
        name,
        countryCode: '+91',
        email,
        phoneNumber: phone,
        otp: parseInt(otp),
      }).then(
        function (res: any) {
          console.log('pass', res)
          if (res.statusCode == 201) {
            setShowModal(true)
          }
        },
        function (err: any) {
          console.log('fail', err)
          if (err == true) {
            setOtpError(true)
          }
        }
      )
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
      <div className="mb-[16px]">
        <TextInput
          action={{
            disabled: true,
            loading: false,
            onAction: function noRefCheck() {},
            text: '',
          }}
          // invalid={!isValidFullName(name)}
          invalid={!isValidFullNameCheck}
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
          // invalid={!isEmailValid(email)}
          invalid={!isEmailValidCheck}
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
          // invalid={!isPhoneValid(phone)}
          invalid={!isPhoneValidCheck}
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
          // invalid={!isOTPValid(otp)}
          invalid={!isOTPValidCheck}
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
                onClick={(e) => {
                  // getOTP()
                  handleOTP(e)
                  setCounter(10)
                  setOtpError(false)
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
      {otpError ? (
        <div className="text-[#ff0000] mt-[-10px] mb-[10px]">
          otp is invalid
        </div>
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

      <Dialog
        className={'relative z-[999999]'}
        open={showModal}
        onClose={handleModalClose}
      >
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />

        <div className="fixed inset-0 flex items-end justify-center">
          <Dialog.Panel className="m-auto  max-w-[480px] rounded-lg bg-white ring-1 transition-all px-5 pb-5 relative">
            <div
              className="cursor-pointer  flex justify-center absolute w-full top-1 right-1"
              onClick={handleModalClose}
            >
              <Cross className="h-6 w-6 absolute right-0 mt-[15px] mr-[15px]" />
            </div>

            <div className="text-center m-2 flex flex-col gap-y-[16px] pt-[24px]">
              <img
                className="h-[104px] w-[104px] m-auto"
                src="../green_click.gif"
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
