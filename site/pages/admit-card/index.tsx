/* eslint-disable @next/next/no-img-element */
import { Container, TextInput, Typography, Button } from '@components/ui'
import { AdmitCardBanner } from '@assets/images/admit-card'
import UploadIcon from '@heroicons/react/24/outline/ArrowUpTrayIcon'
import { useEffect, useRef, useState } from 'react'
import useUploadFile from '@lib/hooks/file/useUploadFile'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon'
import useNotify, { NotificationEnums } from '@lib/useNotify'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import useSendAdmitCardData from '@lib/hooks/admit-card/useSendAdmitCardData'
import { useRouter } from 'next/router'

enum RESPONSE_TYPE {
  SUCCESS = 'success',
  FAIL = 'fail',
  ERROR = 'error',
}

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

type FormValues = {
  applicationId: string
  rollNumber: string
  name: string
  dob: string
  imageId: string
  admitCardId: string
  phoneNumber: string
}

enum FIELD {
  APPLICATION_ID = 'applicationId',
  ROLL_NUMBER = 'rollNumber',
  NAME = 'name',
  DOB = 'dob',
  IMAGE_ID = 'imageId',
  ADMIT_CARD_ID = 'admitCardId',
  PHONE = 'phoneNumber',
}

const getErrorKey = (key: string) => {
  switch (key) {
    case FIELD.APPLICATION_ID:
      return 'Application Id'
    case FIELD.ROLL_NUMBER:
      return 'Roll Number'
    case FIELD.NAME:
      return 'Name'
    case FIELD.DOB:
      return 'DOB'
    case FIELD.IMAGE_ID:
      return 'Image Id'
    case FIELD.ADMIT_CARD_ID:
      return 'Admit Card Id'
  }
}

// Thankyou page
const FormSubmitted = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full h-[30%] md:w-[50%] lg:h-[50%] flex justify-center items-end rounded-xl shadow">
        <div className="w-full flex flex-col items-center justify-between h-24 mb-20">
          <Typography variant="heading2" weight={700}>
            Form Submitted
          </Typography>
          <Typography variant="heading4" weight={500}>
            Thankyou for submitting your admit card
          </Typography>
        </div>
      </div>
    </div>
  )
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
interface Props {
  placeholder: string
  type: string
  error: boolean
  onChange?: (...args: any[]) => any
  value: any
}
const TextInputCustom = ({
  placeholder,
  type,
  error,
  value,
  onChange,
}: Props) => {
  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }
  return (
    <div className="flex relative">
      <input
        type={type}
        className={`w-full text-gray-700 rounded-lg py-3 peer ${
          error ? 'border-red-500' : 'border-slate-300'
        }`}
        id="one"
        value={value}
        onChange={handleOnChange}
      />
      <label
        htmlFor="one"
        className={`absolute top-[27%] left-[3%] after:content-['*'] after:text-red-500 text-base text-gray-500 font-semibold peer-focus:hidden ${
          value?.length > 0 && 'hidden'
        }`}
      >{`${placeholder} `}</label>
    </div>
  )
}

const AdmitCard = () => {
  const { data: uploadImageId, mutate: mutateImageId } = useUploadFile()
  const { data: uploadAdmitCardId, mutate: mutateAdmitCardId } = useUploadFile()

  const router = useRouter()
  const { form_id, trigger } = router.query

  const [imageIdFileName, setImageIdFileName] = useState('')
  const [admitCardIdFileName, setadmitCardIdFileName] = useState('')
  const [showDate, setShowDate] = useState(false)
  const [selected, setSelected] = useState<Date>()
  const [showThankyouPage, setShowThankyouPage] = useState(false)
  const [formId, setFormId] = useState('')
  const [triggerEvent, setTriggerEvent] = useState('')
  const { showNotification } = useNotify()

  const imageRef = useRef<any>(null)
  const fileRef = useRef<any>(null)

  const { mutate: sendAdmitCardData } = useSendAdmitCardData()
  const [payload, setPayload] = useState<FormValues>({
    applicationId: '',
    rollNumber: '',
    name: '',
    dob: '',
    imageId: '',
    admitCardId: '',
    phoneNumber: '',
  })

  const [error, setError] = useState<FormValues>({
    applicationId: '',
    rollNumber: '',
    name: '',
    dob: '',
    imageId: '',
    admitCardId: '',
    phoneNumber: '',
  })

  // Set Form Id
  useEffect(() => {
    if (form_id) {
      setFormId(form_id as string)
    }
  }, [form_id])

  // Set Trigger
  useEffect(() => {
    if (trigger) {
      setTriggerEvent(trigger as string)
    }
  }, [trigger])

  // Update image Id
  useEffect(() => {
    if (uploadImageId) {
      setPayload({
        ...payload,
        imageId: uploadImageId?.data?.data?._id,
      })
    }
  }, [uploadImageId])

  // Upadte Application Id
  useEffect(() => {
    if (uploadAdmitCardId) {
      setPayload({
        ...payload,
        admitCardId: uploadAdmitCardId?.data?.data?._id,
      })
    }
  }, [uploadAdmitCardId])

  // Update Date
  useEffect(() => {
    if (selected) {
      setPayload({
        ...payload,
        dob: new Date(selected).toLocaleString('en-GB').split(', ')[0],
      })
    }
  }, [selected])

  const validate = async () => {
    const nameRegex = new RegExp(/^[a-zA-Z ]*$/)
    const rollNumberRegex = new RegExp(/^[A-Za-z]{2}[0-9]{8}$/)
    const {
      applicationId,
      rollNumber,
      name,
      dob,
      admitCardId,
      imageId,
      phoneNumber,
    } = payload
    let applicationIdError = ''
    let rollNoError = ''
    let nameError = ''
    let dobError = ''
    let imageIdError = ''
    let admitCardIdError = ''
    let phoneError = ''

    if (applicationId?.length === 0) {
      applicationIdError = 'Application Id should not be empty'
    } else if (applicationId?.length < 12) {
      applicationIdError = 'Application Id should be 12 digit'
    } else if (applicationId?.length > 12) {
      applicationIdError = 'Application Id should not exceed 12 digit'
    }

    if (!rollNumberRegex.test(rollNumber) || rollNumber.length !== 10) {
      rollNoError = 'Please enter a valid roll number'
    } else {
      rollNoError = ''
    }

    if (phoneNumber?.length === 0) {
      phoneError = 'Please enter phone number'
    } else if (phoneNumber?.length !== 10) {
      phoneError = 'Please enter valid phone number'
    } else {
      phoneError = ''
    }

    if (name?.length === 0) {
      nameError = 'Name should not be empty'
    } else if (!nameRegex.test(name)) {
      nameError = 'Please enter a valid name'
    } else {
      nameError = ''
    }

    if (dob?.length === 0) {
      dobError = 'DOB should not be empty'
    } else {
      dobError = ''
    }

    if (admitCardId?.length === 0) {
      admitCardIdError = 'Please upload pdf only'
    } else {
      admitCardIdError = ''
    }

    if (imageId?.length === 0) {
      imageIdError = 'Please upload png/jpg only'
    } else if (imageIdFileName.split('.')[1].toLowerCase() === 'jpeg') {
      imageIdError = 'Please upload jpg/png only'
    } else {
      imageIdError = ''
    }
    const formError = {
      applicationId: applicationIdError,
      rollNumber: rollNoError,
      name: nameError,
      dob: dobError,
      admitCardId: admitCardIdError,
      imageId: imageIdError,
      phoneNumber: phoneError,
    }

    setError(formError)

    for (const [_, value] of Object.entries(formError)) {
      if (value?.length > 0) {
        return false
      }
    }

    return true
  }

  const isValid = (val: any, key: any) => {
    switch (key) {
      case FIELD.APPLICATION_ID:
        return val?.trim()?.length === 12
      case FIELD.ROLL_NUMBER:
        return val?.trim()?.length === 10
      case FIELD.NAME:
        return new RegExp(/^[a-zA-Z ]*$/).test(val?.trim())
      case FIELD.PHONE:
        return val?.length === 10
      case FIELD.DOB:
        return val?.length > 0
      case FIELD.IMAGE_ID:
        return val?.length > 0
      case FIELD.ADMIT_CARD_ID:
        return val?.length > 0
      default:
        return false
    }
  }

  const updateError = (val: any, key: string) => {
    const isValidField = isValid(val, key)

    if (isValidField) {
      setError({
        ...error,
        [key]: '',
      })
    }
  }

  const handleOnChange = (name: any, val: any) => {
    updateError(val, name)
    const reg = new RegExp(/^[0-9]*$/)
    const spaceRegex = new RegExp(/\s/)
    const specialCharaterRegex = new RegExp(/\W|_/g)

    if (name === FIELD.ROLL_NUMBER && specialCharaterRegex.test(val)) return
    if (
      spaceRegex.test(val) ||
      ([FIELD.APPLICATION_ID, FIELD.PHONE].includes(name) && !reg.test(val))
    )
      return

    setPayload({
      ...payload,
      [name]: val,
    })
  }

  const iconClick = (type: FIELD) => {
    if (type === FIELD.IMAGE_ID) {
      imageRef?.current?.click()
    } else {
      fileRef?.current?.click()
    }
  }

  const handleSubmit = async () => {
    const isFormValidate = await validate()
    if (isFormValidate) {
      sendAdmitCardData(
        {
          formConfigurationId: formId,
          triggerEvent: trigger + '',
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
          },
        }
      )
    } else {
      setTimeout(() => {
        window?.parent?.postMessage(RESPONSE_TYPE.ERROR, '*')
      }, 200)
    }
  }

  const handleUpload = (val: any, key: string) => {
    updateError(val, key)
    setPayload({
      ...payload,
      [key]: val,
    })
    key === FIELD.IMAGE_ID
      ? setImageIdFileName(val.name)
      : setadmitCardIdFileName(val.name)

    const formData = new FormData()
    formData.append('file', val)

    key === FIELD.IMAGE_ID
      ? mutateImageId(formData, key)
      : mutateAdmitCardId(formData, key)
  }

  const date = new Date()
  const previousDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - 1
  )

  const handleSelectDate = (e: any) => {
    setSelected(e)
    setShowDate(false)
    setError({
      ...error,
      dob: '',
    })
  }

  return (
    <div>
      {showThankyouPage ? (
        <FormSubmitted />
      ) : (
        <Container>
          <div className="lg:flex lg:flex-col lg:h-screen lg:justify-center pb-8 md:pb-0">
            <div className="flex flex-col lg:flex-row gap-2 md:gap-5">
              <div className="md:flex md:flex-col md:items-center md:justify-center">
                <img
                  src={AdmitCardBanner.src}
                  alt="Banner"
                  className="object-contain w-full md:max-w-[440px]"
                />
              </div>
              <div className="flex flex-1 w-full flex-col gap-5">
                <Typography variant="heading3" weight={700}>
                  Please fill the details
                </Typography>
                <div>
                  <TextInput
                    maxLength={12}
                    value={payload.applicationId}
                    type="text"
                    onChange={(val) => handleOnChange('applicationId', val)}
                    placeholder="Application Id *"
                    invalid={error?.applicationId?.length > 0}
                    label={error?.name?.length > 0 ? 'Application Id' : ''}
                  />
                  {error?.applicationId && (
                    <ShowError error={error} field={FIELD.APPLICATION_ID} />
                  )}
                </div>
                <div>
                  <TextInput
                    maxLength={10}
                    value={payload.rollNumber}
                    onChange={(val) => handleOnChange(FIELD.ROLL_NUMBER, val)}
                    placeholder="Roll Number *"
                    label={error?.name?.length > 0 ? 'Roll Number' : ''}
                    className="border-red-500"
                    invalid={error?.rollNumber?.length > 0}
                  />
                  {error?.rollNumber && (
                    <ShowError error={error} field={FIELD.ROLL_NUMBER} />
                  )}
                </div>
                <div>
                  <TextInput
                    type="text"
                    value={payload.name}
                    onChange={(val) => handleOnChange(FIELD.NAME, val)}
                    placeholder="Name *"
                    invalid={error?.name?.length > 0}
                    label={error?.name?.length > 0 ? 'Name' : ''}
                  />
                  {error?.name && (
                    <ShowError error={error} field={FIELD.NAME} />
                  )}
                </div>
                <div>
                  <TextInput
                    maxLength={10}
                    value={payload.phoneNumber}
                    onChange={(val) => handleOnChange(FIELD.PHONE, val)}
                    placeholder="Mobile Number *"
                    invalid={error?.phoneNumber?.length > 0}
                    label={error?.name?.length > 0 ? 'Mobile Number' : ''}
                  />
                  {error?.phoneNumber && (
                    <ShowError error={error} field={FIELD.PHONE} />
                  )}
                </div>
                <div>
                  <div className="flex items-center rounded-lg relative border-2 border-gray-100 p-3 cursor-pointer">
                    <div className="hidden">
                      <TextInput
                        variant="outlined"
                        onClick={() => setShowDate(!showDate)}
                        id="dob"
                        invalid={error?.dob?.length > 0}
                      />
                    </div>
                    <label className="cursor-pointer w-full " htmlFor="dob">
                      {selected ? payload.dob : `DOB(dd/mm/yyyy)`}
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
                          defaultMonth={selected}
                          disabled={{ after: previousDay }}
                          selected={selected}
                          onSelect={handleSelectDate}
                          fromYear={1900}
                          toYear={2015}
                          captionLayout="dropdown"
                          modifiersClassNames={{
                            selected: 'my-selected',
                          }}
                          className="absolute top-[-15] right-[-15] z-20 bg-white"
                        />
                      </>
                    )}
                  </div>
                  {error?.dob && <ShowError error={error} field={FIELD.DOB} />}
                </div>

                <div>
                  <div className="flex items-center rounded-lg border-2 border-gray-100 cursor-pointer p-3">
                    <div className="hidden">
                      <input
                        placeholder="placeholder"
                        type="file"
                        ref={imageRef}
                        id="candidateImg"
                        accept="image/png, image/jpg, image/jpeg"
                        onChange={(val) => {
                          if (val.target.files)
                            handleUpload(val.target.files[0], FIELD.IMAGE_ID)
                        }}
                      />
                    </div>
                    <label
                      className="cursor-pointer w-full truncate mr-3"
                      htmlFor="candidateImg"
                    >
                      {imageIdFileName
                        ? imageIdFileName
                        : 'Photo of the candidate (png/jpg) *'}
                    </label>

                    <UploadIcon
                      onClick={() => iconClick(FIELD.IMAGE_ID)}
                      className="w-4 h-4 mr-3"
                    />
                  </div>
                  {error?.imageId && (
                    <ShowError error={error} field={FIELD.IMAGE_ID} />
                  )}
                </div>
                <div>
                  <div className="flex items-center rounded-lg border-2 border-gray-100 p-3 cursor-pointer">
                    <div className="hidden">
                      <input
                        placeholder="placeholder"
                        type={'file'}
                        ref={fileRef}
                        accept="application/pdf"
                        id="admitCard"
                        onChange={(val) => {
                          if (val.target.files)
                            handleUpload(
                              val.target.files[0],
                              FIELD.ADMIT_CARD_ID
                            )
                        }}
                      />
                    </div>
                    <label
                      className="cursor-pointer w-full"
                      htmlFor="admitCard"
                    >
                      {admitCardIdFileName
                        ? admitCardIdFileName
                        : 'Please attach your admit card (pdf only) *'}
                    </label>

                    <UploadIcon
                      onClick={() => iconClick(FIELD.ADMIT_CARD_ID)}
                      className="w-4 h-4 mr-3"
                    />
                  </div>
                  {error?.admitCardId && (
                    <ShowError error={error} field={FIELD.ADMIT_CARD_ID} />
                  )}
                </div>

                <Button onClick={handleSubmit}>Submit</Button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  )
}

export default AdmitCard
