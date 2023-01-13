import {
  Button,
  Container,
  Dropdown,
  NoData,
  TextInput,
  Typography,
  useUIMinimal,
} from '@components/ui'
import { useEffect, useState } from 'react'
import usePathshalaDetails from '@lib/hooks/batches/usePathshalaDetails'
import { useRouter } from 'next/router'
import useBatchDetails from '@lib/hooks/batches/useBatchDetails'

import useNotify, { NotificationEnums } from '@lib/useNotify'
import useSendBatchFormData from '@lib/hooks/batches/useSendBatchFormData'
import { Arrow } from '@components/lotties'
import useCentreDetail from '@lib/hooks/center-page/useCenterDetails/useCenterDetails'

const RadioItems = [
  { name: 'Male', key: 'male' },
  { name: 'Female', key: 'female' },
]

type FormValues = {
  name: string
  email: string
  phoneNumber: string
  gender: string
  guardianNumber: string | string[]
  guardianName: string
  centerName: string
  department: string
  class: string
  courseDuration: string
}

enum FIELD {
  NAME = 'name',
  EMAIL = 'email',
  PHONE = 'phoneNumber',
  GENDER = 'gender',
  GUARDIAN_NAME = 'guardianName',
  GUARDIAN_NUMBER = 'guardianNumber',
  CENTER_NAME = 'centerName',
  DEPARTMENT = 'department',
  CLASS = 'class',
  COURSE_DURATION = 'courseDuration',
}

interface Props {
  value: string
  label: string
  items: Item[]
  onSelect: (k: string) => void
}
interface Item {
  name: string
  key: string
}

const getErrorKey = (key: string) => {
  switch (key) {
    case FIELD.NAME:
      return 'Name'
    case FIELD.EMAIL:
      return 'Email'
    case FIELD.PHONE:
      return 'Phone'
    case FIELD.GENDER:
      return 'gender'
    case FIELD.GUARDIAN_NAME:
      return 'Guardian Name'
    case FIELD.GUARDIAN_NUMBER:
      return 'Guardian Number'
    case FIELD.CENTER_NAME:
      return 'Center Name'
    case FIELD.DEPARTMENT:
      return 'Department'
    case FIELD.CLASS:
      return 'Class'
    case FIELD.COURSE_DURATION:
      return 'Course Duration'
  }
}

const RadioGroup = ({ label, items, onSelect, value }: Props) => {
  const [active, setActive] = useState('')
  return (
    <div>
      <fieldset className="flex items-center justify-start mb-5">
        <div className="mr-2">
          <Typography weight={500} variant={'tiny'}>
            {`Select ${label} :`}{' '}
          </Typography>
        </div>

        {items.map((item, i) => {
          return (
            <div className="flex items-center justify-center" key={i}>
              <label
                htmlFor={`${item.name}-option-${i}`}
                className={`w-6 h-6 flex items-center justify-center rounded-full hover:border-indigo-400 transition ease-in  duration-200 cursor-pointer border-2 mr-1 ${
                  item.key === active && 'border-indigo-400'
                }`}
              >
                <input
                  id={`${item.name}-option-${i}`}
                  type="radio"
                  name={`${label}`}
                  value={value}
                  className="w-6 h-6 hidden peer"
                  onClick={() => {
                    setActive(item.key)
                    onSelect(item.key)
                  }}
                />
                <span
                  className={`w-[calc(100%-6px)] h-[calc(100%-6px)] bg-primary hidden rounded-full ${
                    item.key === active && 'peer-checked:inline-block'
                  }`}
                ></span>
              </label>
              <div className="mr-2">
                <span
                  className={`${'text-indigo-400' ? item.key === active : ''}`}
                >
                  <Typography variant={'regular'} weight={500}>
                    {item.name}
                  </Typography>
                </span>
              </div>
            </div>
          )
        })}
      </fieldset>
    </div>
  )
}

const ShowError = ({ field, error }: { field: string; error: any }) => {
  return (
    <div className="mt-2">
      <Typography variant={'small'} weight={600}>
        <span className="text-red-500">{error[field]}</span>
      </Typography>
    </div>
  )
}

function BatchFormComponent({ query }: { query: any }) {
  const { user } = useUIMinimal()
  const router = useRouter()
  const { showNotification } = useNotify()
  const { data: batchDetails } = useBatchDetails({
    batchSlug: router?.query?.batchSlug as string,
  })
  const { data: pathshalaDetails, refetch: getPathshalaDetails } =
    usePathshalaDetails({
      batchId: batchDetails?.slug,
    })

  const { mutate: sendBatchFormData } = useSendBatchFormData()
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    guardianName: '',
    guardianNumber: [],
    centerName: '',
    department: '',
    class: '',
    courseDuration: '',
  })
  const [error, setError] = useState<FormValues>({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    guardianNumber: '',
    guardianName: '',
    centerName: '',
    department: '',
    class: '',
    courseDuration: '',
  })
  const [totalAmount, setTotalAmount] = useState('')
  const [centerId, setCenterId] = useState('')
  const [cityId, setCityId] = useState('')
  const [centerClass, setCenterClass] = useState('')
  const [dept, setDept] = useState('')

  const { data: centerDetails } = useCentreDetail({
    pathshalaCenterId: centerId,
  })

  const isValid = (key: string, value: string) => {
    switch (key) {
      case FIELD.NAME:
        return new RegExp(/^[a-zA-Z]*$/).test(value.trim())
      case FIELD.EMAIL:
        return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(value.trim())
      case FIELD.PHONE:
        return value.trim().length === 10
      case FIELD.GENDER:
        return value.trim().length > 0
      case FIELD.GUARDIAN_NAME:
        return value.trim().length > 0
      case FIELD.GUARDIAN_NUMBER:
        return value.trim().length === 10 && value.trim() !== values.phoneNumber
      case FIELD.CENTER_NAME:
        return value.trim().length > 0
      case FIELD.DEPARTMENT:
        return value.trim().length > 0
      case FIELD.CLASS:
        return value.trim().length > 0
      case FIELD.COURSE_DURATION:
        return value.trim().length > 0
    }
  }

  const handleChange = (key: string, value: string) => {
    const isValidValue = isValid(key, value)
    setValues({ ...values, [key]: value })

    if (isValidValue) {
      setError({
        ...error,
        [key]: '',
      })
    } else {
      if (key === FIELD.GUARDIAN_NUMBER && value === values.phoneNumber) {
        setError({
          ...error,
          [key]: `Guardian's and user phone cannot be same`,
        })
        return
      }
      setError({
        ...error,
        [key]: `${getErrorKey(key)} is not valid`,
      })
    }
  }

  const handleFormSubmit = () => {
    if (!values.gender || values.gender === '') {
      showNotification({
        type: NotificationEnums.ERROR,
        title: `Please fill ${getErrorKey(FIELD.GENDER)}`,
      })
      return
    }
    for (const [key, value] of Object.entries(values)) {
      if (value?.length === 0 && key !== FIELD.COURSE_DURATION) {
        showNotification({
          type: NotificationEnums.ERROR,
          title: `Please fill ${getErrorKey(key)}`,
        })
        return
      }
    }
    for (const [key, value] of Object.entries(error)) {
      if (value.length > 0 && key !== FIELD.COURSE_DURATION) {
        showNotification({
          type: NotificationEnums.ERROR,
          title: `Please verify ${getErrorKey(key)}`,
        })
        return
      }
    }

    sendBatchFormData(
      { batchId: batchDetails?._id, formData: values },
      {
        onSettled: (res: any) => {
          if (res) {
            if (res?.success) {
              // @ts-ignore
              if (window?.JSBridge) {
                // @ts-ignore
                window.JSBridge.onFormSubmit(res?.data?._id || '')
                return
              }
              showNotification({
                type: NotificationEnums.SUCCESS,
                title: 'Successfully Submitted!',
              })
            }
          } else {
            // SHOW ERROR MESSAGE
          }
        },
      }
    )
  }

  useEffect(() => {
    if (query.totalAmount) {
      setTotalAmount(query.totalAmount as string)
    }
  }, [query.totalAmount])

  useEffect(() => {
    if (query.centreId) {
      setCenterId(query.centreId as string)
    }
  }, [query.centerId])

  useEffect(() => {
    if (query.cls) {
      setCenterClass(query.cls as string)
    }
  }, [query.cls])

  useEffect(() => {
    if (query.dept) {
      setDept(query.dept as string)
    }
  }, [query.dept])

  useEffect(() => {
    if (query.cityId) {
      setCityId(query.cityId as string)
    }
  }, [query.cityId])

  useEffect(() => {
    if (user || centerClass || dept) {
      setValues({
        ...values,
        name: (user?.firstName || '') + ' ' + (user?.lastName || ''),
        phoneNumber: user?.primaryNumber,
        email: user?.email,
        gender: user?.gender,
        centerName: centerDetails?.center_name,
        department: dept,
        class: centerClass,
      })
    }
  }, [user, centerClass, dept])

  useEffect(() => {
    if (centerDetails) {
      setValues({
        ...values,
        centerName: centerDetails?.center_name,
      })
    }
  }, [centerDetails])

  return (
    <Container className="flex flex-col items-start justify-center w-full my-3 md:mt-10">
      <div className="mb-10">
        <Typography variant={'heading4'} weight={700}>
          Batch Registration Form
        </Typography>

        <Typography variant={'regular'} weight={500}>
          Kindly Fill Your Details To Continue
        </Typography>
      </div>
      <div className="flex flex-col w-full">
        <div className="mb-5">
          <TextInput
            value={values.name}
            placeholder="Full Name"
            variant="outlined"
            label="Full Name"
            onChange={(e) => handleChange(FIELD.NAME, e)}
          />
          {error.name.length > 0 && (
            <ShowError error={error} field={FIELD.NAME} />
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <TextInput
              value={values.email}
              placeholder="Email"
              variant="outlined"
              label="Email"
              onChange={(e) => handleChange(FIELD.EMAIL, e)}
            />
            {error.email.length > 0 && (
              <ShowError error={error} field={FIELD.EMAIL} />
            )}
          </div>
          <div className="flex-1">
            <TextInput
              value={values.phoneNumber}
              disabled={true}
              placeholder="Phone Number"
              variant="outlined"
              label="Phone Number"
              onChange={(e) => handleChange(FIELD.PHONE, e)}
            />
            {error.phoneNumber.length > 0 && (
              <ShowError error={error} field={FIELD.PHONE} />
            )}
          </div>
        </div>
        <div className="mt-5">
          <RadioGroup
            value={values.gender}
            label="Gender"
            items={RadioItems}
            onSelect={(key: any) => {
              handleChange(FIELD.GENDER, key)
            }}
          />
          {error.gender.length > 0 && (
            <ShowError error={error} field={FIELD.GENDER} />
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="flex-1">
            <TextInput
              value={values.guardianName}
              type={'text'}
              placeholder="Guardian's Name"
              variant="outlined"
              label="Guardian's Name"
              onChange={(e) => handleChange(FIELD.GUARDIAN_NAME, e)}
            />
            {error.guardianName.length > 0 && (
              <ShowError error={error} field={FIELD.GUARDIAN_NAME} />
            )}
          </div>

          <div className="flex-1">
            <TextInput
              value={values.guardianNumber}
              type={'tel'}
              minLength={4}
              maxLength={16}
              placeholder="Guardian's Number"
              variant="outlined"
              label="Guardian's Number"
              onChange={(e) => handleChange(FIELD.GUARDIAN_NUMBER, e)}
            />
            {error.guardianNumber.length > 0 && (
              <ShowError error={error} field={FIELD.GUARDIAN_NUMBER} />
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-4">
          <div className="flex-1">
            <Dropdown
              trigger={
                <div>
                  <TextInput
                    placeholder="Select Center"
                    value={values.centerName}
                  />
                </div>
              }
              items={pathshalaDetails?.centers
                ?.map((item: any) => {
                  return { ...item, key: item.name }
                })
                .sort((a, b) => a.key.localeCompare(b.key))}
              onSelect={(e: any) => handleChange(FIELD.CENTER_NAME, e)}
            />
            {error.centerName.length > 0 && (
              <ShowError error={error} field={FIELD.CENTER_NAME} />
            )}
          </div>
          <div className="flex-1">
            <Dropdown
              trigger={
                <div>
                  <TextInput
                    placeholder="Select Department"
                    value={values.department}
                  />
                </div>
              }
              items={pathshalaDetails?.departments?.map((item: any) => {
                return { ...item, key: item.name }
              })}
              onSelect={(e: any) => handleChange(FIELD.DEPARTMENT, e)}
            />
            {error.department.length > 0 && (
              <ShowError error={error} field={FIELD.DEPARTMENT} />
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-4">
          <div className="flex-1">
            <Dropdown
              trigger={
                <div>
                  <TextInput placeholder="Select Class" value={values.class} />
                </div>
              }
              items={pathshalaDetails?.classes?.map((item: any) => {
                return { ...item, key: item.name }
              })}
              onSelect={(e: any) => handleChange(FIELD.CLASS, e)}
            />
            {error.class.length > 0 && (
              <ShowError error={error} field={FIELD.CLASS} />
            )}
          </div>
          {pathshalaDetails?.courseDuration.length > 0 ||
            (!(
              pathshalaDetails?.courseDuration.length === 1 &&
              pathshalaDetails?.courseDuration[0].name.includes(
                'Not Applicable'
              )
            ) && (
              <div className="flex-1">
                <Dropdown
                  trigger={
                    <div>
                      <TextInput
                        placeholder="Select Course Duration"
                        value={values.courseDuration}
                      />
                    </div>
                  }
                  items={pathshalaDetails?.courseDuration
                    ?.map((item: any) => {
                      return { ...item, key: item.name }
                    })
                    .sort()}
                  onSelect={(e: any) => handleChange(FIELD.COURSE_DURATION, e)}
                />
                {error.courseDuration.length > 0 && (
                  <ShowError error={error} field={FIELD.COURSE_DURATION} />
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col md:items-end w-full mt-10">
        {totalAmount?.length > 0 && (
          <div className="my-4 w-full flex justify-center md:justify-end">
            <Typography variant={'heading4'} weight={600}>
              Payable Amount: ₹{totalAmount}
            </Typography>
          </div>
        )}

        <Button
          onClick={handleFormSubmit}
          size={'large'}
          postIcon={
            <div className="-rotate-90">
              <Arrow />
            </div>
          }
        >
          Get Enrolled and Pay
        </Button>
      </div>
    </Container>
  )
}

export default function BatchForm() {
  const router = useRouter()
  const query = router.query
  if (!query.batchSlug) {
    return <NoData message={'No Batch found for this'} />
  }
  return <BatchFormComponent query={query} />
}
