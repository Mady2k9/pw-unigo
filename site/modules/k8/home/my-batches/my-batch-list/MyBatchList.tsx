import { Container, LoadingSection, Typography } from '@components/ui'
import Image from 'next/image'
import Verified from '@assets/images/verified.svg'
import MyBatchCard from '../my-batch-card/MyBatchCard'
import useMyBatches from '@lib/hooks/batches/useMyBatches'
import Carousel from '@components/common/Carousel'

const MyBatchList = () => {
  const { data, isLoading } = useMyBatches({
    params: { mode: 1, filter: true },
    enabled: true,
  })

  if (isLoading) return <LoadingSection />

  return data.length > 0 ? (
    <section className="flex flex-col gap-8 mb-10 lg:mb-10">
      <div className="flex items-center gap-3 ">
        <Image src={Verified} alt="verified_logo" />
        <Typography variant="heading3" weight={700}>
          My Subscription
        </Typography>
      </div>

      {!!data.length && (
        <Carousel showControlBtn={data.length > 2}>
          {
            <div className="grid grid-flow-col auto-cols-[calc(100%-10px)] md:auto-cols-[calc(50%-10px)] gap-6 pb-4 pt-6">
              {data.map((data: any) => (
                <MyBatchCard key={data._id} batchDetail={data} />
              ))}
            </div>
          }
        </Carousel>
      )}
    </section>
  ) : (
    <></>
  )
}

export default MyBatchList
