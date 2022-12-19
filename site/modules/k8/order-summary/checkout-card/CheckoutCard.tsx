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
import {BatchDetailModel} from '@lib/hooks/batches/useBatchDetails'
import {useState} from 'react'
import {useEffect} from 'react'
import {priceDisplay} from '@lib/user-utility'
import useCreateOrder from '@lib/hooks/orders/useCreateOrder'
import useEnrollStudent from '@lib/hooks/batches/useEnrollStudent'
import {Plans} from '@lib/hooks/batches/usePlansList'
import {BatchType} from '@lib/hooks/batches/useBatches'
import {useRouter} from 'next/router'
import useApplyCoupon from '@lib/hooks/orders/useApplyCoupon'
import useSignature from '@lib/hooks/orders/useSignature'
import useRazorpay from 'react-razorpay'
import usePaymentInfo from '@lib/hooks/orders/usePaymentInfo'
import useGetFeeId from '@lib/hooks/orders/useGetFeeId'
import useActivePaymentKey from '@lib/hooks/orders/useActivePaymentKey'

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
    const {user} = useUI()
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
    const [totalAmount, setTotalAmount] = useState(0)
    const router = useRouter()
    const Razorpay = useRazorpay()

    const variant = batchDetail?.isSelfLearning
        ? BatchType.SELF_LEARNING
        : BatchType.LIVE

    useEffect(() => {
        if (variant === BatchType.SELF_LEARNING) {
            activePlan &&
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
    }, [batchDetail, activePlan])

    const {data: activePaymentKey, isLoading: paymentKeyLoading} =
        useActivePaymentKey({
            enabled: !isFree,
        })

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
        mutate: couponMutation,
        error: couponError,
    } = useApplyCoupon()

    const {data: orderData, isLoading, mutate: orderMutate} = useCreateOrder()

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

    const {data: signatureData, mutate: signatureMutate} = useSignature()

    const juspayRedirect = (order: any) => {
        let orderResponse: any
        console.log(order)

        if (order) {
            order['response']['customerEmail'] = user?.email
            orderResponse = order

            const sdkPayload = {
                service: 'in.juspay.hyperpay',
                requestId: uuidv4(),
                payload: orderResponse?.response,
            }

            console.log(sdkPayload)

            hyperServiceObject.process(sdkPayload)
        }
    }

    const {data: rzpKey, isLoading: rzpKeyLoading} = usePaymentInfo({
        enabled: activePaymentKey.razorpay,
    })

    useEffect(() => {
        if (rzpKey) {
            if (rzpKey.length === 1) {
                setRazorpayKey(rzpKey[0].id)
            } else {
                const rpKey = rzpKey.filter((item) => item.name === 'two')
                setRazorpayKey(rpKey[0].id)
            }
        }
    }, [rzpKey])

    const razorpayHandler = (data: any) => {
        if (data) {
            const order_id = data.receipt || data.id
            const options = {
                key: razorpayKey,
                currency: 'INR',
                theme: {
                    color: '#3399cc',
                },
                amount: data.amount_due,
                name: batchDetail?.name,
                order_id: data.id,
                handler: function (_response: any) {
                    router.push(`/payment-success?status=CHARGED&order_id=${order_id}`)
                    // alert(response.razorpay_order_id)
                    // alert(response.razorpay_signature)
                },
                prefill: {
                    name: user?.first_name + user?.last_name,
                    email: user?.email,
                    contact: user?.phone,
                },
            }

            const rzpay = new Razorpay(options)
            rzpay.on('payment.failed', function (_response: any) {
                router.push('/payment-success')
            })
            rzpay.open()
        }
    }

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
                    returnHost: 'https://localhost:3000/',
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

    const pay = () => {
        if (checkoutDetails.amount === 0) {
            refetchEnroll()
            if (!enrollError) {
                router.replace(`/batches/${batchDetail?.slug}#classroom`)
            }
            return
        }

        if (activePaymentKey.razorpay) {
            orderMutate(
                {
                    client: 'web',
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
                        console.log(data?.data?.data?.response)
                        razorpayHandler(data?.data?.data?.response)
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

                        console.log(JSON.stringify(newSignaturePay))

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

                        {batchDetail?.isAvailableFromPoints && (
                            <div className={style.rewardContainer}>
                                <div className="flex items-center">
                                    <Checkbox
                                        title=""
                                        checked={checked}
                                        onClick={() => setChecked((prev) => !prev)}
                                    />
                                    <div className="flex items-center gap-2">
                                        <img src={coin.src} alt=""/>
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
                        <div className={style.applyCouponContainer}>
                            <TextInput
                                action={{
                                    text: 'APPLY',
                                    onAction: () =>
                                        couponMutation({
                                            couponCode: coupon,
                                            type: 'BATCH',
                                            typeIds: [feeId],
                                        }),
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
                    {checkoutDetails.discount.toFixed()}%
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
                    onClick={pay}
                    // disabled={variant === BatchType.SELF_LEARNING && !activePlan}
                >
                    {checkoutDetails.amount === 0 ? 'Enroll' : 'Pay Now'}
                </Button>
            </div>
        </Card>
    )
}

export default CheckoutCard
