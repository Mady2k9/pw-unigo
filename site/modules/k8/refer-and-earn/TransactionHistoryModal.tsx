import { Button, TextInput, Typography } from '@components/ui'
import { Dialog } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import useGetTransactionDetails from '@lib/hooks/refer-and-earn/useGetTransactionDetails'
import React from 'react'

const TransactionHistoryModal = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  const { data } = useGetTransactionDetails({
    params: {
      page: 1,
    },
  })

  console.log(data)

  return (
    <Dialog className={'relative z-[999999]'} open={open} onClose={onClose}>
      <div className="fixed inset-0 bg-black/40  " aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 ">
        <Dialog.Panel className="mx-auto w-full max-w-xl transform divide-y  overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
          <div>
            <div className="py-4 px-5 flex items-center justify-between border-b border-gray-200">
              <Typography weight={700} variant="heading3">
                Redeemed
              </Typography>
              <div className={'cursor-pointer'} onClick={onClose}>
                <XCircleIcon className={'h-8 w-8 text-gray-400'} />
              </div>
            </div>
            <div className="py-4 px-3 flex flex-col gap-3">
              <Typography variant="small" weight={700}>
                Add Your UPI ID
              </Typography>

              <div className="mx-auto">
                <Typography variant="small" weight={700}>
                  Don't have UPI ID?{' '}
                  <span className="text-primary underline">
                    Add Bank Details
                  </span>
                </Typography>
              </div>
              <div className="min-w-[75%] mx-auto mt-2">
                <Button className="w-full">Save</Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default TransactionHistoryModal
