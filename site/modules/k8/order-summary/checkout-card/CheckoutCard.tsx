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
import useActivePaymentKey from '@lib/hooks/orders/useActivePaymentKey'
import usePaymentInfo from '@lib/hooks/orders/usePaymentInfo'

const CheckoutCard = ({
  batchDetail,
  feeId,
}: {
  batchDetail: BatchDetailModel
  feeId: string
}) => {
  // const { user } = useUI()
  // const [checked, setChecked] = useState(false)
  // const [totalAmount, setTotalAmount] = useState(0)

  // const rewardPoints = Math.min(
  //   +user?.profileId?.wallet,
  //   +batchDetail?.maxWalletPoint
  // )

  // useEffect(() => {
  //   setTotalAmount(batchDetail?.fee?.total)
  // }, [batchDetail])

  // useEffect(() => {
  //   if (checked) {
  //     setTotalAmount(totalAmount - rewardPoints)
  //   } else {
  //     setTotalAmount(batchDetail?.fee?.total)
  //   }
  // }, [checked])

  const { data: activePaymentKey, isLoading: paymentKeyLoading } =
    useActivePaymentKey()
  const { data: rzpKey, isLoading: rzpKeyLoading } = usePaymentInfo()

  let paymentSource = ''
  let razorpayKey = ''

  if (!paymentKeyLoading) {
    for (const item of Object.entries(activePaymentKey)) {
      if (item[0] === 'juspay' && item[1]) {
        paymentSource = item[0]
        return
      }

      if (item[1]) {
        paymentSource = item[0]
      }
    }
  }

  // const { data: paymentSignature } = useSignature({
  //   enabled:
  // !batchDetail?.isPurchased &&
  //     batchDetail?.fee?.amount > 0 &&
  //     paymentSource === 'juspay',
  // })

  if (!rzpKeyLoading) {
    rzpKey.forEach((key) => {
      if (key.name === 'two') {
        razorpayKey = key.id
        return
      }
      razorpayKey = key.id
    })
  }

  const payload =
    paymentSource === 'juspay'
      ? {
          name: batchDetail?.name,
          paymentSource: paymentSource.toUpperCase(),
          client: 'web',
          returnHost: 'k8-dev.penpencil.co',
          feeMapId: feeId,
          type: 'BATCH',
          // wallet: '',
          // couponCode: '',
        }
      : {
          name: batchDetail?.name,
          paymentSource: 'RAZOR_PAY',
          paymentKey: razorpayKey,
          feeMapId: feeId,
          type: 'BATCH',
          // wallet: '',
          // couponCode: '',
        }

  // const {
  //   data,
  //   isLoading,
  //   refetch: refetchCreateOrder,
  // } = useCreateOrder({ orderData: payload, enabled: false })

  // const payNow = () => {
  //   console.log('123')
  //   refetchCreateOrder
  // }

  return <CheckoutCardWrapper batchDetail={batchDetail} payload={payload} />
}

const CheckoutCardWrapper = ({
  batchDetail,
  payload,
}: {
  batchDetail: BatchDetailModel
  payload: any
}) => {
  const { user } = useUI()
  const [checked, setChecked] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)
  const [payNow, setPayNow] = useState(false)

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
    data,
    isLoading,
    refetch: refetchCreateOrder,
  } = useCreateOrder({ orderData: payload, enabled: payNow })

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

        <Button onClick={pay}>
          {batchDetail?.fee.amount === 0 ? 'Enroll' : 'Pay Now'}
        </Button>
      </div>
    </Card>
  )
}
