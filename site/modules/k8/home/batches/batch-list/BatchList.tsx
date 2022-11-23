import useBatches, {BatchType} from '@lib/hooks/batches/useBatches'
import BatchCard from '../batch-card/BatchCard'
import style from './BatchList.module.css'

const BatchList = () => {
    const {data: selfPacedBatches, isLoading: selfPacedBatchesLoadiing} =
        useBatches({
            cohortId: process.env.NEXT_PUBLIC_K8_COHORT_ID,
            contentType: BatchType.SELF_LEARNING,
        })

    const {data: liveBatches, isLoading: liveBatchesLoadiing} = useBatches({
        cohortId: process.env.NEXT_PUBLIC_K8_COHORT_ID,
        contentType: BatchType.LIVE,
    })

    if (selfPacedBatchesLoadiing && liveBatchesLoadiing) {
        return <div>Loading....</div>
    }

    return (
        <div className={style.cardContainer}>
            {selfPacedBatches.map((data: any) => (
                <BatchCard
                    key={data._id}
                    batchData={data?.batchId}
                />
            ))}
            {liveBatches.map((data: any) => (
                <BatchCard key={data._id} batchData={data?.batchId}/>
            ))}
        </div>
    )
}

export default BatchList
