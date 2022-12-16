import { Container, LoadingSection, Typography } from '@components/ui'
import Image from 'next/image'
import Verified from '@assets/images/verified.svg'
import MyBatchCard from '../my-batch-card/MyBatchCard'
import useMyBatches from '@lib/hooks/batches/useMyBatches'

const MyBatchList = () => {
  const { data, isLoading } = useMyBatches({
    params: { mode: 1, filter: true },
    enabled: true,
  })

  if (isLoading) return <LoadingSection />

  return data.length > 0 ? (
    <section className="flex flex-col gap-8 mb-10 lg:mb-32">
      <div className="flex items-center gap-3 ">
        <Image src={Verified} alt="verified_logo" />
        <Typography variant="heading3" weight={700}>
          My Subscription
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-3 md:gap-4">
        {data.map((data: any) => (
          <MyBatchCard key={data._id} batchDetail={data} />
        ))}
      </div>
    </section>
  ) : (
    <></>
  )
}

export default MyBatchList
