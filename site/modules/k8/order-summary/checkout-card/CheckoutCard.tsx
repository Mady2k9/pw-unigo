/* eslint-disable @next/next/no-img-element */
import { Button, Card, Checkbox, Typography, TextInput } from '@components/ui'
import style from './CheckoutCard.module.css'
import coin from '@assets/images/coin.svg'
import { text } from 'stream/consumers'
import { DiscountBadge } from '@components/common'

const CheckoutCard = () => {
  return (
    <Card>
      <div className={style.cardContainer}>
        <div className={style.upperContainer}>
          <Typography variant="heading4" weight={700}>
            Offers & Coupons
          </Typography>
          <div>
            <div className={style.rewardContainer}>
              <div className="flex items-center">
                <Checkbox title="" />
                <div className="flex items-center gap-2">
                  <img src={coin.src} alt="" />
                  <Typography variant="tiny" weight={700}>
                    500 Reward Points
                  </Typography>
                </div>
              </div>
              <Typography variant="tiny" weight={500}>
                <span className="text-gray-500">
                  You have 500 rewards point to redeem
                </span>
              </Typography>
            </div>
          </div>
          <div className={style.applyCouponContainer}>
            {/* <span>Have a Coupon Code?</span>
            <Button variant="naked" className={style.applyBtn}>
              APPLY
            </Button> */}
            <TextInput
              action={{
                text: 'APPLY',
                onAction: () => console.log('123'),
              }}
              variant="gray"
              placeholder="Have a Coupon Code?"
            />
          </div>
        </div>

        <div className={style.lowerContainer}>
          <Typography variant="heading4" weight={700}>
            Breakups
          </Typography>
          <div className={style.breakupsContainer}>
            <div>
              <Typography variant="small" weight={500}>
                Sub Total
              </Typography>
              <Typography variant="small" weight={600}>
                ₹1999
              </Typography>
            </div>
            <div>
              <Typography variant="small" weight={500}>
                Discount
              </Typography>
              <Typography variant="small" weight={500}>
                <span className="text-[#3AA2AB]">₹ 999</span>
              </Typography>
            </div>
            <div>
              <Typography variant="small" weight={500}>
                Sub Total
              </Typography>
              <Typography variant="subHeading" weight={600}>
                ₹1999
              </Typography>
            </div>
          </div>
        </div>

        <Button>Pay Now</Button>
      </div>
    </Card>
  )
}

export default CheckoutCard
