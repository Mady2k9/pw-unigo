import { Card, Typography } from '@components/ui'
import { Checkbox } from '@components/ui'
import style from './PlanCard.module.css'
import cn from 'clsx'
import { priceDisplay } from '@lib/user-utility'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Plans } from '@lib/hooks/batches/usePlansList'

const PlanCard = ({
  plan,
  recommended,
  setIdForMapping,
  setActivePlan,
  activePlan,
}: {
  plan: any
  recommended: boolean
  setIdForMapping: Dispatch<SetStateAction<string>>
  setActivePlan: Dispatch<SetStateAction<any>>
  activePlan: Plans
}) => {
  const pricePerMonth =
    plan.pricePerMonth > 0 ? +(plan?.pricePerMonth).toFixed() : 0
  return (
   <div className={recommended ? 'mt-4' : ''}>
     <Card>
       <div
           className={cn(
               'pr-2 pb-2 pl-4 pt-2 lg:pl-6 lg:pb-3 lg:pr-3 lg:pt-3',
               style.cardContainer,
               activePlan?._id === plan._id && style.cardBorder,
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
             <span className="text-indigo-500">{pricePerMonth}/month</span>
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
             {plan.discount > 0 && (
                 <div className={style.discountContainer}>
                   <Typography variant="small" weight={700}>
                     <span className="text-[#16a333]">{plan.discount}% OFF</span>
                   </Typography>
                 </div>
             )}
           </div>
           <Checkbox
               title=""
               checked={activePlan?._id === plan._id}
               onClick={() => {
                 setIdForMapping(plan._id)
                 setActivePlan(plan)
               }}
           />
         </div>
       </div>
     </Card>
   </div>
  )
}

export default PlanCard
