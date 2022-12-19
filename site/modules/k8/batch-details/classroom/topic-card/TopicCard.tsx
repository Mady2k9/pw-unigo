import { Card, Typography } from '@components/ui'
import Image from 'next/image'
import style from './TopicCard.module.css'
import RightArrow from '@assets/images/right-arrow.svg'
import { BatchType } from '@lib/hooks/batches/useBatches'
import { getCardColorByName } from '@lib/colors'
import { Topics } from '@lib/hooks/batches/useBatchTopics'

const TopicCard = ({
  handleClick,
  variant,
  topicData,
  index,
}: {
  handleClick: () => void
  variant: BatchType
  topicData?: Topics
  index?: number
}) => {
  {
    return variant === BatchType.SELF_LEARNING ? (
      <Card>
        <div
          className={
            style.root + ' animated fadeIn duration-200 cursor-pointer'
          }
          onClick={handleClick}
        >
          {index !== undefined && (
            <div
              className="px-6 h-full flex items-center justify-center rounded-l-lg"
              style={{
                background: getCardColorByName(topicData?.name as string),
              }}
            >
              <Typography variant="heading3" weight={700}>
                {index + 1}
              </Typography>
            </div>
          )}
          <div
            className={`flex items-center justify-between ${style.cardDetail}`}
          >
            <div className="flex flex-col justify-center">
              <Typography capitalize={true} variant="regular" weight={600}>
                {topicData?.name}
              </Typography>
              <Typography variant="tiny" weight={500}>
                <span className="text-[#8B8B8B]">
                  {topicData?.videos} Lectures
                </span>
              </Typography>
            </div>
            <div className={style.arrrowIcon}>
              <Image src={RightArrow} alt="logo" />
            </div>
          </div>
        </div>
      </Card>
    ) : (
      <Card>
        <div
          className="pl-3 py-4 animated fadeIn duration-200 cursor-pointer"
          onClick={handleClick}
        >
          <div className="border-l-4 border-indigo-400 py-2 pl-3">
            <Typography variant="small" capitalize={true} weight={700}>
              {topicData ? topicData.name : 'All Content'}
            </Typography>
          </div>
        </div>
      </Card>
    )
  }
}

export default TopicCard
