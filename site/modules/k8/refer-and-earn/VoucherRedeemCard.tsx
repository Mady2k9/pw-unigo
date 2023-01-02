import { Button, LoadingSection } from '@components/ui'
import { useCallback, useState } from 'react'
import cn from 'clsx'
import useRedeemCoupon from '@lib/hooks/refer-and-earn/useRedeemCoupon'
import { useRouter } from 'next/router'
import TransactionStatusModal, {
  TRANSACTION_STATUS,
  TRANSACTION_TYPE,
} from './TransactionStatusModal'

const VoucherRedeemCard = ({ couponDetail }: { couponDetail: any }) => {
  const [amount, setAmount] = useState('')
  const { redeemCoupon, isLoading, data: redeemData } = useRedeemCoupon()
  const { query } = useRouter()
  const [openTransactionStatusModal, setOpenTransactionStatusModal] =
    useState(false)

  const handleChange = useCallback((e: any) => {
    setAmount(e.target.value)
  }, [])

  const redeemVoucher = () => {
    if (!amount || amount === '') return // TODO: SHOW SNACKBAR

    setOpenTransactionStatusModal(true)
    // redeemCoupon({
    //   checksum: 'checksum',
    //   country_id: 1,
    //   denomination: +amount || 0,
    //   product_id: typeof query.id === 'string' ? +query.id : '',
    // })
  }

  return (
    <div
      className="w-[314px]"
      style={{
        borderRadius: '0 0 10px 10px',
        boxShadow: '0px 3px 6px #00000029',
      }}
    >
      <div
        className="flex items-center justify-between py-4 px-4 bg-[#5345CA]"
        style={{
          borderRadius: '10px 10px 0 0',
        }}
      >
        <span className="font-bold text-sm text-white">Available Rewards</span>
        <span className="font-bold text-sm text-white ">₹700</span>
      </div>
      <div className="flex flex-col gap-3 items-center px-4 py-4 text-center bg-white">
        <span className="font-bold text-sm">
          Enter the amount that you want to redeem in voucher
        </span>
        <div className="flex items-center gap-1 flex-wrap justify-center">
          {couponDetail.denomination.map((d: any) => (
            <span
              key={d.denomination}
              className={cn(
                `text-[12px] text-[#1B2124] font-semibold border-2 py-1 px-2 rounded-2xl cursor-pointer`,
                {
                  [`border-indigo-600 bg-indigo-100  text-indigo-700`]:
                    amount === d.denomination,
                }
              )}
              onClick={() => {
                setAmount(d.denomination)
              }}
            >
              +₹{d.denomination}
            </span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Enter Amount"
          className="w-full bg-transparent px-3 py-2 rounded-md font-bold text-sm outline-none"
          style={{ border: '1px solid #1B2124', borderRadius: '4px' }}
          value={amount}
          onChange={handleChange}
        />
        <div className="w-full">
          <Button onClick={redeemVoucher} className="w-full">
            Redeem Voucher
          </Button>
        </div>
      </div>
      {openTransactionStatusModal && (
        <TransactionStatusModal
          type={TRANSACTION_TYPE.BANK}
          status={TRANSACTION_STATUS.SUCCESS}
          isOpen={openTransactionStatusModal}
          onClose={() => setOpenTransactionStatusModal(false)}
        />
      )}
    </div>
  )
}

export default VoucherRedeemCard
