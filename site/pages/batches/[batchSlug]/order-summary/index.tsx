import { Layout } from '@components/common'
import { Container, Typography } from '@components/ui'
import { BatchPurchaseCard, CheckoutCard, PlanCard } from '@modules/k8'
import React from 'react'

const OrderSummary = () => {
  return (
    <Container>
      <main className="w-full flex flex-col md:flex-row gap-5 md:gap-28 justify-start">
        <section className="flex flex-col gap-9 flex-1">
          <div className="flex flex-col gap-6">
            <Typography variant="heading4" weight={700}>
              Order Summary
            </Typography>

            <BatchPurchaseCard />
          </div>

          <div className="flex flex-col">
            <Typography variant="heading4" weight={700}>
              Choose your plan
            </Typography>
            <Typography variant="small" weight={500}>
              <span className="text-gray-500">
                You can access all the content till the expiry of your purchased
                plan
              </span>
            </Typography>
            <div className="flex flex-col gap-4 mt-4">
              {[1, 2, 3].map((plan) => (
                <PlanCard
                  key={plan}
                  recommended={plan === 3 ? true : false}
                  active={plan === 2 ? true : false}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="lg:min-w-[348px]">
          <CheckoutCard />
        </section>
      </main>
    </Container>
  )
}

export default OrderSummary
OrderSummary.Layout = Layout
