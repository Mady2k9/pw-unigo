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
import { useRouter } from 'next/router'
import useApplyCoupon from '@lib/hooks/orders/useApplyCoupon'

const CheckoutCard = ({
  batchDetail,
  payload,
  activePlan,
  planId,
}: {
  batchDetail: BatchDetailModel
  payload: any
  activePlan?: Plans
  planId?: string
}) => {
  const { user } = useUI()
  const [checked, setChecked] = useState(false)
  const [coupon, setCoupon] = useState('')
  // const [walletPts, setWalletPts] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const isFree = batchDetail?.fee?.amount === 0
  const router = useRouter()

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

  const {
    data: couponData,
    isLoading: couponLoading,
    refetch: couponRefetch,
    error: couponError,
  } = useApplyCoupon({
    couponData: coupon,
    enabled: false,
  })

  const orderPayload = {
    ...payload,
    wallet: checked ? rewardPoints : 0,
    couponCode: !couponError ? coupon : '',
  }

  const {
    data,
    isLoading,
    refetch: refetchCreateOrder,
  } = useCreateOrder({
    orderData: orderPayload,
    enabled: false,
  })

  const enrollPayload =
    variant === BatchType.LIVE
      ? {
          batchId: batchDetail?._id,
          enabled: false,
        }
      : {
          batchId: batchDetail?._id,
          enabled: false,
          params: {
            planId: planId,
          },
        }

  const {
    data: enrollNow,
    refetch: refetchEnroll,
    error: enrollError,
  } = useEnrollStudent(enrollPayload)

  const pay = () => {
    if (isFree || (activePlan && +activePlan?.total === 0)) {
      refetchEnroll()
      if (!enrollError) router.push(`/batches/${batchDetail?.slug}#classroom`)
    } else {
      refetchCreateOrder()
    }
  }

  return (
    <Card>
      <div className={style.cardContainer}>
        {((variant === BatchType.LIVE && batchDetail?.fee?.amount > 0) ||
          (variant === BatchType.SELF_LEARNING &&
            activePlan &&
            +activePlan?.total > 0)) && (
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
                  onAction: () => couponRefetch(),
                  disabled: checked,
                }}
                variant="gray"
                value={coupon}
                onChange={(e: any) => setCoupon(e)}
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

        <Button
          onClick={pay}
          disabled={variant === BatchType.SELF_LEARNING && !activePlan}
        >
          {batchDetail?.fee.amount === 0 ||
          (activePlan && +activePlan.total === 0)
            ? 'Enroll'
            : 'Pay Now'}
        </Button>
      </div>
    </Card>
  )
}

export default CheckoutCard
