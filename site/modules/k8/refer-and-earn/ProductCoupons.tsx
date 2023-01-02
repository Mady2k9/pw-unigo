import { Container, LoadingSection, Typography } from '@components/ui'
import { useProductCoupon } from '@lib/hooks/refer-and-earn/useProductCoupon'
import Link from 'next/link'
import styles from './ReferAndEarn.module.css'
import cn from 'clsx'

const Payload = {
  checksum: 'checksum',
  country_id: 1,
}

const ProductCoupons = () => {
  const { productCoupons, isLoading } = useProductCoupon(Payload)
  if (isLoading || !productCoupons) {
    return <LoadingSection />
  } else {
    return (
      <section className="py-6">
        <Container>
          <Typography weight={700} variant="heading3">
            Buy Discount Vouchers
          </Typography>

          <div className={cn(styles.couponContainer)}>
            {productCoupons.map((coupon: any) => (
              <div key={coupon.autoId} className="cursor-pointer">
                <Link href={`/refer-and-earn/redeem-now/${coupon.product_id}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={coupon.bgImage1}
                    alt="coupon"
                    className="object-contain"
                  />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    )
  }
}

export default ProductCoupons
