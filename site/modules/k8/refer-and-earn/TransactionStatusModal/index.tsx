import DialogComponent from '@components/ui/Dialog/Dialog'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import BankSuccess from './BankSuccess'
import Failure from './Failure'
import VoucherSuccess from './VoucherSuccess'

export enum TRANSACTION_STATUS {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export enum TRANSACTION_TYPE {
  VOUCHER = 'voucher',
  BANK = 'bank',
}

type Props = {
  isOpen: boolean
  onClose: () => void
  status: TRANSACTION_STATUS
  type: TRANSACTION_TYPE
}

const TransactionStatusModal = ({ isOpen, onClose, type, status }: Props) => {
  if (status === TRANSACTION_STATUS.SUCCESS) {
    switch (type) {
      case TRANSACTION_TYPE.VOUCHER:
        return (
          <DialogComponent isOpen={isOpen} title={'Hello'} onClose={onClose}>
            <VoucherSuccess />
          </DialogComponent>
        )
      case TRANSACTION_TYPE.BANK:
        return (
          <DialogComponent isOpen={isOpen} title={'Hello'} onClose={onClose}>
            <BankSuccess />
          </DialogComponent>
        )
    }
  } else {
    return (
      <DialogComponent isOpen={isOpen} title={'Hello'} onClose={onClose}>
        <Failure />
      </DialogComponent>
    )
  }
}

export default TransactionStatusModal
