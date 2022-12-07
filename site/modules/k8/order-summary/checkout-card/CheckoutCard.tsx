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
import { priceDisplay } from '@lib/user-utility'
import useCreateOrder from '@lib/hooks/orders/useCreateOrder'
import useEnrollStudent from '@lib/hooks/batches/useEnrollStudent'
import { Plans } from '@lib/hooks/batches/usePlansList'
import { BatchType } from '@lib/hooks/batches/useBatches'

const CheckoutCard = ({
  batchDetail,
  payload,
  activePlan,
}: {
  batchDetail: BatchDetailModel
  payload: any
  activePlan?: Plans
}) => {
  const { user } = useUI()
  const [checked, setChecked] = useState(false)
  const [coupon, setCoupon] = useState('')
  const [walletPts, setWalletPts] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [payNow, setPayNow] = useState(false)

  const variant = batchDetail?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

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

  const orderPayload = {
    ...payload,
    wallet: checked ? rewardPoints : 0,
  }

  const {
    data,
    isLoading,
    refetch: refetchCreateOrder,
  } = useCreateOrder({
    orderData: orderPayload,
    enabled: payNow && batchDetail?.fee?.amount > 0,
  })

  // const { data: enrollNow} = useEnrollStudent({batchId: batchDetail?._id})

  const pay = () => {
    setPayNow(true)
  }

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
                  {variant === BatchType.LIVE
                    ? priceDisplay(batchDetail?.fee?.amount)
                    : priceDisplay(activePlan?.price)}
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
                    {variant === BatchType.LIVE
                      ? batchDetail?.fee?.discount
                      : activePlan?.discount}
                    %
                  </span>
                </Typography>
              </div>
            )}
            <div>
              <Typography variant="small" weight={500}>
                Sub Total
              </Typography>
              <Typography variant="subHeading" weight={600}>
                {variant === BatchType.LIVE
                  ? priceDisplay(totalAmount)
                  : priceDisplay(activePlan?.total)}
              </Typography>
            </div>
          </div>
        </div>

        <Button onClick={pay}>
          {batchDetail?.fee.amount === 0 ? 'Enroll' : 'Pay Now'}
        </Button>
      </div>
    </Card>
  )
}

export default CheckoutCard
