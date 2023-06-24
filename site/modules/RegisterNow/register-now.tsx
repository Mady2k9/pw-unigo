import React from 'react'
import cn from 'clsx'
import s from './register-now.module.css'
import Image from 'next/image'
import { Typography, Button } from '@components/ui'
import Container from '@components/ui/Container/Container'
import TextInput from '@components/ui/Input/TextInput'
export interface RegisterNowProps {
  data: any
}
const RegisterNow: React.FC<RegisterNowProps> = (props) => {
  const rootClassName = cn(s.root, {})
  return (
    <div className={s.bg}>
      <Container className="mx-auto xl:max-w-6xl w-full px-0" clean>
        <div className="flex justify-center">
          <div className={s.box}>
            <div className="px-5">
              <div className="text-center mt-10 sm:block hidden">
                <Typography weight={500} variant="heading2">
                  Register Now
                </Typography>
              </div>
              <div className="flex justify-center mt-10 flex-col sm:mt-5 ">
                <div className={s.bg1}>
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
                        Use your mobile number for logging in and post login,
                        you can fill or edit your nomination form.
                      </li>
                      <li>
                        The last date for registration and nomination is ____.
                      </li>
                    </ul>
                  </Typography>
                </div>
              </div>
              <div className="mx-auto lg:flex md:flex gap-2 mt-10">
                <div className="md:w-1/2 w-full">
                  <div className="mb-6">
                    <label
                      htmlFor="full_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <Typography weight={500} variant="regular">
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
                        className="w-full"
                        id="text-input-1"
                        onChange={function noRefCheck() {}}
                        placeholder="Enter your Name"
                        preElement={[]}
                        setRef={function noRefCheck() {}}
                        spellCheck="false"
                        variant="flat"
                      />
                    </Typography>
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  <div className="mb-6">
                    <label
                      htmlFor="mobile_number"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mobile Number<span className="text-red-500">*</span>
                    </label>
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
                      className="w-full"
                      id="text-input-1"
                      onChange={function noRefCheck() {}}
                      placeholder="Enter you Mobile Number"
                      preElement={[]}
                      setRef={function noRefCheck() {}}
                      spellCheck="false"
                      variant="flat"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={s.border}></div>
            <Container className="mx-auto xl:max-w-6xl w-full">
              <Button
                className={s.btn}
                Component="PW"
                postIcon={[]}
                preIcon={[]}
                size="tiny"
                type="submit"
                variant="secondary"
              >
                Register
              </Button>
            </Container>
            <div className={s.box1}></div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default RegisterNow
