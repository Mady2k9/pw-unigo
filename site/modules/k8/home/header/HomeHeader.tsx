import { FlyingBoy } from '@components/lotties'
import Star from '@assets/images/Star.png'
import s from './HomeHeader.module.css'
import Image from 'next/image'
import { Typography } from '@components/ui'

const HomeHeader = () => {
  return (
    <div className={s.headerContainer}>
      <div className={s.username}>
        <Typography variant="pageHeading">Hi, Deveshwar</Typography>
      </div>
      <FlyingBoy />
    </div>
  )
}

export default HomeHeader
