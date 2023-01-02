import Image from 'next/image'
import user from '@assets/images/user.svg'
import { useEffect, useState } from 'react'

interface IReferalData {
  _id: string
  amount: number
  coinAmount: string
  createdAt: string
  referralThrough: string
  referralType: string
  referredBy: string
  status: string
  typeId: string
  updatedAt: string
  userId: {
    firstName: string
  }
}
const ReferredFriendCard = ({ friend }: { friend: IReferalData }) => {
  const [status, setStatus] = useState('')

  useEffect(() => {
    friend?.status.toLowerCase() === 'invited'
      ? setStatus('Invited')
      : setStatus(`₹${friend?.amount.toFixed()} Rewards`)
  }, [])

  return (
    <div className="shadow-md rounded-md p-2 min-w-[527px] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={user}
          alt=""
          height={42}
          width={42}
          className="object-contain"
          style={{ borderRadius: '100%' }}
        />
        <span className="font-semibold text-base">
          {friend?.userId?.firstName}
        </span>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <span
          className={`${
            friend?.status.toLowerCase() === 'invited'
              ? 'bg-[#5A4BDA]'
              : 'bg-[#55B35B]'
          } py-1 px-1.5 text-white font-semibold text-xs rounded sm`}
        >
          {status}
        </span>
        <span className="font-semibold text-[10px] text-[#888888]">
          {friend?.createdAt}
        </span>
      </div>
    </div>
  )
}

export default ReferredFriendCard
