import RightArrow from '@assets/images/right-arrow-round.svg'
import Clipboard from '@assets/images/clipboard.svg'
import style from './PracticeCard.module.css'
import { Card, Typography } from '@components/ui'
import Image from 'next/image'
import { PracticeCardType } from '@modules/k8/constants'
import { DppNotes } from '@lib/hooks/batches/useBatchContents'

const PracticeCard = ({
  variant,
  data,
}: {
  variant: PracticeCardType
  data: DppNotes
}) => {
  return (
    <Card>
      <div className={style.cardContainer + ' animated fadeIn duration-200 '}>
        <div>
          <Image src={Clipboard} alt="clipboard_icon" />
          <>
            {variant === PracticeCardType.PRACTICE ? (
              <div className={style.practiceCardDetails}>
                <Typography capitalize={true} variant="small" weight={600}>
                  <span>{data?.exerciseIds[0]?.title}</span>
                </Typography>
                <Typography variant="tiny" weight={500}>
                  <span className="text-gray-500">
                    360 Marks | 60 Mins | 30 Questions
                  </span>
                </Typography>
              </div>
            ) : (
              <Typography capitalize={true} variant="small" weight={600}>
                <span className={style.assignmentTitle}>
                  {data?.homeworkIds[0]?.topic}
                </span>
              </Typography>
            )}
          </>
        </div>
        <Image src={RightArrow} alt="arrow_icon" />
      </div>
    </Card>
  )
}

export default PracticeCard
