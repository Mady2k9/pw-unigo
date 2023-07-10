import React, { ChangeEvent, useEffect, useState } from 'react'
import FileUploadBox from './FileUploadBox'
import { getDraftData } from '@modules/auth/lib'

const INSRUCTIONS = [
  'For report card please upload the PDF with all the pages including front section of your report card .',
  'Passport size photo file size should not exceed more than 20 KB',
  'Upload front and back side of Adhar card and the file size should not exceed more than 20 KB each',
  'Upload supporting documents i.e. certificate in front of exams selected.',
]

export type UploadedFileResponse = {
  baseUrl: string
  createdAt: string
  key: string
  name: string
  _id: string
}

type DocumentsSectionProps = {
  onNominationDocumentUpload: (data: any) => void
  onStudentDocUpload: (key: string, value: string) => void
}

const DocumentsSection: React.FC<DocumentsSectionProps> = ({
  onNominationDocumentUpload,
  onStudentDocUpload,
}) => {
  const [draftData, setdraftData] = useState<any>([])

  useEffect(() => {
    ;(async () => {
      const randomId = localStorage.getItem('randomId') || ''
      const { data } = await getDraftData(randomId)
      if (data.success) {
        setdraftData(data.data)
      }
    })()
  }, [])

  const onNominationDocsSuccess = (res: UploadedFileResponse, data: any) => {
    onNominationDocumentUpload({
      achivementId: res._id,
      ...data,
    })
  }

  return (
    <>
      <div className="bg-white w-full overflow-y-scroll">
        <div className="sm:bg-[#F8F8F8] bg-white sm:w-[90%] w-full items-center relative mx-auto px-3 py-3">
          <div className="bg-white rounded-md p-6 my-3 border sm:border-0 border-[#EFEFEF]">
            <div className="text-base font-semibold mb-2">
              Instructions for Upload Document:
            </div>
            <ol className="list-disc px-3">
              {INSRUCTIONS.map((intruction, index) => (
                <li key={`instructions-${index}`}>{intruction}</li>
              ))}
            </ol>
          </div>
          <div className="p-3 sm:p-6 flex rounded-md sm:bg-white bg-[#F8F8F8] sm:mt-6 mt-1 mb-3">
            <div className="text-base font-bold">Personal Information</div>
            <div className="text-[#BF2734] pt-1 text-xs ml-1">
              (*Mandatory Fields)
            </div>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:gap-3 sm:gap-1 gap-3">
            <div className="p-3 col-span-1 bg-white rounded-md border  sm:border-0 border-[#EFEFEF]">
              <div className="flex items-center">
                <div className="bg-[#FFF6E5] p-2 rounded-md">
                  <img src="/profile-picture.svg" alt="profile icon" />
                </div>
                <div className="ml-3">
                  <div className="text-sm md:text-base font-semibold">
                    Student Passport Size Photo
                  </div>
                  <div className="text-xs sm:text-sm">
                    Upload your photo here...
                  </div>
                </div>
              </div>
              <FileUploadBox
                fileHelperText={'50 KB max file size, JPG or PNG'}
                onUploadSucces={(res: UploadedFileResponse) =>
                  onStudentDocUpload('passportPhoto', res._id)
                }
                wrapperClass="mt-6"
              />
            </div>
            <div className="p-3 col-span-1 bg-white rounded-md  border sm:border-0 border-[#EFEFEF]">
              <div className="flex items-center">
                <div className="bg-[#FFF6E5] p-3 rounded-md">
                  <img src="/adhar_icon.svg" alt="profile icon" />
                </div>
                <div className="ml-3">
                  <div className="text-sm sm:text-base font-semibold">
                    Student Adhar Card
                  </div>
                  <div className="text-xs sm:text-sm">
                    Upload Adhar Card (Front & Back)
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <FileUploadBox
                    fileHelperText={'50 KB max file size, JPG or PNG'}
                    onUploadSucces={(res: UploadedFileResponse) =>
                      onStudentDocUpload('adhaarInfo.adhaarFrontPage', res._id)
                    }
                    wrapperClass="mt-6"
                    aadharText="Front"
                  />
                </div>
                <div className="col-span-1">
                  <FileUploadBox
                    fileHelperText={'50 KB max file size, JPG or PNG'}
                    onUploadSucces={(res: UploadedFileResponse) =>
                      onStudentDocUpload('adhaarInfo.adhaarBackPage', res._id)
                    }
                    wrapperClass="mt-6"
                    aadharText="Back"
                  />
                </div>
              </div>
            </div>
            <div className="p-3 col-span-1 bg-white rounded-md border sm:border-0 border-[#EFEFEF]">
              <div className="flex items-center">
                <div className="bg-[#FFF6E5] p-2 rounded-md">
                  <img src="/report_icon.svg" alt="profile icon" />
                </div>
                <div className="ml-3">
                  <div className="text-sm sm:text-base font-semibold">
                    Student latest Report card
                  </div>
                  <div className="text-xs sm:text-sm">
                    Upload all pages of your report card
                  </div>
                </div>
              </div>
              <FileUploadBox
                fileHelperText={'50 KB max file size, JPG or PNG'}
                onUploadSucces={(res: UploadedFileResponse) =>
                  onStudentDocUpload('reportCard', res._id)
                }
                wrapperClass="mt-6"
              />
            </div>
          </div>
          <div className="flex rounded-md bg-white p-6 my-6 items-center">
            <div className="mr-2 text-base font-bold">Nomination Documents</div>
            <div className="text-[#BF2734] text-xs">(*Mandatory Fields)</div>
          </div>
          <div className="bg-white w-full divide-y">
            <div className="grid grid-cols-12 font-bold p-6 py-3">
              <div className="col-span-1">S. no.</div>
              <div className="col-span-2">Nomination year</div>
              <div className="col-span-1">Exam Group</div>
              <div className="col-span-2">Competition title</div>
              <div className="col-span-2">Remarks</div>
              <div className="col-span-2">Criteria</div>
              <div className="col-span-2">Upload document</div>
            </div>
            {draftData &&
              draftData.nominationDocsInfo?.map((data: any, index: number) => {
                const { criteria, examGroup, remarks, year } = data
                return (
                  <div
                    className="grid grid-cols-12 p-6 py-3 text-[#757575]"
                    key={criteria}
                  >
                    <div className="col-span-1 my-auto">{index + 1}</div>
                    <div className="col-span-2 my-auto">{year}</div>
                    <div className="col-span-1 my-auto">{examGroup}</div>
                    <div className="col-span-2 my-auto">Competition title</div>
                    <div className="col-span-2 my-auto">{remarks}</div>
                    <div className="col-span-2 my-auto">{criteria}</div>
                    <div className="col-span-2 my-auto">
                      <FileUploadBox
                        fileHelperText={'50 KB max file size, JPG or PNG'}
                        onUploadSucces={(response: UploadedFileResponse) =>
                          onNominationDocsSuccess(response, data)
                        }
                        wrapperClass="mt-6"
                      />
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default DocumentsSection
