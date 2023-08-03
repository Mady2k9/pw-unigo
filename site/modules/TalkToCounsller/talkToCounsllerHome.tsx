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
import TalkToCounsller from '@modules/TalkToCounsller/talkToCounsller'

const TalkToCounsllerHome = () => {
  // const [showModal, setShowModal] = useState(false)
  // const [counter, setCounter] = useState(0)
  // const [phone, setPhone] = useState('')
  // const [email, setEmail] = useState('')
  // const [name, setName] = useState('')
  // const [otp, setOtp] = useState('')
  // const [canResend, setCanResend] = useState(false)
  // const [otpError, setOtpError] = useState(false)

  // const [isPhoneValidCheck, setIsPhoneValidCheck] = useState(true)
  // const [isValidFullNameCheck, setisValidFullNameCheck] = useState(true)
  // const [isOTPValidCheck, setIsOTPValidCheck] = useState(true)
  // const [isEmailValidCheck, setIsEmailValidCheck] = useState(true)

  // const [optSent, setOptSent] = useState(false)
  // const { handleGenerateOTP, handleRegister, otpSent, error, loading } =
  //   useAuth()

  // const handleModalClose = () => {
  //   setShowModal(false)
  //   setPhone('')
  //   setEmail('')
  //   setName('')
  //   setOtp('')
  //   setOptSent(false)
  //   setCanResend(false)
  //   setIsPhoneValidCheck(true)
  // }

  // const handleOTP = async (e: React.SyntheticEvent<EventTarget>) => {
  //   e.preventDefault()
  //   if (isPhoneValid(phone)) {
  //     setIsPhoneValidCheck(true)
  //     const response = await handleGenerateOTP(phone)
  //     console.log(response)
  //     if (response) {
  //       console.log('OTP SENT')
  //     }
  //   } else {
  //     setIsPhoneValidCheck(false)
  //   }
  // }

  // const reduceCounter = () => {
  //   if (counter === 1) {
  //     setCanResend(true)
  //   }
  //   setCounter(counter - 1)
  // }

  // useEffect(() => {
  //   if (counter > 0) {
  //     setTimeout(() => {
  //       reduceCounter()
  //     }, 1000)
  //   }
  // }, [counter])

  // useEffect(() => {
  //   reduceCounter()
  // }, [])

  // // console.log(isValidFullName(name))
  // // console.log(isEmailValid(email))
  // // console.log(isPhoneValid(phone))
  // // console.log(isOTPValid(otp))

  // const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
  //   e.preventDefault()
  //   // useUnigoFormSubmit()
  //   if (
  //     isValidFullName(name) &&
  //     isEmailValid(email) &&
  //     isPhoneValid(phone) &&
  //     isOTPValid(otp)
  //   ) {
  //     setisValidFullNameCheck(true)
  //     setIsEmailValidCheck(true)
  //     setIsPhoneValidCheck(true)
  //     setIsOTPValidCheck(true)

  //     submitUnigoFormFetcher({
  //       name,
  //       countryCode: '+91',
  //       email,
  //       phoneNumber: phone,
  //       otp: parseInt(otp),
  //     }).then(
  //       function (res: any) {
  //         console.log('pass', res)
  //         if (res.statusCode == 201) {
  //           setShowModal(true)
  //         }
  //       },
  //       function (err: any) {
  //         console.log('fail', err)
  //         if (err == true) {
  //           setOtpError(true)
  //         }
  //       }
  //     )
  //   } else {
  //     if (!isValidFullName(name)) setisValidFullNameCheck(false)
  //     else setisValidFullNameCheck(true)
  //     if (!isEmailValid(email)) setIsEmailValidCheck(false)
  //     else setIsEmailValidCheck(true)
  //     if (!isPhoneValid(phone)) setIsPhoneValidCheck(false)
  //     else setIsPhoneValidCheck(true)
  //     if (!isOTPValid(otp)) setIsOTPValidCheck(false)
  //     else setIsOTPValidCheck(true)
  //   }
  // }

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
                <TalkToCounsller />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TalkToCounsllerHome
