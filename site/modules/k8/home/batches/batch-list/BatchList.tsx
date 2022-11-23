import useBatches from '@lib/hooks/batches/useBatches'
import BatchCard from '../batch-card/BatchCard'
import style from './BatchList.module.css'

const BatchList = () => {
  const { data: selfPacedBatches, isLoading: selfPacedBatchesLoadiing } =
    useBatches({
      cohortId: '637cb2ad8dcf800025f2fe68',
      contentType: 'selfLearning',
    })

  const { data: liveBatches, isLoading: liveBatchesLoadiing } = useBatches({
    cohortId: '637cb2ad8dcf800025f2fe68',
    contentType: 'live',
  })

  if (selfPacedBatchesLoadiing && liveBatchesLoadiing) {
    return <div>Loading....</div>
  }

  return (
    <div className={style.cardContainer}>
      {selfPacedBatches.map((data: any) => (
        <BatchCard
          key={data._id}
          variant={'selfLearning'}
          batchData={data?.batchId}
        />
      ))}
      {liveBatches.map((data: any) => (
        <BatchCard key={data._id} variant={'live'} batchData={data?.batchId} />
      ))}
    </div>
  )
}

export default BatchList
