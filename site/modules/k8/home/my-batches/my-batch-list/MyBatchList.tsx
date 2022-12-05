import { Container, Typography } from '@components/ui'
import Image from 'next/image'
import Verified from '@assets/images/verified.svg'
import MyBatchCard from '../my-batch-card/MyBatchCard'

const MyBatchList = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-3 ">
        <Image src={Verified} alt="verified_logo" />
        <Typography variant="heading3" weight={700}>
          My Subscription
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
        <MyBatchCard />
        <MyBatchCard />
      </div>
    </section>
  )
}

export default MyBatchList
