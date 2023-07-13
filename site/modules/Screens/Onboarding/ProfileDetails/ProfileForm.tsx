import React, { useState } from 'react'
import s from '@modules/Screens/components.module.css'
import { Button } from '@components/ui'
import { Select } from '@components/ui'
import { TextInput } from '@components/ui'
import { CLASSES_ARRAY } from '@config/types/classes'
<<<<<<< HEAD
import { isPhoneValid } from '@lib/validations'
=======
import { StudentDataProps } from './types'
import { addSuffixToNumber } from '@utils/helps'
>>>>>>> 7472edbe1c80951ee603ae8ed31327776b04d1ae

export interface ProfileFormProps {
  studentData: StudentDataProps
  setProfileData: (val: any) => void
  registrationDate: string
  isEditEnabled: boolean
}

<<<<<<< HEAD
const Content: React.FC<contentProps> = (props) => {
  const { name, profileData, setProfileData, registrationDate } = props
  const [countryNumber, setCountryNumber] = useState(false)
=======
const Content = ({
  studentData,
  setProfileData,
  registrationDate,
  isEditEnabled,
}: ProfileFormProps) => {
>>>>>>> 7472edbe1c80951ee603ae8ed31327776b04d1ae
  const onClassChange = (classVal: string) => {
    setProfileData({ ...studentData, class: classVal })
  }
  const showCountryNumber = () => {
    setCountryNumber(true)
  }
  return (
    <div className="w-full bg-white overflow-y-scroll z-0">
      <div className=" flex justify-center">
        <div className="md:bg-[#F8F8F8] w-full md:w-[90%] lg:w-[85%] h-fit  rounded-b-xl lg:p-3 items-center relative">
          <div className="p-3 flex my-[7px]">
            <div className={s.left_section_text}>Registration Date:</div>
            <div className={s.right_section_text}>{registrationDate}</div>
          </div>
          <div className="w-full  px-3 py-4 flex lg:rounded-xl bg-[#F8F8F8] md:bg-white items-center ">
            <div className=" text-base md:text-lg font-bold ">
              Personal Information
            </div>
            <div className={s.alert}>&nbsp;(*Mandatory Fields)</div>
          </div>
          <div className="w-full h-fit p-4 flex">
            <div className={s.left_section_text}>Full name of Applicant:</div>
            <div className={s.right_section_text}>{studentData.name}</div>
          </div>
          <div className="w-full h-fit p-4 flex sm:flex-row flex-col">
            <div className={s.left_section_text}>
              Class<span className={s.alert}>*</span>:
            </div>
            <div className={s.right_section_input}>
              {studentData.class ? (
                <p>{`Class ${addSuffixToNumber(+studentData.class)}`}</p>
              ) : (
                <Select
                  onChange={onClassChange}
                  options={CLASSES_ARRAY}
                  placeholder="Select Class"
                />
              )}

              <div className="p-1 flex md:flex-none">
                <div className="px-1 py-[2px] md:p-1 md:pt-[2px]">
                  <img className="" src="/i.svg" alt="icon" />
                </div>
                <div className="text-[12px] align-middle text-[#3D3D3D]">
                  {studentData.class
                    ? 'Class cant be changed now '
                    : 'Class can’t be changed once details are submitted'}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit p-4 flex sm:flex-row flex-col">
            <div className={s.left_section_text}>Alternative Mobile No.:</div>
            <div className={s.right_section_input}>
              <div className="w-full rounded-md bg-white">
                <TextInput
                  className="bg-white"
<<<<<<< HEAD
                  label="Phone Number"
                  onChange={(val) =>
                    setProfileData({ ...profileData, alternateNumber: val })
=======
                  label={
                    isEditEnabled && studentData.alternateNumber
                      ? 'Mobile Number'
                      : ''
>>>>>>> 7472edbe1c80951ee603ae8ed31327776b04d1ae
                  }
                  onChange={(mobileNumber) =>
                    setProfileData({
                      ...studentData,
                      alternateNumber: mobileNumber,
                    })
                  }
                  readOnly={!isEditEnabled}
                  value={studentData.alternateNumber}
                  placeholder="Enter number"
                  maxLength={10}
                  onClick={showCountryNumber}
                  preElement={
<<<<<<< HEAD
                    <div className="text-[16px] font-semibold bg-white  p-2 m-auto">
                      {countryNumber === true ? (
                        <select className=" border-none bg-transparent">
                          <option value="india">IN +91</option>
                        </select>
                      ) : (
                        ''
                      )}
                    </div>
=======
                    isEditEnabled ? (
                      <div className="text-[16px] font-semibold bg-white  p-2 m-auto">
                        <select className=" border-none bg-transparent">
                          <option value="india">IN +91</option>
                        </select>
                      </div>
                    ) : null
>>>>>>> 7472edbe1c80951ee603ae8ed31327776b04d1ae
                  }
                  variant="flat"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-fit p-4 flex sm:flex-row flex-col">
            <div className={s.left_section_text}> Email address:</div>
            <div className={s.right_section_input}>
              <div className=" w-full bg-white rounded-md ">
                <TextInput
                  label={isEditEnabled && studentData.email ? 'Email' : ''}
                  value={studentData.email}
                  readOnly={!isEditEnabled}
                  onChange={(email) =>
                    setProfileData({ ...studentData, email: email })
                  }
                  placeholder="Email id"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
          <div className="w-full p-4 md:hidden">
            <Button Component="PW" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
