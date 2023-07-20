import React, { ChangeEvent, useEffect, useState } from 'react'
import FileUploadBox from './FileUploadBox'
import { useGetDraftData } from '@lib/hooks/marvel/useGetDraftData'
import { Button, useUI } from '@components/ui'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

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
  const { draftData } = useGetDraftData()
  // const [draftData, setdraftData] = useState<any>([])

  // useEffect(() => {
  //   ;(async () => {
  //     const randomId = localStorage.getItem('randomId') || ''
  //     const { data } = await getDraftData(randomId)
  //     if (data.success) {
  //       setdraftData(data.data)
  //     }
  //   })()
  // }, [])

  const onNominationDocsSuccess = (
    res: UploadedFileResponse | null,
    data: any
  ) => {
    onNominationDocumentUpload({
      ...data,
      achievementId: res,
    })
  }

  console.log(
    'new darft data',
    draftData?.pwMarvelData?.studentDocsInfo?.nominationDocsInfo
  )

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
                  <div className="text-xs text-[#757575] sm:text-sm">
                    Upload your photo here...
                  </div>
                </div>
              </div>
              <FileUploadBox
                isRegistrationEnded={draftData?.isRegistrationEnded}
                uploadedFile={
                  draftData?.pwMarvelData?.studentDocsInfo?.passportPhoto
                }
                fileHelperText={'5 MB max file size, JPG, PNG or PDF'}
                onUploadSucces={(res: UploadedFileResponse) =>
                  onStudentDocUpload('passportPhoto', res._id)
                }
                onEditCallBack={() => {
                  onStudentDocUpload('passportPhoto', '')
                }}
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
                  <div className="text-xs text-[#757575] sm:text-sm">
                    Upload Adhar Card (Front & Back)
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <FileUploadBox
                    isRegistrationEnded={draftData?.isRegistrationEnded}
                    uploadedFile={
                      draftData?.pwMarvelData?.studentDocsInfo?.adhaarInfo
                        ?.adhaarFrontPage
                    }
                    fileHelperText={'5 MB max file size, JPG, PNG or PDF'}
                    onUploadSucces={(res: UploadedFileResponse) =>
                      onStudentDocUpload('adhaarInfo.adhaarFrontPage', res._id)
                    }
                    onEditCallBack={() => {
                      onStudentDocUpload('adhaarInfo.adhaarFrontPage', '')
                    }}
                    wrapperClass="mt-6"
                    aadharText="Front"
                  />
                </div>
                <div className="col-span-1">
                  <FileUploadBox
                    isRegistrationEnded={draftData?.isRegistrationEnded}
                    uploadedFile={
                      draftData?.pwMarvelData?.studentDocsInfo?.adhaarInfo
                        ?.adhaarBackPage
                    }
                    fileHelperText={'5 MB max file size, JPG, PNG or PDF'}
                    onUploadSucces={(res: UploadedFileResponse) =>
                      onStudentDocUpload('adhaarInfo.adhaarBackPage', res._id)
                    }
                    onEditCallBack={() => {
                      onStudentDocUpload('adhaarInfo.adhaarBackPage', '')
                    }}
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
                  <div className="text-xs text-[#757575] sm:text-sm">
                    Upload all pages of your report card
                  </div>
                </div>
              </div>
              <FileUploadBox
                isRegistrationEnded={draftData?.isRegistrationEnded}
                uploadedFile={
                  draftData?.pwMarvelData?.studentDocsInfo?.reportCard
                }
                fileHelperText={'5 MB max file size, JPG, PNG or PDF'}
                onUploadSucces={(res: UploadedFileResponse) =>
                  onStudentDocUpload('reportCard', res._id)
                }
                onEditCallBack={() => {
                  onStudentDocUpload('reportCard', '')
                }}
                wrapperClass="mt-6"
              />
            </div>
          </div>
          <div className="flex rounded-md sm:bg-white bg-[#F8F8F8] sm:p-6 p-3 my-6 items-center ">
            <div className="mr-2 text-base font-bold">Nomination Documents</div>
            <div className="text-[#BF2734] text-xs">(*Mandatory Fields)</div>
          </div>
          <div className="bg-white w-full divide-y overflow-x-auto sm:pb-0 pb-[80px]">
            <div className="font-bold flex xl:w-full w-[850px] sm:border-0 border border-[#EFEFEF] rounded-t-lg border-b-[#ffffff]">
              <div className="w-[6%] p-2">S. no.</div>
              <div className="w-[11%] p-2">Nomination year</div>
              <div className="w-[7%] p-2">Exam Group</div>
              <div className="w-[19%] p-2">Competition title</div>
              <div className="w-[19%] p-2">Remarks</div>
              <div className="w-[19%] p-2">Criteria</div>
              <div className="w-[19%] p-2">Upload document</div>
            </div>
            {draftData &&
              draftData.pwMarvelData?.nominationDocsInfo?.map(
                (data: any, index: number) => {
                  const {
                    criteria,
                    examGroup,
                    remarks,
                    year,
                    achievementName,
                  } = data
                  console.log('data:dhskd ==>', data)
                  return (
                    <div
                      className="flex text-[#757575] xl:w-full w-[850px] sm:border-0 border border-[#EFEFEF] border-b-[#ffffff]"
                      key={criteria}
                    >
                      <div className="w-[6%] p-2">{index + 1}</div>
                      <div className="w-[11%] p-2">{year}</div>
                      <div className="w-[7%] p-2">{examGroup}</div>
                      <div className="w-[19%] p-2">{achievementName}</div>
                      <div className="w-[19%] p-2">{remarks}</div>
                      <div className="w-[19%] p-2">{criteria}</div>
                      <div className="w-[19%] p-2">
                        <FileUploadBox
                          isRegistrationEnded={draftData?.isRegistrationEnded}
                          uploadedFile={data?.achievementId}
                          fileHelperText={'5 MB max file size, JPG, PNG or PDF'}
                          onUploadSucces={(response: UploadedFileResponse) =>
                            onNominationDocsSuccess(response, data)
                          }
                          onEditCallBack={() => {
                            onNominationDocsSuccess(null, data)
                          }}
                          wrapperClass="mt-0"
                        />
                      </div>
                    </div>
                  )
                }
              )}
          </div>
        </div>
      </div>
    </>
  )
}

export default DocumentsSection
