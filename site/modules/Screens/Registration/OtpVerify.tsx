import { useEffect, useState } from 'react'
import { Alert, Button, Typography } from '@components/ui'
import { useUI } from '@components/ui/context'
import { useAuth } from '@lib/hooks/useAuth'
import { isOTPValid } from '@lib/validations'
import { Layout } from './Layout'
import OtpInput from 'react-otp-input'
import s from '@styles/auth/auth.module.css'
import { useRouter } from 'next/router'
import p from '@modules/auth/components/components.module.css'
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
    setMobile(localStorage.getItem('userMobile') as string)
  }, [])

  const handleSubmit = async () => {
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
  }

  const handleOnChange = (val: string) => {
    setOtp(val)
  }

  return (
    <Layout>
      <div className="lg:px-0 lg:w-7/12  sm:w-full mx-auto w-full px-5  sm:px-4">
        <div className={'flex-1 flex flex-col justify-center px-3'}>
          <div className="flex flex-col mb-6">
            <div className={p.login_otp_subheading}>
              A 6 digit OTP has been sent to <strong>{`+91 ${mobile}`}</strong>
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

          {error && <Alert message={error} type="error" />}
          <Button
            type="button"
            onClick={handleSubmit}
            loading={loading}
            disabled={!isOTPValid(otp)}
          >
            Login
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default RegOtpView
