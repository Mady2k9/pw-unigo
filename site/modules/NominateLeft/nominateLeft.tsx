import React from 'react'
import ProfileLogo from '@assets/images/pw.png'
import Image from 'next/image'
import Phnicon from '@components/icons/Mail'
import profileIcon from 'public/profileIcon.svg'
import formIcon from 'public/formIcon.svg'
import docsIcon from 'public/uploadDocumentsIcon.svg'
import logoutIcon from 'public/log-out.svg'
import announcementIcon from 'public/92424-emoji-announcement.svg'

function nominateLeft() {
  return (
    <>
      <div className="w-[240px] h-[1024px] bg-[#F8F8F8] max-[640px]:w-screen max-[640px]:h-[20%]">
        <div className="text-center pt-8 max-[640px]:hidden mb-[60px]">
          <Image
            height={90}
            width={100}
            src={ProfileLogo}
            alt="Profile-photo"
          />
          <p className="text-base ">John Snow</p>
          <div className="flex justify-center items-center">
            <span className="stroke-black stroke-1">
              <Phnicon />
            </span>
            <p className="text-xs text-[#757575]"> +91 7864546474</p>
          </div>
        </div>

        <div className="max-[640px]:flex max-[640px]:justify-between max-[640px]:mx-2 max-[640px]:pb-4">
          <div>
            <p className="text-[#1B7938] ml-8 mt-1 mb-1">Step 1</p>
            <div className="border border-[#E4E7EA] rounded-md mx-8 flex items-center max-[640px]:w-[100px] max-[640px]:h-[50px]  bg-white max-[640px]:flex-col max-[640px]:m-0 ">
              <span className="pt-1 ml-1 max-[640px]:h-[20px] max-[640px]:w-[20px]">
                <Image src={profileIcon} />
              </span>
              <p className=" ml-3 max-[640px]:mt-2 max-[640px]:text-[10px] max-[640px]:w-[100px] max-[640px]:ml-0 max-[640px]:text-center">
                Profile Details
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#5A4BDA] ml-8 mt-1 mb-1">Step 2</p>
            <div className="border border-[#E4E7EA] rounded-md mx-8 flex items-center max-[640px]:w-[100px] max-[640px]:h-[50px] bg-white max-[640px]:flex-col max-[640px]:m-0 ">
              <span className="pt-1 ml-1 max-[640px]:h-[20px] max-[640px]:w-[20px]">
                <Image src={formIcon} />
              </span>
              <p className="ml-3 max-[640px]:text-[10px] max-[640px]:text-center max-[640px]:mt-2 max-[640px]:ml-0">
                Nomination Form
              </p>
            </div>
          </div>
          <div>
            <p className="text-[#757575] ml-8 mt-1 mb-1">Step 3</p>
            <div className="border border-[#E4E7EA] rounded-md mx-8 flex items-center max-[640px]:w-[100px] max-[640px]:h-[50px] p-[3px] bg-[#E4E7EA] max-[640px]:flex-col max-[640px]:m-0">
              <span className="ml-1 max-[640px]:h-[20px] max-[640px]:w-[20px]">
                <Image src={docsIcon} />
              </span>
              <p className="ml-3 max-[640px]:mt-1 text-[#757575] max-[640px]:text-[10px] max-[640px]:text-center max-[640px]:ml-0">
                Upload documnts
              </p>
            </div>
          </div>
        </div>

        <div className=" ml-8 mt-[8rem] flex max-[640px]:hidden absolute bottom-6">
          <span className="">
            <Image src={announcementIcon} />
          </span>
          <p className=" text-[#3D3D3D] self-center">Important Notices</p>
        </div>
        <hr className="w-[240px] border-1 border-black border-opacity-20 max-[640px]:hidden absolute bottom-8" />
        <div className="flex ml-12 max-[640px]:hidden absolute bottom-0">
          <Image src={logoutIcon} />
          <p className="text-base font-bold ml-2">Log Out</p>
        </div>
      </div>
    </>
  )
}

export default nominateLeft
