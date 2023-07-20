import { useState } from 'react'
import OtpVerify from './OtpVerify'
import Registration from './Registration'

const Register = () => {
  const [authState, setAuthState] = useState('REGISTER' as 'REGISTER' | 'OTP')
  const [fullName, setFullName] = useState('')
  const [mobile, setMobile] = useState('')

  if (authState === 'OTP') {
    return (
      <OtpVerify
        onReset={() => {
          setAuthState('REGISTER')
        }}
      />
    )
  }

  if (authState === 'REGISTER') {
    return (
      <Registration
        onOTPGet={(fullName: string, mobile: string) => {
          setFullName(fullName)
          setMobile(mobile)
          setAuthState('OTP')
        }}
        phone={mobile}
        name={fullName}
      />
    )
  }
  return null
}

export default Register
