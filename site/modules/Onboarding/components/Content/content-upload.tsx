import React, { ChangeEvent, useState } from 'react'
import s from './content-upload.module.css'
import Image from 'next/image'
import { Button, Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'
import { Select } from '@components/ui'
import { TextInput } from '@components/ui'

export interface contentUploadProps {}

const contentUpload: React.FC<contentUploadProps> = (props) => {
  const [file, setFile] = useState<File>()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
      console.log(e.target.files)
      handleClick()
    }
  }
  const [upload, setUpload] = useState(true)
  function handleClick() {
    setUpload(!upload)
  }
  return (
    <div className="w-full bg-white overflow-y-scroll">
      <div className=" flex justify-center">
        <div className="md:bg-[#F8F8F8] w-full md:w-[90%] lg:w-[85%] h-fit  rounded-b-xl lg:p-3 items-center relative">
          <div className="w-full ">
            <div className="bg-white rounded-[8px] px-[8px] sm:px-[24px] py-[12px]">
              <div className="text-[16px] font-semibold mb-2">
                Instructions for Upload Document:
              </div>
              <ol className="bg-white list-disc px-[12px]">
                <li>
                  For report card please upload the PDF with all the pages
                  including front section of your report card .
                </li>
                <li>
                  Passport size photo file size should not exceed more than 20
                  KB
                </li>
                <li>
                  Upload front and back side of Adhar card and the file size
                  should not exceed more than 20 KB each
                </li>
                <li>
                  Upload supporting documents i.e. certificate in front of exams
                  selected.
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-[#F8F8F8] sm:py-[12px] ">
            <div className="pt-6 flex sm:rounded-[8px] sm:bg-white bg-[#F8F8F8] px-[16px] py-[8px] lg:p-[16px]">
              <div className="mr-[2px] text-[16px] font-bold">
                Student Documents
              </div>
              <div className="text-[#BF2734] pt-1 text-[12px] ml-1">
                (*Mandatory Fields)
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8F8] justify-evenly xl:justify-between flex  flex-wrap py-[12px]">
            <div className="w-[328px] h-[208px] p-[12px] bg-white rounded-[4px] my-[4px]">
              <div className=" flex items-center">
                <div className="bg-[#FFF6E5] m-[4px] p-[4px] h-[32px] w-[32px] rounded-lg">
                  <img src="/profile-picture.svg" alt="profile icon" />
                </div>
                <div>
                  <div className="text-[14px] sm:text-[16px] font-semibold">
                    Student Passport size photo
                  </div>
                  <div className="text-[12px] sm:text-[14px] font-[400]">
                    Upload your photo here...
                  </div>
                </div>
              </div>
              <div>
                {!file ? (
                  <div className="border-dashed border-[2px] border-[#D2CCFF] rounded-[8px] mt-[4px] px-[65px] py-[22px] ">
                    <div className="items-center flex flex-col  ">
                      <img src="/upload.svg" alt="upload icon" />
                      <div className="w-[107px] h-[32px] mt-[4px]">
                        <input
                          type="file"
                          placeholder="Choose File"
                          onChange={handleChange}
                          className="file:border-[1px] file:border-[#5A4BDA] file:m-auto w-full h-full rounded-md file:w-full file:h-full file:rounded-md text-[12px] file:text-[#5A4BDA] file:bg-white"
                        />
                      </div>
                      <div className="text-[10px] mt-[2px]">
                        50 KB max file size, JPG or PNG
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="border-dashed border-[2px] border-[#D2CCFF] bg-[#F9F9FF] rounded-[8px] mt-[4px] px-[65px] py-[22px] ">
                    {upload ? (
                      <div className="flex flex-col items-center ">
                        <div className=" text-[12px] leading-[18px]">
                          {file.name}
                        </div>
                        <div className="flex justify-between w-[114px] mt-[16px] mb-[8px]">
                          <div className="w-[74px] h-[32px] relative ">
                            <div className="z-10 w-full h-full border-[1px]  text-[12px] border-[#5A4BDA] flex rounded-[4px] ">
                              <div className="m-auto text-[#5A4BDA]">Edit</div>
                            </div>
                            <input
                              type="file"
                              onChange={handleChange}
                              className="w-[74px] file:w-[74px] file:h-[32px] h-[32px] absolute top-0 opacity-0"
                            />
                          </div>
                          <div className="w-[32px] h-[32px] bg-[#5A4BDA] flex rounded-[4px]">
                            <img
                              src="/eye.svg"
                              alt="preview logo"
                              className="h-[20px] w-[20px] m-auto
                            "
                            />
                          </div>
                        </div>
                        <div className="text-[10px]">
                          50 KB max file size, JPG or PNG
                        </div>
                      </div>
                    ) : (
                      <div className="items-center flex flex-col  ">
                        <img src="/upload.svg" alt="upload icon" />
                        <div className="mt-[4px]">
                          <Button
                            Component="PW"
                            postIcon={[]}
                            preIcon={[]}
                            size="tiny"
                            variant="primary"
                            onClick={handleClick}
                          >
                            Upload
                          </Button>
                        </div>
                        <div className="text-[10px] mt-[2px]">{file.name}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="w-[328px] h-[208px] p-[12px] bg-white rounded-[4px] my-[4px]">
              <div className=" flex items-center">
                <div className="bg-[#FFF6E5] px-[6px] py-[9px] h-[32px] w-[32px] rounded-lg">
                  <img src="/adhar_icon.svg" alt="profile icon" />
                </div>
                <div>
                  <div className="text-[14px] sm:text-[16px] font-semibold">
                    Student Adhar card
                  </div>
                  <div className="text-[12px] sm:text-[14px] font-[400]">
                    Upload Adhar Card (Front & Back)
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="border-dashed border-[2px] border-[#D2CCFF] rounded-[8px] mt-[4px]  w-[147px] p-[4px] ">
                  <div className="items-center flex flex-col  ">
                    <div className="text-[12px] text-right z-10 w-full">
                      Front
                    </div>
                    <img src="/upload.svg" alt="upload icon" />
                    <div className="w-[107px] h-[32px] mt-[4px]">
                      <input
                        type="file"
                        placeholder="Choose File"
                        className="file:border-[1px] file:border-[#5A4BDA] file:m-auto w-full h-full rounded-md file:w-full file:h-full file:rounded-md text-[12px] file:text-[#5A4BDA] file:bg-white"
                      />
                    </div>
                    <div className="text-[10px] mt-[2px] text-center px-[16px]">
                      200 KB max file size JPG, PNG or Pdf
                    </div>
                  </div>
                </div>
                <div className="border-dashed border-[2px] border-[#D2CCFF] rounded-[8px] mt-[4px]  w-[147px] p-[4px]">
                  <div className="items-center flex flex-col ">
                    <div className="text-[12px] text-right z-10 w-full">
                      Back
                    </div>
                    <img src="/upload.svg" alt="upload icon" />
                    <div className="w-[107px] h-[32px] mt-[4px]">
                      <input
                        type="file"
                        placeholder="Choose File"
                        className="file:border-[1px] file:border-[#5A4BDA] file:m-auto w-full h-full rounded-md file:w-full file:h-full file:rounded-md text-[12px] file:text-[#5A4BDA] file:bg-white"
                      />
                    </div>
                    <div className="text-[10px] mt-[2px] text-center px-[16px]">
                      200 KB max file size JPG, PNG or Pdf
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[328px] h-[208px] p-[12px] bg-white rounded-[4px] my-[4px]">
              <div className=" flex items-center">
                <div className="bg-[#FFF6E5] m-[4px] p-[4px] h-[32px] w-[32px] rounded-lg">
                  <img src="/report_icon.svg" alt="profile icon" />
                </div>
                <div>
                  <div className="text-[14px] sm:text-[16px] font-semibold">
                    Student latest Report card
                  </div>
                  <div className="text-[12px] sm:text-[14px] font-[400]">
                    Upload all pages of your report card
                  </div>
                </div>
              </div>
              <div className="border-dashed border-[2px] border-[#D2CCFF] rounded-[8px] mt-[4px] px-[65px] py-[22px] ">
                <div className="items-center flex flex-col  ">
                  <img src="/upload.svg" alt="upload icon" />
                  <div className="w-[107px] h-[32px] mt-[4px]">
                    <input
                      type="file"
                      placeholder="Choose File"
                      className="file:border-[1px] file:border-[#5A4BDA] file:m-auto w-full h-full rounded-md file:w-full file:h-full file:rounded-md text-[12px] file:text-[#5A4BDA] file:bg-white"
                    />
                  </div>
                  <div className="text-[10px] mt-[2px]">
                    200 KB max file size, Pdf only
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* thrid div */}
          <div className="bg-[#F8F8F8] sm:py-[12px]">
            <div className="flex sm:rounded-[8px] sm:bg-white bg-[#F8F8F8] px-2 py-2 lg:p-4 ">
              <div className="mr-[2px] text-[16px] font-bold">
                Nomination Documents
              </div>
              <div className="text-[#BF2734] pt-1 text-[12px] ml-1">
                (*Mandatory Fields)
              </div>
            </div>
          </div>
          <div className="sm:py-[12px] bg-[#F8F8F8] py-[16px] sm:pt-0 ">
            <div className="overflow-x-auto border-[1px] bg-white rounded-[6px]">
              <div className="w-[1012px] flex items-center ">
                <div className="w-[55px] px-[10px] py-[12px] font-[700] text-[14px] ">
                  S. no.
                </div>
                <div className="w-[100px] font-[700] text-[14px]  px-[10px] py-[12px]">
                  Nomination year
                </div>
                <div className="w-[63px] font-[700] text-[14px]  px-[10px] py-[12px]">
                  Exam Group
                </div>
                <div className="w-[220px] font-[700] text-[14px]  px-[10px] py-[12px]">
                  Competition title
                </div>
                <div className="w-[220px] font-[700] text-[14px]  px-[10px] py-[12px]">
                  Remarks
                </div>
                <div className="w-[195px] font-[700] text-[14px]  px-[10px] py-[12px]">
                  Criteria
                </div>
                <div className=" font-[700] text-[14px]  px-[10px] py-[12px]">
                  upload document
                </div>
              </div>

              {/* second row*/}
              <div className="w-[1012px] flex items-start border-t-[2px] ">
                <div className="w-[55px] px-[10px] py-[12px] text-[14px] ">
                  1
                </div>
                <div className="w-[100px] text-[14px]  px-[10px] py-[12px]">
                  Current year
                </div>
                <div className="w-[63px] text-[14px]  px-[10px] py-[12px]">
                  A
                </div>
                <div className="w-[220px] text-[14px]  px-[10px] py-[12px]">
                  Bal Shakti Purasakar (National Child Award in Academics/
                  Research/ Innovation)
                </div>
                <div className="w-[220px] text-[14px]  px-[10px] py-[12px]">
                  Certificate issued by exam conducting body
                </div>
                <div className="w-[195px] text-[14px]  px-[10px] py-[12px]">
                  Bal Shakti Purasakar (National Child Award in Academics/
                  Research/ Innovation)s
                </div>
                <div className=" py-[12px]">
                  <div className="w-[160px] h-[128px] flex flex-col items-center bg-white">
                    <div className=" w-[156px] h-[80px] mx-1 mt-1 flex flex-col items-center  border-dashed border-[1px] border-[#5A4BDA] rounded-md p-1">
                      <img
                        src="/subtract.svg"
                        height={18}
                        width={14}
                        className=""
                      />
                      <div className=" w-[75px] h-[22px]  bg-white mt-2 ">
                        <input
                          type="file"
                          className="file:border-0 w-full h-full rounded-md file:w-full file:h-full file:rounded-md text-[12px] file:text-[#5A4BDA] file:bg-white"
                          placeholder="Choose file"
                        />
                      </div>
                      <p className="text-[11px]">No file choosen</p>
                    </div>
                    <button className="w-[76px] h-[28px] rounded-md bg-[#5A4BDA] text-white my-2">
                      upload
                    </button>
                  </div>
                </div>
              </div>
              {/*third row*/}
              <div className="w-[1012px] flex items-start border-t-[2px] ">
                <div className="w-[55px] px-[10px] py-[12px] text-[14px] ">
                  2
                </div>
                <div className="w-[100px] text-[14px]  px-[10px] py-[12px]">
                  Current year
                </div>
                <div className="w-[63px] text-[14px]  px-[10px] py-[12px]">
                  A
                </div>
                <div className="w-[220px] text-[14px]  px-[10px] py-[12px]">
                  Bal Shakti Purasakar (National Child Award in Academics/
                  Research/ Innovation)
                </div>
                <div className="w-[220px] text-[14px]  px-[10px] py-[12px]">
                  Certificate issued by exam conducting body
                </div>
                <div className="w-[195px] text-[14px]  px-[10px] py-[12px]">
                  Bal Shakti Purasakar (National Child Award in Academics/
                  Research/ Innovation)
                </div>
                <div className=" text-[14px] py-[12px]">
                  <div className="w-[160px] h-[128px] flex flex-col items-center bg-white">
                    <div className=" w-[156px] h-[80px] mx-1 mt-1 flex flex-col items-center  border-dashed border-[1px] border-[#5A4BDA] rounded-md p-1">
                      <img
                        src="/subtract.svg"
                        height={18}
                        width={14}
                        className=""
                      />
                      <div className=" w-[75px] h-[22px]  bg-white mt-2 ">
                        <input
                          type="file"
                          className="file:border-0 w-full h-full rounded-md file:w-full file:h-full file:rounded-md text-[12px] file:text-[#5A4BDA] file:bg-white"
                          placeholder="Choose file"
                        />
                      </div>
                      <p className="text-[11px]">No file choosen</p>
                    </div>
                    <button className="w-[76px] h-[28px] rounded-md bg-[#5A4BDA] text-white my-2">
                      upload
                    </button>
                  </div>
                </div>
              </div>
              {/*fouth row*/}
              <div className="w-[1012px] flex items-start border-t-[2px] ">
                <div className="w-[55px] px-[10px] py-[12px] text-[14px] ">
                  3
                </div>
                <div className="w-[100px] text-[14px]  px-[10px] py-[12px]">
                  Current year
                </div>
                <div className="w-[63px] text-[14px]  px-[10px] py-[12px]">
                  A
                </div>
                <div className="w-[220px] text-[14px]  px-[10px] py-[12px]">
                  Bal Shakti Purasakar (National Child Award in Academics/
                  Research/ Innovation)
                </div>
                <div className="w-[220px] text-[14px]  px-[10px] py-[12px]">
                  Certificate issued by exam conducting body
                </div>
                <div className="w-[195px] text-[14px]  px-[10px] py-[12px]">
                  Bal Shakti Purasakar (National Child Award in Academics/
                  Research/ Innovation)
                </div>
                <div className=" text-[14px]  py-[12px]">
                  <div className="w-[160px] h-[128px] flex flex-col items-center bg-white">
                    <div className=" w-[156px] h-[80px] mx-1 mt-1 flex flex-col items-center  border-dashed border-[1px] border-[#5A4BDA] rounded-md p-1">
                      <img
                        src="/subtract.svg"
                        height={18}
                        width={14}
                        className=""
                      />
                      <div className=" w-[75px] h-[22px]  bg-white mt-2 ">
                        <input
                          type="file"
                          className="file:border-0 w-full h-full rounded-md file:w-full file:h-full file:rounded-md text-[12px] file:text-[#5A4BDA] file:bg-white"
                          placeholder="Choose file"
                        />
                      </div>
                      <p className="text-[11px]">No file choosen</p>
                    </div>
                    <button className="w-[76px] h-[28px] rounded-md bg-[#5A4BDA] text-white my-2">
                      upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contentUpload
