import { Button, Loader } from '@components/ui'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import cn from 'clsx'
import { uploadFile } from '@modules/auth/lib'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { UploadedFileResponse } from './DocumentsSection'

type FileUploadBoxProps = {
  fileHelperText?: string
  wrapperClass?: string
  onUploadSucces: (res: UploadedFileResponse) => void
  aadharText?: string
  uploadedFile?: string
}

const FileUploadBox = ({
  fileHelperText,
  wrapperClass,
  onUploadSucces,
  aadharText,
  uploadedFile = ''
}: FileUploadBoxProps) => {
  const [files, setFiles] = useState<FileList | null>()
  const [uploadedFileData, setUploadedFileData] = useState<any>(null)

  useEffect(() => {
    setUploadedFileData(uploadedFile)
  }, [uploadedFile,  setUploadedFileData])

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files)
    }
  }

  const onEdit = () => {
    setFiles(null)
    setUploadedFileData(null)
  }

  if (uploadedFileData) {
    return (
      <FileUploadWrapper wrapperClass={wrapperClass} aadharText={aadharText}>
        <FileUploaded
          files={uploadedFile}
          fileHelperText={fileHelperText}
          onEdit={onEdit}
        />
      </FileUploadWrapper>
    )
  }

  if (files && files.length !== 0) {
    return (
      <FileUploadWrapper wrapperClass={wrapperClass} aadharText={aadharText}>
        <FileSelected
          files={files}
          fileHelperText={fileHelperText}
          onEdit={onEdit}
          onUploadSucces={onUploadSucces}
        />
      </FileUploadWrapper>
    )
  }

  return (
    <FileUploadWrapper wrapperClass={wrapperClass} aadharText={aadharText}>
      <Image src="/upload.svg" alt="upload icon" height={40} width={40} />
      <div className="relative border-indigo-500 rounded-md py-1 px-4 border my-2 ">
        <div className="text-indigo-500 cursor-pointer">Choose File</div>
        <input
          type="file"
          className="absolute inset-0 opacity-0"
          onChange={onFileChange}
        />
      </div>
      {fileHelperText && (
        <div className="text-[10px] text-[#757575]">{fileHelperText}</div>
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

      const { data } = await uploadFile(formData, randomId)
      if (data.success) {
        onUploadSucces(data.data)
        setUploadedFile(data.data)
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

const FileUploaded = ({
  files,
  fileHelperText,
  onEdit,
}: {
  files: any
  fileHelperText?: string
  onEdit: () => void
}) => {
  return (
    <>
      {files?.name}
      <div className="flex my-2 items-center">
        <Button variant="secondary" onClick={onEdit}>
          Edit
        </Button>
        <div
          className="bg-indigo-500 flex items-center ml-2 py-2 rounded-md cursor-pointer"
          id="preview-eye"
          onClick={() => window?.open(`${files?.baseUrl}${files?.key}`)}
        >
          <Image src="/eye.svg" alt="upload icon" height={20} width={30} />
        </div>
      </div>
      {fileHelperText && (
        <div className="text-[10px] text-[#757575]">{fileHelperText}</div>
      )}
      <ReactTooltip
        style={{ maxWidth: '300px' }}
        anchorId={'id-preview-eye'}
        content={'Preview'}
        place="top"
      />
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
        'border relative border-dashed border-indigo-100 w-full flex flex-col justify-center items-center py-4 rounded-md bg-white',
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
