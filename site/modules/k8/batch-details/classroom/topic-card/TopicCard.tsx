import {Card, Typography} from '@components/ui'
import Image from 'next/image'
import style from './TopicCard.module.css'
import RightArrow from '@assets/images/right-arrow.svg'

const TopicCard = ({handleClick}: { handleClick: () => void }) => {
    return (
        <Card>
            <div className={style.root + ' animated fadeIn duration-200'} onClick={handleClick}>
                <div className="px-6 h-full flex items-center justify-center bg-[#EBE9F8] rounded-l-lg">
                    <Typography variant="heading3" weight={700}>
                        1
                    </Typography>
                </div>
                <div
                    className={`flex items-center justify-between ${style.cardDetail}`}
                >
                    <div className="flex flex-col justify-center">
                        <Typography variant="regular" weight={600}>
                            Coordinate Geometry
                        </Typography>
                        <Typography variant="tiny" weight={500}>
                            <span className="text-[#8B8B8B]">10 Lectures</span>
                        </Typography>
                    </div>
                    <div className={style.arrrowIcon}>
                        <Image src={RightArrow} alt="logo"/>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default TopicCard
