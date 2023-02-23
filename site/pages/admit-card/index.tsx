/* eslint-disable @next/next/no-img-element */
import {
  Container,
  TextInput,
  Typography,
  Button,
  NoData,
  Loader,
} from '@components/ui'
import UploadIcon from '@heroicons/react/24/outline/ArrowUpTrayIcon'
import React, { useEffect, useRef, useState } from 'react'
import useUploadFile from '@lib/hooks/file/useUploadFile'
import 'react-day-picker/dist/style.css'
import useNotify, { NotificationEnums } from '@lib/useNotify'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import useSendAdmitCardData from '@lib/hooks/admit-card/useSendAdmitCardData'
import { useRouter } from 'next/router'
import useGetFormDetails, {
  Field,
} from '@lib/hooks/admit-card/useGetFormDetails'
import { DayPicker } from 'react-day-picker'
import { CalendarIcon } from '@heroicons/react/24/solid'

enum RESPONSE_TYPE {
  SUCCESS = 'success',
  FAIL = 'fail',
  ERROR = 'error',
}

const ShowError = ({ field, error }: { field: string; error: any }) => {
  return (
    <div className="mt-1 px-1 flex items-center justify-start ">
      <ExclamationTriangleIcon
        className={'h-[16px] w-[16px] mr-1 text-red-400'}
      />
      <div className="mt-3"></div>
      <Typography variant={'tiny'}>
        <span className="text-red-500">{error[field]}</span>
      </Typography>
    </div>
  )
}

const AdmitCardComponent = ({ query }: { query: any }) => {
  const {
    isLoading: isFileLoading,
    mutate: mutateFileData,
    error: fileError,
  } = useUploadFile()

  const { formDetails, isFormDetailsLoading } = useGetFormDetails({
    formId: query.form_id,
  })

  const [banner, setBanner] = useState('')

  const { showNotification } = useNotify()

  const { mutate: sendAdmitCardData } = useSendAdmitCardData()

  const [payload, setPayload] = useState<any>({})
  const [fileName, setFileName] = useState<any>({})
  const [error, setError] = useState<any>({})
  const [selected, setSelected] = useState()

  useEffect(() => {
    if (formDetails) {
      let fieldArray = formDetails.fields
      let obj = {}
      fieldArray.map((field) => {
        obj = { ...obj, [field.formKey]: '' }
        setPayload({ ...payload, ...obj })
      })
      const webBanner =
        formDetails.banner[0]?.web?.baseUrl + formDetails?.banner[0]?.web?.key

      if (webBanner.length > 0) {
        setBanner(webBanner)
      }

      const contentHeight = document.getElementsByTagName('div')[1]
      setTimeout(() => {
        window?.parent?.postMessage(
          {
            height: contentHeight?.scrollHeight,
            width: window.innerWidth,
          },
          '*'
        )
      }, 500)
    }
  }, [formDetails])

  const isValid = (val: any, key: string, rgx?: string) => {
    return new RegExp(rgx as string).test(val?.trim())
  }

  const updateError = (val: any, key: string, err: string, rgx?: string) => {
    const isValidField = isValid(val, key, rgx)

    if (isValidField) {
      setError({
        ...error,
        [key]: '',
      })
    } else {
      setError({ ...error, [key]: err })
    }
  }

  const handleOnChange = (key: any, val: any, err: string, rgx?: string) => {
    updateError(val, key, err, rgx)
    setPayload({ ...payload, [key]: val })
  }

  const handleSubmit = async () => {
    let obj = {}
    for (const [key, val] of Object.entries(payload)) {
      const isRequired = formDetails.fields.find(
        (field) => field.formKey === key
      )?.isRequired

      const errorMsg = formDetails.fields.find(
        (field) => field.formKey === key
      )?.errorMessage

      if (val === '' && isRequired) {
        obj = { ...obj, [key]: errorMsg }
        setError({ ...error, ...obj })
      }
    }

    for (const [key, val] of Object.entries(payload)) {
      const isRequired = formDetails.fields.find(
        (field) => field.formKey === key
      )?.isRequired

      if (val === '' && isRequired) {
        showNotification({
          type: NotificationEnums.ERROR,
          title: `Please Fill ${toSentenceCase(key)}`,
        })
        return
      }
    }

    for (const [key, val] of Object.entries(error)) {
      if (val !== '') {
        showNotification({
          type: NotificationEnums.ERROR,
          title: `Please verify ${key}`,
        })
        return
      }
    }

    sendAdmitCardData(
      {
        formConfigurationId: query.form_id,
        triggerEvent: query.trigger + '',
        type: 'ADMIT_CARD',
        data: payload,
      },
      {
        onSettled: (res: any) => {
          if (res?.success) {
            // @ts-ignore
            if (window?.JSBridge) {
              // @ts-ignore
              window.JSBridge.onFormSubmit(res?.data?._id || '')
              return
            }
            setTimeout(() => {
              window?.parent?.postMessage(RESPONSE_TYPE.SUCCESS, '*')
            }, 200)
            showNotification({
              title: 'Successfully Submitted!',
              type: NotificationEnums.SUCCESS,
            })
          }
        },
        onError: (error: any) => {
          showNotification({
            title: error?.message || '',
            type: NotificationEnums.ERROR,
          })

          setTimeout(() => {
            window?.parent?.postMessage(RESPONSE_TYPE.ERROR, '*')
          }, 200)
        },
      }
    )
  }

  const handleUpload = (val: any, key: string) => {
    setPayload({ ...payload, [key]: val })
    const formData = new FormData()
    formData.append('file', val)

    mutateFileData(formData, {
      onSuccess: (newData: any) => {
        setPayload({
          ...payload,
          [key]: newData.data?.data?._id,
        })
        setFileName({ ...fileName, [key]: val.name })
        setError({ ...error, [key]: '' })
      },
      onError: (error: any) => {
        showNotification({
          type: NotificationEnums.ERROR,
          title: 'Something went wrong. Please upload file again',
        })
        setError({
          ...error,
          [key]: 'Something went wrong. Please upload file again',
        })
      },
    })
  }

  if (isFormDetailsLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader scale={3} />
      </div>
    )
  }

  const toSentenceCase = (str: string) => {
    const result = str.replace(/([A-Z])/g, ' $1')
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1)
    return finalResult
  }
  const getInput = (field: Field) => {
    switch (field.type) {
      case 'date': {
        return <DOB {...field} />
      }
      case 'text': {
      }
      case 'number': {
        return (
          <TextInput
            placeholder={field?.placeholder}
            type={field?.type}
            onChange={(val) =>
              handleOnChange(
                field.formKey,
                val,
                field.errorMessage,
                field.validationRegEx
              )
            }
          />
        )
      }
      case 'file': {
        return <FileInput {...field} />
      }
    }
  }

  const FileInput = (field: Field) => {
    const fileRef = useRef<any>()
    const iconClick = () => {
      fileRef?.current?.click()
    }
    return (
      <div>
        <div className="flex items-center rounded-lg border border-gray-300 px-3 py-4 cursor-pointer ">
          <input
            className="hidden"
            type={'file'}
            ref={fileRef}
            onChange={(val) => {
              if (val.target.files)
                handleUpload(val.target.files[0], field.formKey)
            }}
            accept={field?.extension}
            id={field?.formKey}
            required={field?.isRequired}
          />
          <label
            className="cursor-pointer w-full text-base opacity-60 font-semibold"
            htmlFor={field?.formKey}
          >
            {fileName[field?.formKey]
              ? fileName[field?.formKey]
              : field?.placeholder}
          </label>

          <UploadIcon onClick={() => iconClick()} className="w-4 h-4 mr-3" />
        </div>
      </div>
    )
  }

  const DOB = (field: Field) => {
    const css = ` 
  .rdp-months {
    border: 1px solid  #7252F7;
    border-radius: 12px;
    padding: 5px;
  }
  .my-selected{ 
    border-color: white;
    color: white;
    background-color: #7252F7;
  }
 `
    const [showDate, setShowDate] = useState(false)

    const handleSelectDate = (e: any, formKey: string) => {
      if (e) {
        setSelected(e)
        setShowDate(false)
        setPayload({
          ...payload,
          [formKey]: e?.toLocaleString('en-GB').split(', ')[0],
        })
        setError({
          ...error,
          [formKey]: '',
        })
      }
    }

    return (
      <div className="flex items-center rounded-lg relative border border-gray-300 px-3 py-4 cursor-pointer">
        <div className="hidden">
          <TextInput
            variant="outlined"
            onClick={() => setShowDate(!showDate)}
            id={field.formKey}
            invalid={error[field.formKey]?.length > 0}
          />
        </div>
        <label
          className={`cursor-pointer w-full text-base ${
            payload[field.formKey] ? '' : 'opacity-60 font-semibold'
          }`}
          htmlFor={field.formKey}
        >
          {payload[field.formKey] ? payload[field.formKey] : field.placeholder}
        </label>

        <CalendarIcon
          className="w-4 h-4 mr-3"
          onClick={() => setShowDate(!showDate)}
        />
        {showDate && (
          <>
            <style>{css}</style>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(e) => handleSelectDate(e, field.formKey)}
              fromYear={1900}
              toYear={2015}
              captionLayout="dropdown"
              modifiersClassNames={{
                selected: 'my-selected',
              }}
              className="absolute top-[-15] right-[-15] z-20 bg-white rounded-xl"
            />
          </>
        )}
      </div>
    )
  }

  return (
    <div>
      <Container>
        <div className="lg:flex lg:flex-col lg:h-screen lg:justify-center pb-2 md:pb-0">
          <div className="flex flex-col lg:flex-row gap-2 md:gap-5">
            <div className="md:flex md:flex-col md:items-center md:justify-center">
              <img
                src={banner}
                alt="Banner"
                className="object-contain w-full md:max-w-[440px]"
              />
            </div>
            <div className="flex flex-1 w-full flex-col gap-5">
              <Typography variant="heading3" weight={700}>
                Please fill the details
              </Typography>
              {formDetails.fields?.map((field, idx) => (
                <div key={idx}>
                  {getInput(field)}
                  {error[field?.formKey] && (
                    <ShowError field={field?.formKey} error={error} />
                  )}
                </div>
              ))}

              <Button
                disabled={isFileLoading && !fileError}
                loading={isFileLoading && !fileError}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const AdmitCardWrapper = () => {
  const { query } = useRouter()

  if (!query.form_id) {
    return <NoData message="No Form found" />
  }

  return <AdmitCardComponent query={query} />
}

export default AdmitCardWrapper
