import React from 'react'
import { useState } from 'react'
import { Typography } from '@components/ui'
import { Select } from '@components/ui'
import { TextInput } from '@components/ui'
import { CreditCard } from '@components/icons'
import Marvel from '@assets/images/profile_assets/Group 625747.svg'
import { Button } from '@components/ui'
import Image from 'next/image'
import { displayValue } from '@tanstack/react-query-devtools/build/lib/utils'
const StepOne = () => {
  const [date, setDate] = useState('13 june 2023')
  const [name, setName] = useState('John Snow')

  return (
    <>
      <div className="h-screen w-full  flex justify-center">
        <div className="md:bg-[#F8F8F8] w-full md:w-[90%] lg:w-[85%] h-fit  rounded-xl lg:p-3 items-center relative">
          <div className="w-full h-fit p-4 flex my-[7px] lg:p-3">
            <div className=" w-fit md:w-[248px] h-full text-[14px]  lg:text-[16px] text-left mr-4 md:mr-[78px]">
              Registration Date:
            </div>
            <div className="w-fit md:w-2/3 h-full font-semibold  text-[14px] lg:text-base md:text-left ">
              {date}
            </div>
          </div>
          <div className="w-full  h-fit md:my-2 flex md:p-3 p-4 lg:rounded-xl bg-[#F8F8F8] md:bg-white items-center ">
            <div className=" text-base md:text-lg font-bold ">
              Personal Information
            </div>
            <div className="text-[#BF2734] text-[14px] md:pt-1 pl-1  h-fit  w-fit">
              (*Mandatory Fields)
            </div>
          </div>
          <div className="w-full h-fit p-4 flex">
            <div className=" w-fit md:w-[248px] h-full text-[14px]  md:mr-[78px] lg:text-[16px] text-left mr-4">
              Full name of applicant:
            </div>
            <div className="w-fit md:w-2/3 h-full font-semibold  text-[14px] lg:text-base md:text-left ">
              {name}
            </div>
          </div>
          <div className="h-fit w-full md:flex p-4 mb-8">
            <div className=" w-1/2 md:w-1/3 h-fit flex">
              <div className="my-2 md:m-0">
                <Typography
                  capitalize
                  maxLines={3}
                  onClick={function noRefCheck() {}}
                  variant="small"
                  weight={500}
                >
                  Class
                </Typography>
              </div>
              <div className="text-[#BF2734]">
                <Typography
                  capitalize
                  maxLines={3}
                  onClick={function noRefCheck() {}}
                  variant="small"
                  weight={500}
                >
                  *
                </Typography>
              </div>
            </div>

            <div className="md:w-[328px] md:h-[48px] w-full  ">
              <div className=" md:w-[328px] md:h-[48px] w-full ">
                <Select
                  className=""
                  onChange={function noRefCheck() {}}
                  options={[
                    {
                      id: 1,
                      name: 'Class 8th',
                    },
                    {
                      id: 2,
                      name: 'Class 9th',
                    },
                    {
                      id: 3,
                      name: 'Class 10th',
                    },
                    {
                      id: 3,
                      name: 'Class 11th',
                    },
                  ]}
                  placeholder="Select Class"
                  shadow
                  withTarget
                />
                <div className="md:p-1 flex md:flex-none">
                  <div className="px-1 py-[2px] md:p-1 md:pt-[2px]">
                    <Image src={Marvel} width={12} height={12} />
                  </div>
                  <div>
                    <Typography
                      capitalize
                      maxLines={3}
                      onClick={function noRefCheck() {}}
                      variant="tiny"
                      weight={500}
                    >
                      Class can’t be changed once details are submitted
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit p-4 md:p-2 md:mb-8 md:flex">
            <div className="w-full  md:w-1/3 h-full text-[10px] md:text-[14px] lg:text-xl text-left p-1 ">
              <Typography
                capitalize
                maxLines={3}
                onClick={function noRefCheck() {}}
                variant="small"
                weight={500}
              >
                Alternative mobile no.:
              </Typography>
            </div>
            <div className="w-full md:w-2/3 h-full text-[10px] font-semibold  md:text-[14px] lg:text-xl text-left">
              <div className="w-full md:w-[328px] rounded-md bg-white">
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
                  className="  w-[328px] h-[48px] bg-white"
                  id="text-input-1"
                  label="Mobile Number"
                  onChange={function noRefCheck() {}}
                  placeholder="Enter Text"
                  preElement={
                    <div className="text-[16px] font-semibold bg-white  p-2 m-auto">
                      <select className=" border-none bg-transparent">
                        <option value="india">IN +91</option>
                      </select>
                    </div>
                  }
                  setRef={function noRefCheck() {}}
                  spellCheck="false"
                  variant="flat"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-fit  p-4 md:p-2 md:flex">
            <div className=" w-full  md:w-1/3 h-full text-[10px] md:text-[14px] lg:text-xl text-left p-1 ">
              <Typography
                capitalize
                html=""
                maxLines={3}
                onClick={function noRefCheck() {}}
                variant="small"
                weight={500}
              >
                Email address:
              </Typography>
            </div>
            <div className=" w-full md:w-2/3 h-full text-[10px] font-semibold md:text-[14px] lg:text-xl text-left">
              <div className=" w-full md:w-[328px] bg-white rounded-md ">
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
                  className=""
                  id="text-input-1"
                  label="Email id"
                  variant="flat"
                  onChange={function noRefCheck() {}}
                  placeholder="Enter Text"
                  preElement={[]}
                  setRef={function noRefCheck() {}}
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
          <div className="w-full p-4 fixed bottom-0 md:hidden">
            <Button
              Component="PW"
              postIcon={[]}
              preIcon={[]}
              variant="primary"
              type="submit"
              className="w-full h-full "
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepOne
