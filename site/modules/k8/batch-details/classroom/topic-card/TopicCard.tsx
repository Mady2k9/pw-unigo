import { Card } from '@components/ui'
import Image from 'next/image'
import style from './TopicCard.module.css'
import RightArrow from '@assets/images/right-arrow.svg'

const TopicCard = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <Card>
      <div className={style.root} onClick={handleClick}>
        <div className="text-2xl font-bold px-6 h-full flex items-center justify-center bg-[#EBE9F8]">
          1
        </div>
        <div
          className={`flex items-center justify-between ${style.cardDetail}`}
        >
          <div className="flex flex-col justify-center">
            <span className="text-base font-semibold">Coordinate Geometry</span>
            <span className="text-xs font-medium text-[#8B8B8B]">
              10 Lectures
            </span>
          </div>
          <div className={style.arrrowIcon}>
            <Image src={RightArrow} alt="logo" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default TopicCard
