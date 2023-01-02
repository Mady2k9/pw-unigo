import { Layout } from '@components/common'
import { useProductCoupon } from '@lib/hooks/refer-and-earn/useProductCoupon'
import { useRouter } from 'next/router'
import { Container, LoadingSection } from '@components/ui'
import { useLayoutEffect, useRef } from 'react'
import { VoucherRedeemCard } from '@modules/k8/refer-and-earn'

const Voucher = () => {
  const router = useRouter()
  const tncRef = useRef<HTMLDivElement>(null)
  const couponId = router.query.id
  const payload = {
    checksum: 'checksum',
    country_id: 1,
    product_id: couponId,
  }

  const { productCoupons, isLoading } = useProductCoupon(payload)
  useLayoutEffect(() => {
    if (productCoupons?.length) {
      if (null !== tncRef.current) {
        tncRef.current.innerHTML = productCoupons[0].offerTnc
      }
    }
  }, [productCoupons])

  if (isLoading) {
    return <LoadingSection />
  } else if (!productCoupons) {
    return <div></div>
  }

  const couponDetail = productCoupons[0]

  const backgroundStyle = {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${couponDetail.bgImage2})`,
    backgroundSize: 'contain',
  }

  return (
    <Layout isProtected={true} variant="NoPadding">
      <main className="relative">
        <section className={`h-[204px]`}>
          <div style={backgroundStyle} className="h-full w-full"></div>
        </section>
        <section className="max-w-full md:max-w-screen-sm my-8">
          <Container>
            <div ref={tncRef}></div>
          </Container>
        </section>

        <div className="absolute top-10 right-20">
          <VoucherRedeemCard couponDetail={couponDetail} />
        </div>
      </main>
    </Layout>
  )
}
export default Voucher
