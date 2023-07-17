import { useEffect, useState } from 'react'
import { Alert, Button, Typography } from '@components/ui'
import { useUI } from '@components/ui/context'
import { useAuth } from '@lib/hooks/useAuth'
import { isOTPValid } from '@lib/validations'
import { Layout } from './Layout'
import OtpInput from 'react-otp-input'
import s from '@styles/auth/auth.module.css'
import { useRouter } from 'next/router'
import uuid from 'react-uuid'
import { tokenFetcher } from '@modules/auth/lib'

const ResendOTP = ({ canResend, setCanResend, resendOTP }: any) => {
  const [counter, setCounter] = useState(30)
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
  if (canResend)
    return (
      <Button
        type="button"
        variant="naked"
        onClick={() => {
          resendOTP()
          setCounter(30)
          setCanResend(false)
          setTimeout(() => {
            reduceCounter()
          }, 1000)
        }}
      >
        Resend OTP
      </Button>
    )
  return (
    <Typography>
      <strong className="text-[14px] leading-[22px] text-[#5A4BDA]">
        00:{String(counter).padStart(2, '0')}
      </strong>
    </Typography>
  )
}
const RegOtpView = ({ onReset }: { onReset: any }) => {
  const [mobile, setMobile] = useState('')
  const [canResend, setCanResend] = useState(false)
  const [otp, setOtp] = useState('')
  const { resendOTP, reset, handleLogin, error, loading } = useAuth()
  const { user } = useUI()
  const router = useRouter()

  useEffect(() => {
    // TODO - Should come from the query params
    setMobile(localStorage.getItem('username') as string)
  }, [])

  /* const handleSubmit = async () => {
    const dataToSend = {
      otp,
      client_id: 'system-admin',
      client_secret: 'KjPXuAVfC5xbmgreETNMaL7z',
      grant_type: 'password',
      latitude: 0,
      longitude: 0,
      organizationId: process.env.NEXT_PUBLIC_PP_ORG_ID,
      username: mobile,
    }

    const response = await tokenFetcher(dataToSend, uuid())
    if (response) {
      localStorage.setItem('user', JSON.stringify(response?.data?.user))
      localStorage.setItem('token', response?.data?.access_token)
      localStorage.setItem('refresh_token', response?.data?.refresh_token)
      router.push('profile-details')
    }
  } */

  const handleSubmit = async () => {
    //setNavigating(false)
    const success = await handleLogin(otp, mobile)
    if (success) {
      router.push('profile-details')
    }
  }

  const handleOnChange = (val: string) => {
    setOtp(val)
  }

  return (
    <Layout>
      <div className="bg-white h-[568px] md:w-[445px] sm:w-full mx-auto w-full px-5  sm:px-4 shadow-none md:shadow-lg md:rounded-xl rounded-none ">
        <div className="flex justify-center">
          <img src="/computer-otp.gif" alt="" width={174} />
        </div>
        <div className={'flex justify-center px-3'}>
          <div className="mb-6 text-center">
            <Typography variant="heading4" weight={600}>
              Verification
            </Typography>
            <Typography>Enter the OTP sent on your phone number</Typography>
            <div className="inline-flex items-center gap-2">
              <Typography weight={600}>{`+91 ${mobile}`} </Typography>
              <a href="register">
                <img src="/edit.svg" alt="edit-number" />
              </a>
              <div
                onClick={() => {
                  reset()
                  onReset()
                }}
              ></div>
            </div>
            <div
              onClick={() => {
                reset()
                onReset()
              }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col space-b-3">
          <div className=" text-center">
            <Typography variant="tiny"></Typography>
            Please enter the verification code below.
          </div>
          <div className={'flex justify-center'}>
            <OtpInput
              containerStyle="mb-4"
              inputStyle={s.inputStyle}
              focusStyle={s.focusStyle}
              shouldAutoFocus
              isInputNum
              value={otp}
              onChange={handleOnChange}
              numInputs={6}
              separator={<span> </span>}
            />
          </div>
          <div className={'mb-10 mx-auto '}>
            <ResendOTP
              resendOTP={() => {
                resendOTP()
              }}
              canResend={canResend}
              setCanResend={setCanResend}
            />
          </div>

          {error && <Alert message={error?.message} type="error" />}
          <div className="text-center">
            <Button
              type="button"
              onClick={handleSubmit}
              loading={loading}
              disabled={!isOTPValid(otp)}
              size="large"
              className="w-[148px]"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RegOtpView
