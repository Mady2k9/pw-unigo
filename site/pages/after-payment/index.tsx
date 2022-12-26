import {Layout} from '@components/common'
import AfterPaymentComponent, {
    PaymentStatus,
} from '@components/common/AfterPayment/AfterPaymentComponent'
import {Container} from '@components/ui'
import {useRouter} from 'next/router'
import {BlankLayout} from "@components/common/Layout";

const AfterPayment = () => {
    const router = useRouter()
    const {status, order_id} = router.query

    const paymentStatus =
        status === PaymentStatus.SUCCESS
            ? PaymentStatus.SUCCESS
            : PaymentStatus.FAILURE

    return (
        <BlankLayout>
            <Container className={'h-full'}>
                <AfterPaymentComponent
                    status={paymentStatus}
                    orderId={order_id as string}
                />
            </Container>
        </BlankLayout>
    )
}

export default AfterPayment
