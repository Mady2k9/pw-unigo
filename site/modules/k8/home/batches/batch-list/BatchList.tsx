import useBatches, { BatchType } from '@lib/hooks/batches/useBatches'
import BatchCard from '../batch-card/BatchCard'
import style from './BatchList.module.css'
import { LoadingSection, useUI } from '@components/ui'

const BatchList = () => {
  const { latestCohortData } = useUI()
  const { data: selfPacedBatches, isLoading: selfPacedBatchesLoading } =
    useBatches({
      cohortId: latestCohortData?._id,
      contentType: BatchType.SELF_LEARNING,
    })

  const { data: liveBatches, isLoading: liveBatchesLoading } = useBatches({
    cohortId: latestCohortData?._id,
    contentType: BatchType.LIVE,
  })

  return (
    <div className={style.cardContainer}>
      {selfPacedBatchesLoading && liveBatchesLoading && (
        <div className={'col-span-2'}>
          <LoadingSection />
        </div>
      )}
      {selfPacedBatches.map((data: any) => (
        <BatchCard key={data._id + 'self'} batchData={data?.batchId} />
      ))}
      {liveBatches.map((data: any) => (
        <BatchCard key={data._id + 'live'} batchData={data?.batchId} />
      ))}
    </div>
  )
}

export default BatchList
