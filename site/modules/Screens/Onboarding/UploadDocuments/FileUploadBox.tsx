import { Button, Loader, Typography, useUI } from '@components/ui'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import cn from 'clsx'
import { uploadFile } from '@modules/auth/lib'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { UploadedFileResponse } from './DocumentsSection'
import useNotify, { NotificationEnums } from '@lib/useNotify'
import uuid from 'react-uuid'
import { ActionModal } from '@components/ui/Modal'
import { XMarkIcon } from '@heroicons/react/24/solid'

type FileUploadBoxProps = {
  fileHelperText?: string
  wrapperClass?: string
  onUploadSucces: (res: UploadedFileResponse) => void
  aadharText?: string
  uploadedFile?: string
  onEditCallBack: () => void
  isRegistrationEnded?: boolean
}

const FileUploadBox = ({
  fileHelperText,
  wrapperClass,
  onUploadSucces,
  aadharText,
  uploadedFile = '',
  onEditCallBack = () => {},
  isRegistrationEnded = false,
}: FileUploadBoxProps) => {
  // const [files, setFiles] = useState<FileList | null>()
  const id = uuid()
  const [uploadedFileData, setUploadedFileData] = useState<any>(null)
  console.log('uploadedFileData: ', uploadedFileData)
  const [isUploading, setIsUploading] = useState(false)
  const { showNotification } = useNotify()
  // const [uploadedFile, setUploadedFile] = useState<any>(null)

  useEffect(() => {
    setUploadedFileData(uploadedFile)
  }, [uploadedFile, setUploadedFileData])

  const onFileUpload = async (files: any) => {
    setIsUploading(true)
    try {
      const formData = new FormData()
      for (let file in files) {
        if (files.hasOwnProperty(file)) {
          formData.append('file', files[file as any])
        } else {
          break
        }
      }
      const randomId = localStorage.getItem('randomId') || ''
      try {
        const { data } = await uploadFile(formData, randomId)
        if (data.success) {
          onUploadSucces(data.data)
          setUploadedFileData(data.data)
        }
      } catch (error: any) {
        showNotification({
          type: NotificationEnums.ERROR,
          title: error?.message,
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsUploading(false)
    }
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e?.target?.files[0]
      const fileSizeInMB = file?.size / (1024 * 1024)
      const maxSizeInMB = 5;

      if (fileSizeInMB > maxSizeInMB) {
        showNotification({
          type: NotificationEnums.ERROR,
          title: 'File size is greater than mentioned size'
        })
      } else {
        onFileUpload(e.target.files)
      }
    }
  }

  const onEdit = () => {
    // setFiles(null)
    setUploadedFileData(null)
    if (onEditCallBack) {
      onEditCallBack()
    }
  }

  if (uploadedFileData) {
    return (
      <FileUploadWrapper
        wrapperClass={`${wrapperClass} ${true ? '!bg-[#F9F9FF]' : ''}`}
        aadharText={aadharText}
      >
        <FileUploaded
          isRegistrationEnded={isRegistrationEnded}
          files={uploadedFileData}
          fileHelperText={fileHelperText}
          onEdit={onEdit}
        />
      </FileUploadWrapper>
    )
  }

  // if (files && files.length !== 0) {
  //   return (
  //     <FileUploadWrapper wrapperClass={wrapperClass} aadharText={aadharText}>
  //       <FileSelected
  //         files={files}
  //         fileHelperText={fileHelperText}
  //         onEdit={onEdit}
  //         onUploadSucces={onUploadSucces}
  //       />
  //     </FileUploadWrapper>
  //   )
  // }

  return (
    <FileUploadWrapper wrapperClass={wrapperClass} aadharText={aadharText}>
      <Image src="/upload.svg" alt="upload icon" height={40} width={40} />
      <div className="relative border-indigo-500 rounded-md py-1 px-4 border my-2 ">
        {isUploading ? (
          <div className="flex items-center">
            <span className="mr-2 text-indigo-500">Uploading</span>
            <Loader />
          </div>
        ) : (
          <>
            <div className="text-indigo-500 cursor-pointer">Choose File</div>
            <input
              type="file"
              accept=".jpeg,.png,.pdf"
              className="absolute inset-0 opacity-0"
              onChange={onFileChange}
            />
          </>
        )}
      </div>
      {fileHelperText && (
        <div className="text-[10px] text-[#757575] text-center">
          {fileHelperText}
        </div>
      )}
    </FileUploadWrapper>
  )
}

const FileSelected = ({
  files,
  fileHelperText,
  onEdit,
  onUploadSucces,
}: {
  files: FileList
  fileHelperText?: string
  onEdit: () => void
  onUploadSucces: (res: UploadedFileResponse) => void
}) => {
  const { showNotification } = useNotify()
  const [isUploading, setIsUploading] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<any>(null)
  const onFileUpload = async () => {
    setIsUploading(true)
    try {
      const formData = new FormData()
      for (let file in files) {
        if (files.hasOwnProperty(file)) {
          formData.append('file', files[file as any])
        } else {
          break
        }
      }
      const randomId = localStorage.getItem('randomId') || ''
      try {
        const { data } = await uploadFile(formData, randomId)
        if (data.success) {
          onUploadSucces(data.data)
          setUploadedFile(data.data)
        }
      } catch (error: any) {
        showNotification({
          type: NotificationEnums.ERROR,
          title: error?.message,
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsUploading(false)
    }
  }

  if (uploadedFile) {
    return (
      <FileUploaded
        files={uploadedFile}
        fileHelperText={fileHelperText}
        onEdit={onEdit}
      />
    )
  }
  return (
    <>
      <Image src="/upload.svg" alt="upload icon" height={40} width={40} />
      <Button variant="secondary" className="my-2" onClick={onFileUpload}>
        {isUploading ? (
          <div className="flex items-center">
            <span className="mr-2">Uploading</span>
            <Loader />
          </div>
        ) : (
          'Upload File'
        )}
      </Button>
      <div className="text-[10px] text-[#757575]">{files[0].name}</div>
    </>
  )
}

const textTrim = (text: string = '') => {
  return text?.length > 10
    ? text?.slice(0, 4) + '...' + text.slice(text?.length - 6)
    : text
}

const FileUploaded = ({
  files,
  fileHelperText,
  onEdit,
  isRegistrationEnded = false,
}: {
  files: any
  fileHelperText?: string
  onEdit: () => void
  isRegistrationEnded?: boolean
}) => {
  const id = uuid()
  const [previewModal, setPreviewModal] = useState(false)
  const { openPDFViewer } = useUI()

  return (
    <>
      <Typography variant="tiny" weight={500}>
        <span className="text-[#3D3D3D] underline">
          {textTrim(files?.name || '')}
        </span>
      </Typography>
      <div className="flex my-2 items-center">
        {!isRegistrationEnded && (
          <div className="">
            <Button variant="outline" onClick={onEdit}>
              Edit
            </Button>
          </div>
        )}
        <div
          className="bg-indigo-500 flex items-center ml-2 py-2 rounded-md cursor-pointer"
          id={`preview-eye-${id}`}
          onClick={() => {
            if (files?.key?.includes('.pdf')) {
              /* openPDFViewer(`${files?.baseUrl}${files?.key}`) */
              window.location.href = `${files?.baseUrl}${files?.key}`
            } else {
              setPreviewModal(true)
            }
          }}
        >
          <Image src="/eye.svg" alt="upload icon" height={20} width={36} />
        </div>
      </div>
      {fileHelperText && (
        <div className="text-[10px] text-[#757575] text-center">
          {fileHelperText}
        </div>
      )}
      <ReactTooltip
        style={{ maxWidth: '300px' }}
        anchorId={`preview-eye-${id}`}
        content={'Preview'}
        place="top"
      />

      {previewModal && files?.key?.includes('.pdf') ? (
        window.open(`${files?.baseUrl}${files?.key}`)
      ) : (
        <ActionModal open={previewModal} setOpen={setPreviewModal}>
          <div className="p-4 relative flex justify-center">
            <img src={`${files?.baseUrl}${files?.key}`} alt="preview-img" />
            <div
              className="absolute -right-1 -top-1"
              onClick={() => setPreviewModal(false)}
            >
              <XMarkIcon className="cursor-pointer" width={20} height={20} />
            </div>
          </div>
        </ActionModal>
      )}
    </>
  )
}

const FileUploadWrapper = ({
  wrapperClass,
  children,
  aadharText,
}: {
  wrapperClass?: string
  children: React.ReactNode
  aadharText?: string
}) => {
  return (
    <div
      className={cn(
        'border-[1.5px] relative border-dashed border-indigo-100 w-full flex flex-col justify-center items-center py-7 rounded-md bg-white',
        wrapperClass
      )}
    >
      {aadharText && (
        <div className="absolute text-xs text-[#757575] right-3 top-0 mt-2">
          {aadharText}
        </div>
      )}
      {children}
    </div>
  )
}

export default FileUploadBox
