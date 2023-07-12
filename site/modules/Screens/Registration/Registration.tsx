import { useEffect, useState } from 'react'
import { Alert, Button, Typography } from '@components/ui'
import { useAuth } from '@lib/hooks/useAuth'
import { isPhoneValid } from '@lib/validations'
import { Layout } from './Layout'
import { TextInput } from '@components/ui/Input'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import s from '@modules/Screens/components.module.css'

type RegisterViewProps = {
  onOTPGet: () => void
}

const Register = ({ onOTPGet }: RegisterViewProps) => {
  // Form State
  const { otpSent, error, loading, handleRegister, handleGenerateOTP } =
    useAuth()

  const [mobile, setMobile] = useState('')
  const [firstName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [shouldRegister, setShouldRegister] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setUsername(localStorage.getItem('username') as string)
    localStorage.removeItem('fullName')
    localStorage.removeItem('shouldRegister')
  }, [])

  /*  const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
    localStorage.setItem('username', mobile)
    e.preventDefault()
    try {
      //handleRegister(mobile, firstName)

      if (shouldRegister) {
        handleRegister(mobile, firstName)
        setShouldRegister(false)
        localStorage.removeItem('shouldRegister')
      } else {
        setShouldRegister(true)
        localStorage.setItem('shouldRegister', 'true')
      }
    } catch (e) {
      

      toast.error('Something Went wrong. Please try again after some time')
    }
  } */

  const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
    localStorage.setItem('username', mobile)
    e.preventDefault()
    if (shouldRegister) {
      await handleRegister(mobile, firstName)
    } else {
      const response = await handleGenerateOTP(username)
      if (!response) {
        setShouldRegister(true)
        localStorage.setItem('shouldRegister', 'true')
      }
    }
  }

  useEffect(() => {
    if (otpSent) {
      onOTPGet()
    }
  }, [onOTPGet, otpSent])

  return (
    <Layout>
      <div className="lg:w-8/12 md:w-10/12 w-12/12  bg-white   shadow-none md:shadow-lg md:rounded-xl rounded-none">
        <form onSubmit={handleSubmit} className=" ">
          <div className=" px-6 pt-8 ">
            <div className="text-center sm:block hidden">
              <Typography weight={500} variant="heading2">
                Register Now
              </Typography>
            </div>
            <div className=" md:bg-[#f8f8f8] bg-none mt-10 flex-col sm:mt-5 w-full sm:h-56 md:h-44 lg:h-36 p-4 border-[1px] border-[#efefef] rounded-lg">
              <div className="">
                <Typography weight={500} variant="subHeading">
                  Instructions to fill registration form:
                </Typography>
                <Typography weight={500} variant="small">
                  <ul className="list-disc ml-4">
                    <li>
                      Enter your mobile number and an OTP will be sent to your
                      registered mobile number.
                    </li>
                    <li>
                      OTP will be used for verification of mobile number of
                      user.
                    </li>
                    <li>
                      Use your mobile number for logging in and post login, you
                      can fill or edit your nomination form.
                    </li>
                    <li>
                      The last date for registration and nomination is ____.
                    </li>
                  </ul>
                </Typography>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="flex w-full flex-col md:flex-row gap-4 p-6 ">
              <div className={'mb-4 w-full'}>
                <Typography>Full Name*</Typography>
                <TextInput
                  onChange={setFullName}
                  variant={'outlined'}
                  placeholder={'Enter your name'}
                />
              </div>
              <div className={'mb-4 w-full'}>
                <Typography>Mobile Number*</Typography>
                <TextInput
                  invalid={!isPhoneValid(mobile)}
                  onChange={setMobile}
                  variant={'outlined'}
                  placeholder={'Enter your mobile number'}
                />
                {
                  <div
                    className={` animated fadeIn flex gap-2 my-2  ${
                      shouldRegister ? '' : 'hidden'
                    }`}
                  >
                    <img src="/warning.svg" alt="warning" height="12px" />
                    <span className={s.warning}>User Already Exist!.</span>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className=" w-full mt-20  border-t-[1px] border-[#D9DCE1] h-2"></div>
          <div className="flex justify-center pb-5 pt-4">
            {error && <Alert message={error} type="error" />}
            <Button
              size="large"
              type="submit"
              loading={loading}
              disabled={!isPhoneValid(mobile)}
              className="w-80 md:w-[432px] md:h-14 h-12  font-bold "
            >
              <Typography weight={700} variant="heading4">
                Register
              </Typography>
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Register
