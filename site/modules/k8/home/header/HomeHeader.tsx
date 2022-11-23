import {FlyingBoy} from '@components/lotties'
import s from './HomeHeader.module.css'
import {Typography, useUI} from '@components/ui'
import {getFullName} from "@lib/user-utility";

const HomeHeader = () => {
    const {user} = useUI()
    return (
        <div className={s.headerContainer}>
            <div className={s.username}>
                <Typography variant={'heading2'} weight={700}>Hi, {getFullName(user)}</Typography>
            </div>
            <FlyingBoy/>
        </div>
    )
}

export default HomeHeader
