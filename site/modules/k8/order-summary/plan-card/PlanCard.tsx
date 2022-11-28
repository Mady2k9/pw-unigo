import { Card, Typography } from '@components/ui'
import { Checkbox } from '@components/ui'
import style from './PlanCard.module.css'
import cn from 'clsx'

const PlanCard = ({
  recommended,
  active,
}: {
  recommended: boolean
  active: boolean
}) => {
  return (
    <Card>
      <div
        className={cn(
          style.cardContainer,
          active ? style.cardBorder : '',
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
            3 Months
          </Typography>
          <Typography variant="tiny" weight={600}>
            <span className="text-indigo-500">₹99/month</span>
          </Typography>
        </div>
        <div className="flex items-center justify-between">
          <div className={style.priceContainer}>
            <div>
              <Typography variant="regular" weight={700}>
                ₹299
              </Typography>
              <Typography variant="small" weight={500}>
                <span className="text-gray-500 line-through ">329</span>
              </Typography>
            </div>
            <div>
              <Typography variant="small" weight={700}>
                <span className="text-[#16a333]">10% OFF</span>
              </Typography>
            </div>
          </div>
          <Checkbox title="" checked={active} />
        </div>
      </div>
    </Card>
  )
}

export default PlanCard
