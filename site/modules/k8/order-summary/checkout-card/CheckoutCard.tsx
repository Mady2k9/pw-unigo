/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Card,
  Checkbox,
  Typography,
  TextInput,
  useUI,
} from '@components/ui'
import style from './CheckoutCard.module.css'
import coin from '@assets/images/coin.svg'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'
import { useState } from 'react'
import { useEffect } from 'react'
import useGetFeeId from '@lib/hooks/orders/useGetFeeId'
import { priceDisplay } from '@lib/user-utility'

const CheckoutCard = ({ batchDetail }: { batchDetail: BatchDetailModel }) => {
  const { user } = useUI()
  const [checked, setChecked] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)

  const rewardPoints = Math.min(
    +user?.profileId?.wallet,
    +batchDetail?.maxWalletPoint
  )

  useEffect(() => {
    setTotalAmount(batchDetail?.fee?.total)
  }, [batchDetail])

  useEffect(() => {
    if (checked) {
      setTotalAmount(totalAmount - rewardPoints)
    } else {
      setTotalAmount(batchDetail?.fee?.total)
    }
  }, [checked])

  const payNow = () => {}

  return (
    <Card>
      <div className={style.cardContainer}>
        {batchDetail?.fee?.amount > 0 && (
          <div className={style.upperContainer}>
            <Typography variant="heading4" weight={700}>
              Offers & Coupons
            </Typography>
            <div>
              <div className={style.rewardContainer}>
                <div className="flex items-center">
                  <Checkbox
                    title=""
                    checked={checked}
                    onClick={() => setChecked((prev) => !prev)}
                  />
                  <div className="flex items-center gap-2">
                    <img src={coin.src} alt="" />
                    <Typography variant="tiny" weight={700}>
                      {rewardPoints} Reward Points
                    </Typography>
                  </div>
                </div>
                <Typography variant="tiny" weight={500}>
                  <span className="text-gray-500">
                    You have {user?.profileId?.wallet} rewards point to redeem
                  </span>
                </Typography>
              </div>
            </div>
            <div className={style.applyCouponContainer}>
              <TextInput
                action={{
                  text: 'APPLY',
                  onAction: () => console.log('123'),
                  disabled: checked,
                }}
                variant="gray"
                placeholder="Have a Coupon Code?"
              />
            </div>
          </div>
        )}

        <div className={style.lowerContainer}>
          <Typography variant="heading4" weight={700}>
            Breakups
          </Typography>
          <div className={style.breakupsContainer}>
            {batchDetail?.fee?.amount > 0 && (
              <div>
                <Typography variant="small" weight={500}>
                  Sub Total
                </Typography>
                <Typography variant="small" weight={600}>
                  {priceDisplay(batchDetail?.fee?.amount)}
                </Typography>
              </div>
            )}
            {batchDetail?.fee.amount > 0 && batchDetail?.fee?.discount > 0 && (
              <div>
                <Typography variant="small" weight={500}>
                  Discount
                </Typography>
                <Typography variant="small" weight={500}>
                  <span className="text-[#3AA2AB]">
                    {priceDisplay(batchDetail?.fee?.discount)}
                  </span>
                </Typography>
              </div>
            )}
            <div>
              <Typography variant="small" weight={500}>
                Sub Total
              </Typography>
              <Typography variant="subHeading" weight={600}>
                {priceDisplay(totalAmount)}
              </Typography>
            </div>
          </div>
        </div>

        <Button onClick={payNow}>
          {batchDetail?.fee.amount === 0 ? 'Enroll' : 'Pay Now'}
        </Button>
      </div>
    </Card>
  )
}

export default CheckoutCard
