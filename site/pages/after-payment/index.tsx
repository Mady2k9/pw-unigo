import { Layout } from '@components/common'
import AfterPaymentComponent, {
  PaymentStatus,
} from '@components/common/AfterPayment/AfterPaymentComponent'
import { Container } from '@components/ui'
import { useRouter } from 'next/router'

const AfterPayment = () => {
  const router = useRouter()
  const { status, order_id } = router.query

  const paymentStatus =
    status === PaymentStatus.SUCCESS
      ? PaymentStatus.SUCCESS
      : PaymentStatus.FAILURE

  return (
    <Layout>
      <Container>
        <AfterPaymentComponent
          status={paymentStatus}
          orderId={order_id as string}
        />
      </Container>
    </Layout>
  )
}

export default AfterPayment
