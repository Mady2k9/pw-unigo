import { useState } from 'react'
import OtpVerify from './OtpVerify'
import Registration from './Registration'

const Register = () => {
  const [authState, setAuthState] = useState('REGISTER' as 'REGISTER' | 'OTP')

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
        onOTPGet={() => {
          setAuthState('OTP')
        }}
      />
    )
  }
  return null
}

export default Register
