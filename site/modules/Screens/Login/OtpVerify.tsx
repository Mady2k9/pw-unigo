import { useEffect, useState } from 'react'
import { Alert, Button, Typography } from '@components/ui'
import { useUI } from '@components/ui/context'
import { useAuth } from '@lib/hooks/useAuth'
import { isOTPValid } from '@lib/validations'
import OtpInput from 'react-otp-input'
import s from '@styles/auth/auth.module.css'
import { useRouter } from 'next/router'
import p from '@modules/Screens/components.module.css' // TODO - Changes module to tailwind
//import { Layout } from '@modules/screens/Login/Layout'
import { Layout } from '@modules/Screens/Login/Layout'

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

const OTPView = ({ onReset }: { onReset: any }) => {
  const [navigating, setNavigating] = useState(false)
  const [username, setUsername] = useState('')
  const [canResend, setCanResend] = useState(false)
  const [_otp, _setOtp] = useState('')
  const { resendOTP, reset, handleLogin, error, loading } = useAuth()
  const { user, refeshCohort } = useUI()
  const router = useRouter()

  useEffect(() => {
    setUsername(localStorage.getItem('username') as string)
  }, [])

  useEffect(() => {
    if (user && !localStorage.getItem('shouldRegister')) {
      setNavigating(true)
      router.replace('/')
    }
  }, [user])

  const handleSubmit = async () => {
    setNavigating(false)
    const success = await handleLogin(_otp, username)
    if (success) {
      router.push('profile-details')
    }
  }

  const handleOnChange = (o: string) => {
    _setOtp(o)
  }
  return (
    <Layout>
      <div className="lg:px-0 lg:w-7/12  sm:w-full mx-auto w-full px-5  sm:px-4">
        <div className={'flex-1 flex flex-col justify-center px-3'}>
          <div className="flex flex-col mb-6">
            <div className={p.login_otp_heading}>
              Please enter your <strong>OTP</strong>
            </div>
            <div className={p.login_otp_subheading}>
              A 6 digit OTP has been sent to{' '}
              <strong>{`+91 ${username}`}</strong>
              <div
                onClick={() => {
                  reset()
                  onReset()
                }}
              ></div>
            </div>

            <a className={p.login_otp_change} href="/login">
              Change Number
            </a>
          </div>
        </div>

        <div className="flex flex-col space-b-3">
          <div className={'flex justify-center'}>
            <OtpInput
              containerStyle="mb-4"
              inputStyle={s.inputStyle}
              focusStyle={s.focusStyle}
              // placeholder="------"
              shouldAutoFocus
              isInputNum
              value={_otp}
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
            loading={loading || navigating}
            disabled={!isOTPValid(_otp)}
            className="w-full md:w-[432px] md:h-14 h-12  font-bold "
          >
            Login
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default OTPView
