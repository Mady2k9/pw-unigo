import { useState } from 'react'
import OtpVerify from './OtpVerify'
import Login from './Login'

const LoginScreen = () => {
  const [authState, setAuthState] = useState('LOGIN' as 'LOGIN' | 'OTP')

  if (authState === 'OTP') {
    return (
      <OtpVerify
        onReset={() => {
          setAuthState('LOGIN')
        }}
      />
    )
  }

  if (authState === 'LOGIN') {
    return (
      <Login
        onOTPGet={() => {
          setAuthState('OTP')
        }}
      />
    )
  }
  return null
}

export default LoginScreen
