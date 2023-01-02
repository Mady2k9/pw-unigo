import { Button, TextInput, Typography } from '@components/ui'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'
import { XCircleIcon } from '@heroicons/react/20/solid'
import useVerifyUpi from '@lib/hooks/refer-and-earn/useVerifyUpi'
import Verified from '@assets/images/verify.svg'
import { useFormik } from 'formik'

const BankModal = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  const [upi, setUpi] = useState<string>('')
  const [isUpiScreen, setIsUpiScreen] = useState<boolean>(true)
  const { verifyUpi, data } = useVerifyUpi()

  const initialValues = {
    accountHolderName: '',
    ifsc: '',
    accountNumber: '',
    confirmAccountNumber: '',
  }

  const valdateBankForm = (values: any) => {
    let errors = {
      accountHolderName: '',
      ifsc: '',
      accountNumber: '',
      confirmAccountNumber: '',
    }

    if (!values.accountHolderName)
      errors.accountHolderName = 'First Name is required'
    if (!values.ifsc) errors.ifsc = 'Last Name is required'
    if (!values.accountNumber) {
      errors.accountNumber = 'Account Number is required'
    } else if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.accountNumber)
    ) {
      errors.accountNumber = 'Account Number is incorrect'
    }
    if (!values.confirmAccountNumber)
      errors.confirmAccountNumber = 'Gender is required'

    return errors
  }

  const { handleSubmit, values, errors, handleChange } = useFormik({
    initialValues,
    validate: valdateBankForm,
    onSubmit: (values) => {
      console.log('----------values', values)
    },
  })

  return (
    <Dialog className={'relative z-[999999]'} open={open} onClose={onClose}>
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 ">
        <Dialog.Panel className="mx-auto max-w-3xl transform divide-y  overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
          {isUpiScreen ? (
            <div className="w-96">
              <div className="bg-indigo-700 text-white py-4 px-3 flex items-center justify-between">
                <Typography weight={700}>Enter Bank Account Details</Typography>
                <div className={'cursor-pointer'} onClick={onClose}>
                  <XCircleIcon className={'h-6 w-6 text-white'} />
                </div>
              </div>
              <div className="py-4 px-3 flex flex-col gap-3">
                <Typography variant="small" weight={700}>
                  Add Your UPI ID
                </Typography>
                <TextInput
                  placeholder="username@bank"
                  value={upi}
                  onChange={(e: any) => setUpi(e)}
                  variant="gray"
                  action={{
                    text: 'Verify',
                    onAction: () => {
                      verifyUpi({
                        vpa: upi,
                      })
                    },
                    disabled: !!!upi.length,
                  }}
                />
                {data && !data?.data?.hasOwnProperty('error') && (
                  <div className="flex items-center gap-1 pl-2 text-green-800 -mt-2">
                    <Typography variant="tiny" weight={600}>
                      Verified
                    </Typography>
                    <Image src={Verified} alt="" />{' '}
                  </div>
                )}

                {data?.data?.hasOwnProperty('error') && (
                  <div className="text-red-600 px-2 -mt-2">
                    <Typography variant="tiny" weight={600}>
                      Please enter a valid UPI id!
                    </Typography>
                  </div>
                )}

                <div className="mx-auto">
                  <Typography variant="small" weight={700}>
                    Don't have UPI ID?{' '}
                    <span
                      onClick={() => setIsUpiScreen(false)}
                      className="text-primary underline cursor-pointer"
                    >
                      Add Bank Details
                    </span>
                  </Typography>
                </div>
                <div className="min-w-[75%] mx-auto mt-2">
                  <Button className="w-full">Save</Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full md:min-w-[465px]">
              <div className="bg-indigo-700 text-white py-4 px-3 flex items-center justify-between">
                <Typography weight={700}>Enter Bank Account Details</Typography>
                <div className={'cursor-pointer'} onClick={onClose}>
                  <XCircleIcon className={'h-6 w-6 text-white'} />
                </div>
              </div>
              <div className="px-3 py-2">
                <Typography weight={700} variant={'small'}>
                  <span className="text-[#1B1224]">
                    Add Bank Account Details
                  </span>
                </Typography>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="px-3">
                  <input
                    placeholder="Account Holder Name"
                    value={values.accountHolderName}
                    size={20}
                    onChange={handleChange}
                    name="accountHolderName"
                  />
                  <div className="mt-3">
                    <TextInput
                      placeholder="IFSC Code"
                      value={values.ifsc}
                      size={20}
                      onChange={handleChange}
                      variant="flat"
                      name="ifsc"
                    />
                  </div>
                  <div className="mt-3">
                    <TextInput
                      placeholder="Account Number"
                      value={values.accountNumber}
                      size={20}
                      onChange={handleChange}
                      variant="flat"
                      name="accountNumber"
                    />
                  </div>
                  <div className="mt-3">
                    <TextInput
                      placeholder="Confirm Account Number"
                      value={values.confirmAccountNumber}
                      size={20}
                      onChange={handleChange}
                      variant="flat"
                      name="confirmAccountNumber"
                    />
                  </div>
                  <div className="w-full mt-10 mb-5 flex justify-center">
                    <Button type="submit" className="w-10/12 ">
                      SAVE
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default BankModal
