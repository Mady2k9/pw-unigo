import { Card, Typography } from '@components/ui'
import { Checkbox } from '@components/ui'
import style from './PlanCard.module.css'
import cn from 'clsx'
import { priceDisplay } from '@lib/user-utility'
import { Dispatch, SetStateAction, useState } from 'react'

const PlanCard = ({
  plan,
  recommended,
  setIdForMapping,
  idForMapping,
}: {
  plan: any
  recommended: boolean
  setIdForMapping: Dispatch<SetStateAction<string>>
  idForMapping: string
}) => {
  const pricePerMonth = parseInt(plan?.pricePerMonth).toFixed(2)
  return (
    <Card>
      <div
        className={cn(
          'pr-2 pb-2 pl-4 pt-2 lg:pl-6 lg:pb-3 lg:pr-3 lg:pt-3',
          style.cardContainer,
          idForMapping === plan._id && style.cardBorder,
          recommended && 'mt-4'
        )}
      >
        {recommended && (
          <div className={style.recommendedChip}>
            <Typography variant="tiny" weight={700}>
              <span className="text-white">Recommended</span>
            </Typography>
          </div>
        )}
        <div className={style.planContainer}>
          <Typography variant="small" weight={700}>
            {plan.duration} Months
          </Typography>
          <Typography variant="tiny" weight={600}>
            <span className="text-indigo-500">
              {priceDisplay(+pricePerMonth)}/month
            </span>
          </Typography>
        </div>
        <div className="flex items-center justify-between">
          <div className={style.priceContainer}>
            <div>
              <Typography variant="regular" weight={700}>
                {priceDisplay(plan.total)}
              </Typography>
              <Typography variant="small" weight={500}>
                <span className="text-gray-500 line-through ">
                  {plan.price}
                </span>
              </Typography>
            </div>
            <div>
              <Typography variant="small" weight={700}>
                <span className="text-[#16a333]">{plan.discount}% OFF</span>
              </Typography>
            </div>
          </div>
          <Checkbox
            title=""
            checked={idForMapping === plan._id}
            onClick={() => setIdForMapping(plan._id)}
          />
        </div>
      </div>
    </Card>
  )
}

export default PlanCard
