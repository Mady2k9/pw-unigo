import React from 'react'
import s from './sidebar.module.css'
import Image from 'next/image'
import { Button, Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'
export interface sidebarUploadProps {
  name: string
  phone: string
}

const sidebarUpload: React.FC<sidebarUploadProps> = (props) => {
  const { name } = props
  const { phone } = props

  return (
    <div className="sm:w-[235px]  flex pt-4 sm:justify-center">
      <div className={s.mainContainer}>
        <div className={s.container}>
          <img className="mx-auto" src="/user_profile.svg" alt="user profile" />
          <p className="text-[16px] ">{name}</p>
          <div className="flex justify-center items-center">
            <span className="stroke-black">
              <img className="mr-2" src="/phone.svg" alt="phone" />
            </span>
            <p className="text-[12px] text-[#757575]">{phone}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mx-2">
            <div className="flex flex-col items-center">
              <img src="/dot-d.svg" alt="dot" />
              <div className="w-[2px]  h-[60px] bg-[#1B7938]  inline-block"></div>
              <img src="/dot-d.svg" alt="dot" />
              <div className="w-[2px]  h-[60px] bg-[#1B7938]  inline-block"></div>
              <img src="/dot-a.svg" alt="dot" />
            </div>
          </div>
          <div className="">
            <div className="mb-2">
              <p className="text-[#1B7938] text-[12px]">Step 1</p>
              <div className={s.iconContainer}>
                <img className="mx-2" src="/step_1c.svg" alt="step1" />
                <p className="text-[14px]">Profile Details</p>
              </div>
            </div>

            <div className="mb-2">
              <p className="text-[#1B7938] text-[12px]">Step 2</p>
              <div className={s.iconContainer}>
                <img className="mx-2" src="/step_2c.svg" alt="step1" />
                <p className="text-[14px]">Nomination Form</p>
              </div>
            </div>

            <div className="mb-2">
              <p className="text-[#1B7938] text-[12px]">Step 3</p>
              <div className={s.iconContainer}>
                <img className="mx-2" src="/step_3c.svg" alt="step1" />
                <p className="text-[14px]">Upload Documents</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[30%] w-[235px]">
          <div className=" ml-8 flex  ">
            <img className="w-[48px]" src="/profile_ani.gif" alt="animated" />
            <p className=" text-[#3D3D3D] self-center">Important Notices</p>
          </div>
          <hr className={s.linecss} />
          <div className="flex justify-center">
            <span className={s.logoutHidden}>
              <img
                className="mt-1 mr-2 w-[20px]"
                src="/log_outp.svg"
                alt="log out"
              />
            </span>
            <p className={s.logOutText}>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sidebarUpload
