import { Layout } from '@components/common'
import { ProductCoupons, RedeemNowHeader } from '@modules/k8/refer-and-earn'

const RedeemNow = () => {
  return (
    <Layout isProtected={true} variant="NoPadding">
      <main>
        <RedeemNowHeader />
        <ProductCoupons />
      </main>
    </Layout>
  )
}
export default RedeemNow
