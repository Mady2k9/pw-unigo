import {FlyingBoy} from '@components/lotties'
import s from './HomeHeader.module.css'
import {Typography, useUI} from '@components/ui'
import {getFullName} from "@lib/user-utility";
import Image from "next/image";
import StarImage from "@assets/images/background/Star.png";

const HomeHeader = () => {
    const {user} = useUI()
    return (
        <div className={s.headerContainer}>
            <div className={'flex relative'}>
                <div className={s.username}>
                    <Typography variant={'heading2'} weight={700}>Hi, {getFullName(user)}</Typography>
                </div>
                <div className={'absolute -right-10 -bottom-5'}>
                    <Image src={StarImage} width={30} height={30}/>
                </div>
            </div>

            <FlyingBoy/>
        </div>
    )
}

export default HomeHeader
