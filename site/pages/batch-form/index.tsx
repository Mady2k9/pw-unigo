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
import usePathshalaDetails, {
  PathshalaModel,
} from '@lib/hooks/batches/usePathshalaDetails'
import { useRouter } from 'next/router'
import useBatchDetails from '@lib/hooks/batches/useBatchDetails'
import useNotify, { NotificationEnums } from '@lib/useNotify'
import useSendBatchFormData from '@lib/hooks/batches/useSendBatchFormData'
import { Arrow } from '@components/lotties'
import useCentreDetail from '@lib/hooks/center-page/useCenterDetails/useCenterDetails'
import cn from 'clsx'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
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
  city: string
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
  CITY = 'city',
}

interface Props {
  value: string
  label: string
  items: Item[]
  onSelect: (k: string) => void
  invalid: boolean
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
    case FIELD.CITY:
      return 'City'
    case FIELD.CLASS:
      return 'Class'
    case FIELD.COURSE_DURATION:
      return 'Course Duration'
  }
}

const RadioGroup = ({ label, items, onSelect, value, invalid }: Props) => {
  const [active, setActive] = useState('')
  return (
    <div className="flex items-center justify-start">
      <div
        className={cn('mr-2', {
          ['text-red-500']: invalid,
        })}
      >
        <Typography weight={500} variant={'small'}>
          {`Select ${label} :`}{' '}
        </Typography>
      </div>

      {items.map((item, i) => {
        return (
          <div className="flex items-center justify-center" key={i}>
            <label
              htmlFor={`${item.name}-option-${i}`}
              className={cn(
                `w-6 h-6 flex items-center justify-center rounded-full hover:border-indigo-400 transition ease-in  duration-200 cursor-pointer border-2 mr-1`,
                {
                  ['border-indigo-500']: item.key === active,
                }
              )}
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
                className={cn('', {
                  ['text-indigo-400']: item.key === active,
                  ['text-red-500']: invalid,
                })}
              >
                <Typography variant={'small'} weight={600}>
                  {item.name}
                </Typography>
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const ShowError = ({ field, error }: { field: string; error: any }) => {
  return (
    <div className="mt-2 flex items-center">
      <ExclamationTriangleIcon className="w-5 h-5 mr-1 text-red-500" />
      <Typography variant={'small'} weight={600}>
        <span className="text-red-500">{error[field]}</span>
      </Typography>
    </div>
  )
}

function BatchFormComponent({ query }: { query: any }) {
  const { user } = useUIMinimal()
  const { showNotification } = useNotify()
  const { data: batchDetails } = useBatchDetails({
    batchSlug: query?.batchSlug as string,
  })
  const { data: pathshalaDetails } = usePathshalaDetails({
    batchId: batchDetails?.slug,
  })
  const { data: centerDetails } = useCentreDetail({
    pathshalaCenterId: query.centreId,
  })

  const { mutate: sendBatchFormData, isLoading } = useSendBatchFormData()
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    guardianName: '',
    guardianNumber: [],
    city: '',
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
    city: '',
    department: '',
    class: '',
    courseDuration: '',
  })
  const [details, setDetails] = useState<PathshalaModel>(new PathshalaModel({}))

  const isValid = (key: string, value: string) => {
    value = value.trim()
    switch (key) {
      case FIELD.NAME:
        return new RegExp(/^[a-zA-Z]*$/).test(value)
      case FIELD.EMAIL:
        return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(value)
      case FIELD.PHONE:
        return new RegExp(/^[5-9]{1}[0-9]{9}$/).test(value)
      case FIELD.GENDER:
        return value.length > 0
      case FIELD.GUARDIAN_NAME:
        return value.length > 0
      case FIELD.GUARDIAN_NUMBER:
        return (
          value.length === 10 &&
          value !== values.phoneNumber &&
          new RegExp(/^[5-9]{1}[0-9]{9}$/).test(value)
        )
      case FIELD.CENTER_NAME:
        return value.length > 0
      case FIELD.DEPARTMENT:
        return value.length > 0
      case FIELD.CLASS:
        return value.length > 0
      case FIELD.COURSE_DURATION:
        return value.length > 0
      case FIELD.CITY:
        return value.length > 0
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
      setError({
        ...error,
        gender: 'Please fill gender',
      })
      return
    }
    for (const [key, value] of Object.entries(values)) {
      if (value?.length === 0 && key !== FIELD.COURSE_DURATION) {
        showNotification({
          type: NotificationEnums.ERROR,
          title: `Please fill ${getErrorKey(key)}`,
        })
        setError({
          ...error,
          [key]: `Please fill ${getErrorKey(key)}`,
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
        setError({
          ...error,
          [key]: `Please verify ${getErrorKey(key)}`,
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
              const formId = res?.data?._id || ''
              if (formId.length > 0) {
                // @ts-ignore
                if (window?.JSBridge) {
                  // @ts-ignore
                  window.JSBridge.onFormSubmit(res?.data?._id || '')
                  return
                }
                setTimeout(() => {
                  window?.parent?.postMessage(formId, '*')
                }, 100)
                showNotification({
                  type: NotificationEnums.SUCCESS,
                  title: 'Successfully Submitted!',
                })
              }
            }
          } else {
            // SHOW ERROR MESSAGE
          }
        },
      }
    )
  }

  const updateData = () => {
    if (user) {
      setValues((prev) => {
        return {
          ...prev,
          name: (user?.firstName || '') + ' ' + (user?.lastName || ''),
          phoneNumber: user?.primaryNumber,
          email: user?.email,
          gender: user?.gender,
        }
      })
    }

    if (query.cls) {
      let cls: string = query.cls
      if (cls.includes(' ')) {
        cls = cls.replace(' ', '+')
      }
      setValues((prev) => {
        return {
          ...prev,
          class: cls,
        }
      })
    }

    const cityId = query.cityId
    if (cityId) {
      const city = pathshalaDetails?.cities.find((item) => item._id === cityId)

      if (city || pathshalaDetails) {
        setValues((prev: any) => {
          return {
            ...prev,
            city: city?.name,
          }
        })
      }
    }

    const dept = query.dept
    if (dept) {
      setValues((prev) => {
        return {
          ...prev,
          department: dept as string,
        }
      })
    }

    if (centerDetails) {
      setValues((prev) => {
        return {
          ...prev,
          centerName: centerDetails?.center_name,
        }
      })
    }
  }

  useEffect(() => {
    updateData()
  }, [pathshalaDetails, user, centerDetails])

  useEffect(() => {
    if (pathshalaDetails) {
      setDetails(pathshalaDetails)
    }
  }, [pathshalaDetails])

  useEffect(() => {
    const city = pathshalaDetails.cities.find(
      (city) => city.name === values.city
    )

    if (pathshalaDetails.centers.length > 0) {
      const filteredCities = pathshalaDetails.centers.filter(
        (item: any) => item.cityId === city?._id
      )

      if (filteredCities.length > 0) {
        setDetails({
          ...details,
          centers: filteredCities,
        })
        if (
          filteredCities[0].cityId === centerDetails?.cityId &&
          centerDetails?.center_name
        ) {
          setValues({
            ...values,
            centerName: centerDetails.center_name,
          })
        } else {
          setValues({
            ...values,
            centerName: '',
          })
        }
      }
    }
  }, [values.city])

  useEffect(() => {})

  const getMappedValue = (
    data: { name: string }[] | { name: string; _id: string }[]
  ) => {
    return data?.map((item: any) => {
      return { ...item, key: item.name }
    })
  }

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
        <div className="my-5 flex flex-col">
          <RadioGroup
            invalid={error.gender.length > 0}
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

        <div className="grid grid-col-1 md:grid-cols-2 gap-5">
          <div className="col-span-1">
            <TextInput
              invalid={error.guardianName.length > 0}
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

          <div className="col-span-1">
            <TextInput
              value={values.guardianNumber}
              type={'tel'}
              minLength={4}
              invalid={error.guardianNumber.length > 0}
              maxLength={16}
              placeholder="Guardian Mobile Number"
              variant="outlined"
              label="Guardian Mobile Number"
              onChange={(e) => handleChange(FIELD.GUARDIAN_NUMBER, e)}
            />
            {error.guardianNumber.length > 0 && (
              <ShowError error={error} field={FIELD.GUARDIAN_NUMBER} />
            )}
          </div>

          <div className="col-span-1">
            <Dropdown
              stretched
              trigger={
                <div>
                  <TextInput
                    invalid={error.city.length > 0}
                    disabled
                    placeholder="Select City"
                    value={values.city}
                  />
                </div>
              }
              items={getMappedValue(details?.cities).sort((a, b) =>
                a.key.localeCompare(b.key)
              )}
              onSelect={(e: any) => handleChange(FIELD.CITY, e)}
            />
            {error.city.length > 0 && (
              <ShowError error={error} field={FIELD.CITY} />
            )}
          </div>

          <div className="col-span-1">
            <Dropdown
              stretched
              trigger={
                <div>
                  <TextInput
                    invalid={error.centerName.length > 0}
                    disabled
                    placeholder="Select Center"
                    value={values.centerName}
                  />
                </div>
              }
              items={getMappedValue(details?.centers).sort((a, b) =>
                a.key.localeCompare(b.key)
              )}
              onSelect={(e: any) => handleChange(FIELD.CENTER_NAME, e)}
            />
            {error.centerName.length > 0 && (
              <ShowError error={error} field={FIELD.CENTER_NAME} />
            )}
          </div>

          <div className="col-span-1">
            <Dropdown
              stretched
              trigger={
                <div>
                  <TextInput
                    invalid={error.class.length > 0}
                    disabled
                    placeholder="Select Class"
                    value={values.class}
                  />
                </div>
              }
              items={details?.classes?.map((item: any) => {
                return { ...item, key: item.name }
              })}
              onSelect={(e: any) => handleChange(FIELD.CLASS, e)}
            />
            {error.class.length > 0 && (
              <ShowError error={error} field={FIELD.CLASS} />
            )}
          </div>
          <div className="col-span-1">
            <Dropdown
              stretched
              trigger={
                <div>
                  <TextInput
                    invalid={error.department.length > 0}
                    disabled
                    placeholder="Select Department"
                    value={values.department}
                  />
                </div>
              }
              items={details?.departments?.map((item: any) => {
                return { ...item, key: item.name }
              })}
              onSelect={(e: any) => handleChange(FIELD.DEPARTMENT, e)}
            />
            {error.department.length > 0 && (
              <ShowError error={error} field={FIELD.DEPARTMENT} />
            )}
          </div>

          <div className="">
            {details?.courseDuration.length > 0 &&
            !details?.courseDuration[0]?.name.includes('Not Applicable') ? (
              <div className="col-span-1">
                <Dropdown
                  stretched
                  trigger={
                    <div>
                      <TextInput
                        disabled
                        invalid={error.courseDuration.length > 0}
                        placeholder="Select Course Duration"
                        value={values.courseDuration}
                      />
                    </div>
                  }
                  items={getMappedValue(details?.courseDuration).sort()}
                  onSelect={(e: any) => handleChange(FIELD.COURSE_DURATION, e)}
                />
                {error.courseDuration.length > 0 && (
                  <ShowError error={error} field={FIELD.COURSE_DURATION} />
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:items-end w-full mt-2">
        {query.totalAmount && (
          <div className="my-4 w-full flex justify-center md:justify-end">
            <Typography variant={'heading4'} weight={600}>
              Payable Amount: ₹{query.totalAmount || 0}
            </Typography>
          </div>
        )}

        <Button
          loading={isLoading}
          disabled={isLoading}
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
