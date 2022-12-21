import {FlyingBoy} from '@components/lotties'
import s from './HomeHeader.module.css'
import {Button, Typography, useUI} from '@components/ui'
import {getFirstName} from '@lib/user-utility'
import Image from 'next/image'
import StarImage from '@assets/images/background/Star.png'
import useNotify, {NotificationEnums} from "@lib/useNotify";

const HomeHeader = () => {
    const {user,} = useUI()
    const {showNotification} = useNotify();
    return (
        <div className={s.headerContainer}>
            <div className={'flex relative'}>
                <div className={s.username}>
                    <Typography variant={'heading2'} weight={700}>
                        Hello! {getFirstName(user)}
                    </Typography>
                </div>
                <div className={'absolute -right-10 -bottom-5'}>
                    <Image src={StarImage} width={30} height={30} alt="star-image"/>
                </div>
            </div>

            <FlyingBoy/>

        </div>
    )
}

export default HomeHeader
