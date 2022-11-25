import RightArrow from '@assets/images/right-arrow-round.svg'
import Clipboard from '@assets/images/clipboard.svg'
import style from './PracticeCard.module.css'
import { Card, Typography } from '@components/ui'
import Image from 'next/image'

const PracticeCard = ({ variant }: { variant: string }) => {
  return (
    <Card>
      <div className={style.cardContainer + ' animated fadeIn duration-200 '}>
        <div>
          <Image src={Clipboard} alt="clipboard_icon" />
          <>
            {variant === 'assignment' ? (
              <div className={style.practiceCardDetails}>
                <Typography variant="small" weight={600}>
                  <span className="truncate">Test Number One</span>
                </Typography>
                <Typography variant="tiny" weight={500}>
                  <span className="text-gray-500">
                    360 Marks | 60 Mins | 30 Questions
                  </span>
                </Typography>
              </div>
            ) : (
              <Typography variant="small" weight={600}>
                <span className={style.assignmentTitle}>
                  Introduction to Number Systems
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
