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
import useSignature from '@lib/hooks/orders/useSignature'
import usePaymentInfo from '@lib/hooks/orders/usePaymentInfo'
import useGetFeeId from '@lib/hooks/orders/useGetFeeId'
import useActivePaymentKey from '@lib/hooks/orders/useActivePaymentKey'
import { PaymentStatus } from '@components/common/AfterPayment/AfterPaymentComponent'
import useNotify, { NotificationEnums } from '@lib/useNotify'
import loadScript from '@lib/load-script'
import eventTracker from '@lib/eventTracker/eventTracker'
import { Arrow } from '@components/lotties'
import Offers from '@components/icons/Offers'
import cn from 'clsx'
import usePayByWallet from '@lib/hooks/batches/usePayByWallet'
import { parseMutationObject } from '@lib/utilities'

interface CheckoutDetails {
  discount: number
  amount: number
  total: number
}

const CheckoutCard = ({
  batchDetail,
  activePlan,
  planId,
  feeId,
}: {
  batchDetail: BatchDetailModel
  activePlan?: Plans
  planId?: string
  feeId: string
}) => {
  const isFree = batchDetail?.fee?.amount === 0
  const { user } = useUI()
  const { showNotification } = useNotify()
  const [checkoutDetails, setCheckoutDetails] = useState<CheckoutDetails>({
    discount: 0,
    amount: 0,
    total: 0,
  })
  const [checked, setChecked] = useState(false)
  const [coupon, setCoupon] = useState('')

  const [razorpayKey, setRazorpayKey] = useState('')

  const [hyperServiceObject, setHyperServiceObject] = useState(null as any)
  // const [walletPts, setWalletPts] = useState(0)
  const [couponsApplied, setCouponsApplied] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)
  const router = useRouter()

  const isBatchFree =
    batchDetail.planCount > 0
      ? batchDetail?.startingPlan?.amount === 0
      : batchDetail?.fee?.amount === 0

  const isAvailableFromPoints =
    batchDetail.planCount > 0
      ? activePlan?.isAvailableFromPoints
      : batchDetail.isAvailableFromPoints

  const variant = batchDetail?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  useEffect(() => {
    resetBatchPriceDetails()
  }, [batchDetail, activePlan])

  const resetBatchPriceDetails = () => {
    if (variant === BatchType.SELF_LEARNING && activePlan?._id) {
      setCheckoutDetails({
        discount: +activePlan?.discount as number,
        amount: +activePlan?.price as number,
        total: +activePlan?.total as number,
      })
    } else {
      setCheckoutDetails({
        discount: +batchDetail?.fee?.discount as number,
        amount: +batchDetail?.fee?.amount as number,
        total: +batchDetail?.fee?.total as number,
      })
    }
  }

  const { data: activePaymentKey, isLoading: paymentKeyLoading } =
    useActivePaymentKey({
      enabled: !isFree,
    })

  const rewardPoints = Math.min(
    +user?.profileId?.wallet,
    batchDetail.planCount > 0
      ? +parseMutationObject(activePlan?.maxWalletPoints)
      : +batchDetail.maxWalletPoint
  )

  useEffect(() => {
    if (checked) {
      setTotalAmount(totalAmount - rewardPoints)
    } else {
      setTotalAmount(batchDetail?.fee?.total)
    }
  }, [checked])

  useEffect(() => {
    setChecked(false)
  }, [activePlan?._id])

  const {
    data: couponData,
    isLoading: couponLoading,
    mutate: couponMutation,
    error: couponError,
    isError,
    isSuccess,
  } = useApplyCoupon()

  console.log(couponData)

  const { data: orderData, isLoading, mutate: orderMutate } = useCreateOrder()

  const {
    data: payByPointsData,
    isLoading: payByPointsLoading,
    error,
    payByPoints,
  } = usePayByWallet()

  useEffect(() => {
    if (isSuccess) {
      setCheckoutDetails({
        discount: +couponData?.data.data.discountedAmount as number,
        amount: +couponData?.data.data.totalAmount as number,
        total: +couponData?.data.data.finalAmount as number,
      })
    } else {
      resetBatchPriceDetails()
    }
  }, [isSuccess, isError])

  useEffect(() => {
    if (checked) {
      let data = {
        discount: +(checkoutDetails.discount + rewardPoints),
        amount: checkoutDetails.amount,
        total: +(checkoutDetails.total - rewardPoints),
      }
      setCheckoutDetails(data)
    } else {
      resetBatchPriceDetails()
    }
  }, [checked])

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

  const uuidv4 = () => {
    // @ts-ignore
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      // tslint:disable-next-line:no-bitwise
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    )
  }

  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.HyperServices) {
      // localStorage.removeItem('order_details')
      // @ts-ignore
      const _hyperServiceObject = new window.HyperServices()
      setHyperServiceObject(_hyperServiceObject)
    }
  }, [])

  const { data: signatureData, mutate: signatureMutate } = useSignature()

  const juspayRedirect = (order: any) => {
    let orderResponse: any

    if (order) {
      order['response']['customerEmail'] = user?.email
      orderResponse = order

      const sdkPayload = {
        service: 'in.juspay.hyperpay',
        requestId: uuidv4(),
        payload: orderResponse?.response,
      }

      hyperServiceObject.process(sdkPayload)
    }
  }

  const { data: rzpKey, isLoading: rzpKeyLoading } = usePaymentInfo({
    enabled: !activePaymentKey.razorpay,
  })

  useEffect(() => {
    if (rzpKey) {
      if (rzpKey.length === 1) {
        setRazorpayKey(rzpKey[0].id)
      } else {
        const rpKey = rzpKey.find((item) => item.name === 'two')

        setRazorpayKey(rpKey!.id)
      }
    }
  }, [rzpKey])

  const initiateHyperService = (data: any) => {
    const sdkPayload = {
      service: 'in.juspay.hyperpay',
      requestId: uuidv4(),
      payload: data,
    }
    hyperServiceObject.initiate(sdkPayload)

    setTimeout(() => {
      orderMutate(
        {
          client: 'web',
          feeMapId: feeId,
          name: batchDetail?.name,
          paymentSource: 'JUSPAY',
          returnHost: `${window.location.origin}/`,
          wallet: checked ? rewardPoints : 0,
          couponCode: !couponError ? coupon : '',
          type: 'BATCH',
        },
        {
          onSuccess: (data: any) => {
            juspayRedirect(data?.data?.data)
          },
        }
      )
    }, 1500)
  }

  const razorpay = async (orderDetails: any) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!res) {
      showNotification({
        title: 'Razorpay failed to load!!! Are you online?',
        type: NotificationEnums.ERROR,
      })
    }

    const options = {
      key: razorpayKey,
      amount: orderDetails.amount_due,
      currency: 'INR',
      name: batchDetail?.name,
      description: 'A PW Product',
      order_id: orderDetails.id,
      // callback_url: 'localhost:3000/after-payment',
      handler: function (response: any) {
        router.push(
          `/after-payment?status=${PaymentStatus.SUCCESS}&order_id=${orderDetails.receipt}`
        )
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
      },
      prefill: {
        name: user?.firstName + user?.lastName,
        email: user?.email,
        contact: user?.primaryNumber,
      },
      themes: {
        color: '#000000',
      },
    }

    const _window = window as any
    const rzpay = new _window.Razorpay(options)
    rzpay.on('payment.failed', function (_response: any) {
      router.push(
        `/after-payment?status=${PaymentStatus.FAILURE}&order_id=${orderDetails.receipt}`
      )
    })

    rzpay.on('payment.cancel', function (_response: any) {
      alert('cancelleddd')
    })

    rzpay.open()
  }

  const pay = () => {
    eventTracker.batchPayNow(
      batchDetail,
      checkoutDetails.total,
      activePlan?.title
    )
    if (checkoutDetails.total === 0) {
      if (checked) {
        orderMutate(
          {
            feeMapId: feeId,
            name: batchDetail?.name,
            paymentSource: 'WALLET',
            wallet: checked ? rewardPoints : 0,
            type: 'BATCH',
          },
          {
            onSuccess: (data: any) => {
              const orderId = data?.data?.data?._id
              payByPoints(
                { orderId },
                {
                  onSuccess: () => {
                    router.push({
                      pathname: `/after-payment`,
                      query: {
                        status: PaymentStatus.SUCCESS,
                        order_id: orderId,
                      },
                    })
                  },
                  onError: () => {
                    router.push({
                      pathname: `/after-payment`,
                      query: {
                        status: PaymentStatus.FAILURE,
                        order_id: orderId,
                      },
                    })
                  },
                }
              )
            },
          }
        )
        return
      } else {
        refetchEnroll()
        if (!enrollError) {
          router.replace(`/batches/${batchDetail?.slug}#classroom`)
        }
        return
      }
    }

    if (activePaymentKey.razorpay) {
      orderMutate(
        {
          feeMapId: feeId,
          paymentKey: razorpayKey,
          name: batchDetail?.name,
          paymentSource: 'RAZOR_PAY',
          wallet: checked ? rewardPoints : 0,
          couponCode: !couponError ? coupon : '',
          type: 'BATCH',
        },
        {
          onSuccess: (data: any) => {
            const orderDetails = data?.data?.data?.response
            razorpay(orderDetails)
          },

          onError: (err: any) => console.error(err),
        }
      )
    } else {
      signatureMutate(
        {},
        {
          onSuccess: (_data: any) => {
            const newSignaturePay = {
              ..._data?.data?.data,
              hyperSDKDiv: 'merchantViewId',
              integrationType: 'redirection',
            }

            initiateHyperService(newSignaturePay)
          },
        }
      )
    }
  }

  return (
    <Card>
      <div className={style.cardContainer}>
        {checkoutDetails.amount > 0 && (
          <div className={style.upperContainer}>
            <Typography variant="heading4" weight={700}>
              Offers & Coupons
            </Typography>

            {!!rewardPoints && isAvailableFromPoints && (
              <div className={style.rewardContainer}>
                <div className="flex items-center">
                  <Checkbox
                    title=""
                    checked={checked}
                    onClick={() => setChecked((prev) => !prev)}
                    disabled={couponsApplied}
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
            )}

            {couponsApplied ? (
              <div className={cn(style.applyCouponContainer)}>
                <div
                  className={cn('flex h-[55px] items-center rounded-lg', {
                    ['border border-red-400']: isError,
                    ['border border-green-400']: isSuccess,
                  })}
                >
                  <div className={'pl-3'}>
                    <Offers isError={isError} isSuccess={isSuccess} />
                  </div>
                  <div className={'px-2 flex-1'}>
                    {isSuccess && (
                      <div className={'flex flex-col'}>
                        <Typography weight={700}>
                          <span className={'text-[#3BB143]'}>
                            YAY! You saved{' '}
                            {priceDisplay(
                              couponData?.data?.data?.discountedAmount
                            )}
                          </span>
                        </Typography>
                        <Typography weight={700} variant="label">
                          <span className={'text-[#333333]'}>{coupon}</span>
                        </Typography>
                      </div>
                    )}
                    {isError && (
                      <div className="text-red-500">
                        <Typography weight={700}>Invalid Coupon</Typography>
                      </div>
                    )}
                  </div>
                  <div className={'pr-4 pl-1 flex'}>
                    <Button
                      onClick={() => {
                        setCouponsApplied(false)
                        setCoupon('')
                        resetBatchPriceDetails()
                      }}
                      variant={'naked'}
                    >
                      <span className={'text-[#FF0F48]'}>REMOVE</span>
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={cn(style.applyCouponContainer)}>
                <TextInput
                  action={{
                    text: 'APPLY',
                    onAction: () =>
                      couponMutation(
                        {
                          couponCode: coupon,
                          type: 'BATCH',
                          typeIds: [feeId],
                        },
                        {
                          onSuccess: (data: any) => {
                            setCouponsApplied(true)
                            setCheckoutDetails({
                              ...checkoutDetails,
                              discount: data?.data?.discountedAmount,
                            })
                          },
                          onError: (e: any) => {
                            setCouponsApplied(true)
                            console.log(e)
                          },
                        }
                      ),
                    disabled: checked || !!!coupon.length || !feeId,
                  }}
                  variant="gray"
                  value={coupon}
                  onChange={(e: any) => setCoupon(e)}
                  placeholder="Have a Coupon Code?"
                  preElement={
                    <div className="pl-2">
                      <Offers />
                    </div>
                  }
                />
              </div>
            )}
          </div>
          // </div>
        )}

        <div className={style.lowerContainer}>
          <Typography variant="heading4" weight={700}>
            Breakups
          </Typography>
          <div className={style.breakupsContainer}>
            {checkoutDetails.amount > 0 && (
              <div>
                <Typography variant="small" weight={500}>
                  Sub Total
                </Typography>
                <Typography variant="small" weight={600}>
                  {priceDisplay(checkoutDetails.amount)}
                </Typography>
              </div>
            )}
            {checkoutDetails.amount > 0 && checkoutDetails.discount > 0 && (
              <div>
                <Typography variant="small" weight={500}>
                  Discount
                </Typography>
                <Typography variant="small" weight={500}>
                  <span className="text-[#3AA2AB]">
                    -
                    {priceDisplay(
                      checkoutDetails.amount - checkoutDetails.total
                    )}
                  </span>
                </Typography>
              </div>
            )}
            <div>
              <Typography variant="small" weight={500}>
                Sub Total
              </Typography>
              <Typography variant="subHeading" weight={600}>
                {priceDisplay(checkoutDetails.total)}
              </Typography>
            </div>
          </div>
        </div>

        <Button
          postIcon={
            <div className="-rotate-90">
              <Arrow />
            </div>
          }
          onClick={pay}
          disabled={
            (variant === BatchType.SELF_LEARNING && !activePlan) ||
            (isBatchFree
              ? new Date(batchDetail.endDate).getTime() < new Date().getTime()
              : !feeId)
          }
        >
          {checkoutDetails.amount === 0 ? 'Enroll' : 'Pay Now'}
        </Button>
      </div>
    </Card>
  )
}

export default CheckoutCard
