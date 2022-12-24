import {FlyingBoy} from '@components/lotties'
import s from './HomeHeader.module.css'
import {Button, TextInput, Typography, useUI} from '@components/ui'
import {getFirstName} from '@lib/user-utility'
import Image from 'next/image'
import StarImage from '@assets/images/background/Star.png'
import useNotify, {NotificationEnums} from "@lib/useNotify";
import {CheckCircleIcon} from "@heroicons/react/20/solid";

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
            <Button onClick={() => {
                showNotification({
                    description: "This is the new MEssage",
                    type: NotificationEnums.SUCCESS,
                    title: "New Title",
                    onClose: () => {
                        console.log('closed');
                    }
                })
            }}>
                Dummy show Notification
            </Button>
        </div>
    )
}

export default HomeHeader
