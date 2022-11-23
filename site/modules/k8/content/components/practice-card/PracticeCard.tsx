import RightArrow from '@assets/images/right-arrow-round.svg'
import Clipboard from '@assets/images/clipboard.svg'
import style from './PracticeCard.module.css'
import { Card } from '@components/ui'
import Image from 'next/image'

const PracticeCard = ({ variant }: { variant: string }) => {
  return (
    <Card>
      <div className={style.cardContainer}>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src={Clipboard} alt="clipboard_icon" />
          <>
            {variant === 'assignment' ? (
              <div className={style.practiceCardDetails}>
                <span className={style.practiceTitle}>Test Number One</span>
                <span className={style.practiceDetails}>
                  360 Marks | 60 Mins | 30 Questions
                </span>
              </div>
            ) : (
              <span className={style.assignmentTitle}>
                Introduction to Number Systems
              </span>
            )}
          </>
        </div>
        <Image src={RightArrow} alt="arrow_icon" />
      </div>
    </Card>
  )
}

export default PracticeCard
